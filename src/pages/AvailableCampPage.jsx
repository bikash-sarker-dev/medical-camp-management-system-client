import React from "react";
import AvailableMain from "../components/available/AvailableMain";
import PageHead from "../components/share/pageHead/PageHead";

const AvailableCampPage = () => {
  return (
    <div>
      <PageHead title={"Available Camps"} pathName={"available Camps"} />
      <AvailableMain />
    </div>
  );
};

export default AvailableCampPage;
