import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHead from "./../../share/sectionHead/SectionHead";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data = [] } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosPublic("/home-blogs");
      return res.data;
    },
  });
  return (
    <section className="my-24">
      <div className="container">
        <SectionHead
          title="Blogs"
          subTitle="A comprehensive medical camp offering free health checkups and consultations to ensure healthcare access for everyone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
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

export default Blogs;
