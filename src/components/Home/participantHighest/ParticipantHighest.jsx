import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHead from "../../share/sectionHead/SectionHead";
import BookingCard from "./PopularCard";

const ParticipantHighest = () => {
  const axiosPublic = useAxiosPublic();

  const { data: popularCamps = [] } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      let res = await axiosPublic.get("/camps/popular");
      return res.data;
    },
  });

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
            <Link to="/availableCamp">
              <Button className="text-lg font-poppins bg-camp-primary px-10">
                See All More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantHighest;
