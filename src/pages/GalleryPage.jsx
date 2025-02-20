import { useQuery } from "@tanstack/react-query";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import TabTitle from "./../components/share/htmlHead/TabTitle";
import PageHead from "./../components/share/pageHead/PageHead";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

const GalleryPage = () => {
  const axiosPublic = useAxiosPublic();
  const { data = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      let res = await axiosPublic("/gallery");
      return res.data;
    },
  });

  const onInit = () => {};
  return (
    <div>
      <TabTitle title={` Medical | Gallery`} />
      <PageHead title={"Gallery"} pathName={"Image-gallery"} />

      <div className="container">
        <div className="mt-8 mb-12">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            className="flex"
          >
            {data.map((image) => (
              <a
                className="inline-block bg-camp-accent"
                key={image._id}
                href={image.imageUrl}
              >
                <img
                  className="h-60 w-full"
                  alt={`Image Id : ${image._id}`}
                  src={image.imageUrl}
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
