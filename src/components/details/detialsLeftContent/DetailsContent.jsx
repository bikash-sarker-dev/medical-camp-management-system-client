import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DetailsContent = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);

  const { data: details = {} } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      let res = await axiosPublic.get(`/details/${id}`);
      return res.data;
    },
  });

  const {
    CampName,
    CampFree,
    DateAndTime,
    Description,
    HealthcareProfessional,
    Image,
    Location,
    ParticipantCount,
  } = details || {};

  console.log(details);
  return (
    <section className="">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="hero min-h-screen container"
      >
        <div className="flex-col my-20">
          <img
            src={Image}
            className=" my-10 rounded-lg shadow-2xl md:min-w-[700px] lg:max-h-[700px]"
          />
          <div>
            <h1 className="text-3xl font-bold">{CampName}</h1>

            <p className="text-gray-700 flex-1 mt-3 font-medium">
              Health care Professional: {HealthcareProfessional}
            </p>
            <p className="text-gray-700 flex-1 mt-3 font-medium"></p>

            <p className="text-gray-700 flex-1 mt-3 font-medium">
              date or time: {DateAndTime}
            </p>

            <p className="text-gray-700 flex-1 mt-3 font-medium">
              location: {Location}
            </p>

            <p className="text-gray-700 flex-1 mt-3 font-medium">
              Participant Count: {ParticipantCount}
            </p>

            <p className="py-6 max-w-3xl">{Description}</p>
          </div>

          <div className="mt-6">
            <Button className="text-lg px-10 bg-camp-accent mt-18">
              Join Camp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
