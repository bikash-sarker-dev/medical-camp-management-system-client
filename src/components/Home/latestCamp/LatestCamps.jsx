import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHead from "./../../share/sectionHead/SectionHead";
import LatestCard from "./LatestCard";

const LatestCamps = () => {
  const axiosPublic = useAxiosPublic();

  const { data = [] } = useQuery({
    queryKey: ["latestCamps"],
    queryFn: async () => {
      let res = await axiosPublic("/camps/latest");
      return res.data;
    },
  });

  return (
    <section className="my-24">
      <div className="container">
        <SectionHead
          title="Latest Camps"
          subTitle="A comprehensive medical camp offering free health checkups and consultations to ensure healthcare access for everyone."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          {data.map((camp) => (
            <LatestCard key={camp._id} camp={camp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCamps;
