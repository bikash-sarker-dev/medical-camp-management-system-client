import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHead from "../../share/sectionHead/SectionHead";
import BookingCard from "./PopularCard";

const ParticipantHighest = () => {
  const axiosPublic = useAxiosPublic();

  const { data: popularCamps = [] } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      let res = await axiosPublic.get("/camps");
      return res.data;
    },
  });

  console.log(popularCamps);

  return (
    <div className="mb-32 mt-10">
      <div className="container">
        <SectionHead
          title="Popular Camps"
          subTitle="A comprehensive medical camp offering free health checkups and consultations to ensure healthcare access for everyone."
        />

        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularCamps.map((camp) => (
              <BookingCard key={camp._id} camp={camp} />
            ))}
          </div>
          <div className="text-center my-12">
            <Button className="text-lg font-poppins bg-camp-primary px-10">
              See All More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantHighest;
