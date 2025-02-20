import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AllBlogCard from "./AllBlogCard";

const AllBlogs = () => {
  const axiosPublic = useAxiosPublic();

  const { data = [] } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      let res = await axiosPublic("/blogs");
      return res.data;
    },
  });
  return (
    <div className="mt-20">
      {data.map((blog) => (
        <AllBlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default AllBlogs;
