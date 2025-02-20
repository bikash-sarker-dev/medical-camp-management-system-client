import React from "react";
import AllBlogs from "../components/blogs/AllBlogs";
import DetailsLatestCamps from "./../components/details/detialsRightContent/DetailsLatestCamps";
import DetailsSearch from "./../components/details/detialsRightContent/DetailsSearch";
import TabTitle from "./../components/share/htmlHead/TabTitle";
import PageHead from "./../components/share/pageHead/PageHead";

const BlogPage = () => {
  return (
    <div>
      <TabTitle title={` Medical | blogs`} />
      <PageHead title={"Blogs"} pathName={"blogs"} />
      <div>
        <div className="container">
          <div className="md:flex gap-5">
            <div className="left-side md:w-2/3">
              <AllBlogs />
            </div>
            <div className="right-side md:w-1/3">
              <DetailsSearch />
              <DetailsLatestCamps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
