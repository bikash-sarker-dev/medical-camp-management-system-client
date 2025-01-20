import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import { FaStar, FaUserAlt } from "react-icons/fa";
import { FaSackDollar, FaUsers } from "react-icons/fa6";
import HeaderDashboard from "../sharedashboard/HeaderDashboard";
import useSecureAxios from "./../../hooks/useSecureAxios";

const HomeDashboard = () => {
  const secureAxios = useSecureAxios();

  const { data: homeDash = {} } = useQuery({
    queryKey: ["homeDash"],
    queryFn: async () => {
      const res = await secureAxios.get(`/organizer-analytics`);
      return res.data;
    },
  });
  const { users, joins, feedbacks, totalFess } = homeDash;
  return (
    <div>
      <HeaderDashboard title={"Home"} />
      <div className="mt-12 lg:mr-5 px-3 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          <Card className="mt-6 bg-camp-info ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Received Amount
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaSackDollar className="text-7xl text-purple-600" />
                </div>
                <Typography className="text-7xl font-bold">
                  {totalFess}$
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 bg-camp-info ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                All Camps
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaUsers className="text-7xl text-cyan-400 " />
                </div>
                <Typography className="text-7xl font-bold ">{joins}</Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 bg-camp-info ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                All Participants
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaUserAlt className="text-7xl text-green-500" />
                </div>
                <Typography className="text-7xl font-bold">{users}</Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 bg-camp-info ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                All Participant success feedback
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaStar className="text-7xl text-orange-500" />
                </div>
                <Typography className="text-7xl font-bold">
                  {feedbacks}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
