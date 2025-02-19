import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import LightGallery from "lightgallery/react";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHead from "./../../share/sectionHead/SectionHead";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const { data = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosPublic("/home-gallery");
      return res.data;
    },
  });

  const onInit = () => {};

  return (
    <section className="my-24">
      <SectionHead
        title="Gallery Camps"
        subTitle="A comprehensive medical camp offering free health checkups and consultations to ensure healthcare access for everyone."
      />
      <div className="container">
        <div className="mt-8">
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
        <div className="text-center my-12">
          <Link to="/">
            <Button className="text-lg font-poppins bg-camp-primary px-10">
              See All More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
