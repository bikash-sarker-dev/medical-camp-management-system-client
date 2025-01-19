import React from "react";
import AvailableMain from "../components/available/AvailableMain";
import TabTitle from "../components/share/htmlHead/TabTitle";
import PageHead from "../components/share/pageHead/PageHead";

const AvailableCampPage = () => {
  return (
    <div>
      <TabTitle title={` Medical | Available`} />
      <PageHead title={"Available Camps"} pathName={"available Camps"} />
      <AvailableMain />
    </div>
  );
};

export default AvailableCampPage;
