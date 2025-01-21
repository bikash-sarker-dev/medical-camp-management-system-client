import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSackDollar, FaUsers } from "react-icons/fa6";
import { HiMiniPlayPause } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import HeaderDashboard from "../../sharedashboard/HeaderDashboard";
import useAuth from "./../../../hooks/useAuth";
import useSecureAxios from "./../../../hooks/useSecureAxios";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Analytics = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  //   participant charter Analytics
  const { data: participantAnalyticsJoin = {} } = useQuery({
    queryKey: ["participantAnalyticsJoin"],
    queryFn: async () => {
      const res = await secureAxios.get(`/join-camps`);
      return res.data;
    },
  });

  //   participant Stat Analytics
  const { data: participantAnalytics = {} } = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/participant-analytics?email=${user.email}`
      );
      return res.data;
    },
  });

  const {
    totalFess,
    totalJoin,
    joinPaymentStatusPaid,
    joinConfirmationPendingCount,
    joinConfirmationConfirmedCount,
  } = participantAnalytics || {};

  return (
    <div>
      <HeaderDashboard title={"Analytics charter"} />

      <div className="mt-12 px-3 lg:px-0">
        <div className="grid grid-coles-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          <Card className="lg:mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Payment Amount
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaSackDollar className=" lg:text-7xl text-3xl text-yellow-700" />
                </div>
                <Typography className=" lg:text-7xl text-3xl font-bold">
                  {totalFess}$
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="lg:mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                My all Join Camps
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaUsers className=" lg:text-7xl text-3xl text-cyan-400 " />
                </div>
                <Typography className=" lg:text-7xl text-3xl font-bold ">
                  {totalJoin ? totalJoin : "0"}
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="lg:mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Payment Successfully
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <IoShieldCheckmark className=" lg:text-7xl text-3xl text-green-500" />
                </div>
                <Typography className=" lg:text-7xl text-3xl font-bold">
                  {joinPaymentStatusPaid ? joinPaymentStatusPaid : "0"}
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="lg:mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                My Confirmation Status Pending
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <HiMiniPlayPause className=" lg:text-7xl text-3xl text-purple-500" />
                </div>
                <Typography className=" lg:text-7xl text-3xl font-bold">
                  {joinConfirmationPendingCount
                    ? joinConfirmationPendingCount
                    : "0"}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* charter  */}
      <div className="mr-10">
        <div>
          <h1 className="text-3xl my-5 font-semibold">Join Camps</h1>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={1000}
              height={500}
              data={participantAnalyticsJoin}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="campName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="campFees" fill="#8884d8" />
              <Bar dataKey="age" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Analytics;
