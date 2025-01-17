import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import HeaderDashboard from "../sharedashboard/HeaderDashboard";
import useSecureAxios from "./../../hooks/useSecureAxios";

const AllParticipant = () => {
  const secureAxios = useSecureAxios();

  const { data: participants = [], refetch } = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      let res = await secureAxios.get("/users");
      return res.data;
    },
  });

  const handleAdmin = async (participant) => {
    console.log(participant);
    const res = await secureAxios.patch(`/users/organizer/${participant._id}`);
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success(`You are name ${participant.name} Organizer Successfully`);
    }
  };

  const handleDeleteParticipant = async (participant) => {
    console.log(participant);
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
          `/users/participant/${participant._id}`
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
      <HeaderDashboard title={"All participant"} />
      <div className="mt-12 mr-8">
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Participant Name
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Email
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Role
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    {" "}
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant._id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {participant.name}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {participant.email}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {participant.role ? (
                        <>
                          <span className=" text-camp-primary font-semibold">
                            Organizer
                          </span>
                        </>
                      ) : (
                        <>
                          <Button
                            onClick={() => handleAdmin(participant)}
                            size="sm"
                            className="bg-camp-secondary flex gap-1"
                          >
                            <FaUser /> Add Organizer
                          </Button>
                        </>
                      )}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Button
                      onClick={() => handleDeleteParticipant(participant)}
                      size="sm"
                      href="#"
                      className="block font-sans text-md bg-red-500 antialiased font-medium leading-normal text-camp-background "
                    >
                      <RiDeleteBin5Line />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllParticipant;
