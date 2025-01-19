import { Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import HeaderDashboard from "../sharedashboard/HeaderDashboard";
import useSecureAxios from "./../../hooks/useSecureAxios";

const TABLE_HEAD = [
  "Participant Name",
  "Camp Name",
  "Camp Fees",
  "Payment Status",
  "Confirmation Status",
  "Action",
];

const ManageRegisteredCamps = () => {
  const secureAxios = useSecureAxios();

  const { data: joinCamps = [], refetch } = useQuery({
    queryKey: ["joinCamps"],
    queryFn: async () => {
      const res = await secureAxios.get("/join-camps");
      return res.data;
    },
  });

  //   join camp deleted working
  const handleDeleteJoinCamp = (JoinItemCamp) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await secureAxios.delete(
          `/delete-join-camps/${JoinItemCamp._id}`
        );
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  //   join camp status update working
  const handleUpdateStatusJoinCamp = (JoinItemCamp) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be payment status and confirmation status update",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await secureAxios.patch(
          `/update-join-camps/${JoinItemCamp._id}`
        );
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Updated!",
            text: "Your file has been updated.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <HeaderDashboard title={"Manage registered camps"} />
      <div className="mt-10 mr-6">
        <Card className="h-full w-full overflow-scroll h-[700px]">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {joinCamps.map((joinItem) => (
                <tr key={joinItem._id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {joinItem.participantName}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {joinItem.campName}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      $ {joinItem.campFees}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-semibold p-1 rounded-md inline-block px-3 ${
                        joinItem.PaymentStatus === "paid" &&
                        joinItem.Confirmation === "confirmed"
                          ? "bg-green-100 "
                          : "bg-yellow-100"
                      }`}
                    >
                      {joinItem.PaymentStatus}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-semibold p-1 rounded-md inline-block px-3 ${
                        joinItem.PaymentStatus === "paid" &&
                        joinItem.Confirmation === "confirmed"
                          ? "bg-green-100 "
                          : "bg-yellow-100"
                      }`}
                    >
                      {joinItem.Confirmation}
                    </Typography>
                  </td>

                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium "
                    >
                      {joinItem.PaymentStatus === "paid" &&
                      joinItem.Confirmation === "confirmed" ? (
                        <>
                          <button
                            onClick={() => handleDeleteJoinCamp(joinItem)}
                            className="bg-red-500 p-2 rounded-sm text-camp-background mx-1 ml-[42px]"
                          >
                            <FaTimes className="" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleUpdateStatusJoinCamp(joinItem)}
                            className="bg-green-500 p-2 rounded-sm text-camp-background mx-1"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={() => handleDeleteJoinCamp(joinItem)}
                            className="bg-red-500 p-2 rounded-sm text-camp-background mx-1"
                          >
                            <FaTimes className="" />
                          </button>
                        </>
                      )}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
