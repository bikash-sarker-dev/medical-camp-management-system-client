import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSackDollar, FaUsers } from "react-icons/fa6";
import { HiMiniPlayPause } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import HeaderDashboard from "../../sharedashboard/HeaderDashboard";
import useAuth from "./../../../hooks/useAuth";
import useSecureAxios from "./../../../hooks/useSecureAxios";

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

  console.log(participantAnalyticsJoin);

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
  console.log(participantAnalytics);
  const {
    totalFess,
    totalJoin,
    joinPaymentStatusPaid,
    joinConfirmationPendingCount,
    joinConfirmationConfirmedCount,
  } = participantAnalytics;
  return (
    <div>
      <HeaderDashboard title={"Analytics charter"} />

      <div className="mt-12">
        <div className="flex gap-10">
          <Card className="mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Payment Amount
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaSackDollar className="text-7xl text-yellow-700" />
                </div>
                <Typography className="text-7xl font-bold">
                  {totalFess}$
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                My all Join Camps
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <FaUsers className="text-7xl text-cyan-400 " />
                </div>
                <Typography className="text-7xl font-bold ">
                  {totalJoin}
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Payment Successfully
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <IoShieldCheckmark className="text-7xl text-green-500" />
                </div>
                <Typography className="text-7xl font-bold">
                  {joinPaymentStatusPaid}
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                My Confirmation Status Pending
              </Typography>
              <div className="flex mt-5 gap-10">
                <div>
                  <HiMiniPlayPause className="text-7xl text-purple-500" />
                </div>
                <Typography className="text-7xl font-bold">
                  {joinConfirmationPendingCount}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
