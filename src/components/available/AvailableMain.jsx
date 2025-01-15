import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardDefault from "./CardAvailable";
import SearchAndSorting from "./SearchAndSorting";

const AvailableMain = () => {
  const axiosPublic = useAxiosPublic();
  const [camps, setCamps] = useState([]);

  const { data: allCamp = [] } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosPublic.get("/camps");
      setCamps(res.data);
      console.log(res.data);
    },
  });

  return (
    <div className="my-24">
      <div className="container">
        <SearchAndSorting setCamps={setCamps} camps={camps} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {camps.map((camp) => (
            <CardDefault key={camp._id} camp={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableMain;
