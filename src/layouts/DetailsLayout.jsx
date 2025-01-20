import React from "react";
import { Outlet } from "react-router-dom";
import DetailsLatestCamps from "../components/details/detialsRightContent/DetailsLatestCamps";
import DetailsSearch from "../components/details/detialsRightContent/DetailsSearch";
import PageHead from "../components/share/pageHead/PageHead";

const DetailsLayout = () => {
  return (
    <div>
      <PageHead title={"Details Camp"} pathName={"details"} />
      <div className="container">
        <div className="md:flex gap-5">
          <div className="left-side md:w-2/3">
            <Outlet />
          </div>
          <div className="right-side md:w-1/3">
            <DetailsSearch />
            <DetailsLatestCamps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
