import { Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeaderDashboard from "../../sharedashboard/HeaderDashboard";
import useAuth from "./../../../hooks/useAuth";
import useSecureAxios from "./../../../hooks/useSecureAxios";

const TABLE_HEAD = [
  "Participant Name",
  "Camp Name",
  "Camp Fees",
  "Payment Status",
  "Confirmation Status",
  "Cancel",
  "Feedback",
];

const RegisteredCampManage = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();

  const { data: registeredCamps = [], refetch } = useQuery({
    queryKey: ["registeredCamps"],
    queryFn: async () => {
      const res = await secureAxios.get(`/registered-join/${user.email}`);
      return res.data;
    },
  });

  const handleDeleteRegisteredJoinCamp = (JoinItemCamp) => {
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
  return (
    <div>
      <HeaderDashboard title={"Register camps"} />
      <div className="mt-10 mr-6">
        <Card className="h-full w-full overflow-scroll">
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
              {registeredCamps.map((joinItem) => (
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
                      className={`font-semibold p-1 rounded-md inline-block px-3 `}
                    >
                      {joinItem.PaymentStatus === "unPaid" ? (
                        <>
                          <Link
                            to={`/dashboard/registered-camps/payment/${joinItem._id}`}
                          >
                            <button className="bg-camp-accent p-2 rounded-sm text-camp-background mx-1">
                              Pay
                            </button>
                          </Link>
                        </>
                      ) : (
                        "Paid"
                      )}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-semibold p-1 rounded-md inline-block px-3 `}
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
                      <>
                        <button
                          onClick={() =>
                            handleDeleteRegisteredJoinCamp(joinItem)
                          }
                          className="bg-red-500 p-2 rounded-sm text-camp-background mx-1"
                        >
                          Cancel
                        </button>
                      </>
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
                      {joinItem.Confirmation === "confirmed" ? (
                        <button className="bg-green-500 p-2 rounded-sm text-camp-background mx-1">
                          feedback
                        </button>
                      ) : (
                        "N/A"
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

export default RegisteredCampManage;
