import React from "react";
import DetailsContent from "../components/details/detialsLeftContent/DetailsContent";
import TabTitle from "../components/share/htmlHead/TabTitle";

const DetailsPage = () => {
  return (
    <div>
      <TabTitle title={` Medical | Details`} />
      <DetailsContent />
    </div>
  );
};

export default DetailsPage;
