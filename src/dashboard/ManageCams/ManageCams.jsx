import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import HeaderDashboard from "../sharedashboard/HeaderDashboard";
import useSecureAxios from "./../../hooks/useSecureAxios";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  CardHeader,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const imageKey = import.meta.env.VITE_ACCESS_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageKey}`;

const ManageCamps = () => {
  const secureAxios = useSecureAxios();
  const axiosPublic = useAxiosPublic();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [upCamp, setUpCamp] = useState("");
  const [camps, setCamps] = useState([]);
  const [isWash, setIsWash] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    secureAxios.get(`/camp-search?search=${search}`).then((res) => {
      setCamps(res.data);
    });
  }, [search, isWash]);

  const handleOpen = () => {
    setOpen(!open);
    reset();
  };
  //   delete function
  const handleDeleteCamp = (camp) => {
    setIsWash(true);
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
        const res = await secureAxios.delete(`/camps/${camp._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setIsWash(false);
        }
      }
    });
  };

  //   update working function
  const handleUpdateCamp = (camp) => {
    setUpCamp(camp);
    handleOpen();
  };

  const onSubmit = async (data) => {
    setIsWash(true);

    const imageFile = { image: data.photo[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.success) {
      const campItem = {
        CampName: data.CampName,
        Image: res.data.data.display_url,
        CampFees: parseInt(data.CampFees),
        DateAndTime: data.DateAndTime,
        Location: data.Location,
        HealthcareProfessional: data.HealthcareProfessional,
        ParticipantCount: parseInt(data.ParticipantCount),
        Description: data.Description,
      };

      const res2 = await secureAxios.put(
        `/update-camp/${upCamp._id}`,
        campItem
      );

      if (res2.data.modifiedCount > 0) {
        setIsWash(false);
        setOpen(false);

        toast.success("Your Camp Data Update successfully");
      }
      reset();
    }
  };

  return (
    <div>
      <HeaderDashboard title={"Manage Camps"} />

      <div className="lg:mr-8 my-10 px-4 lg:px-0">
        <div className="relative flex flex-col w-full h-[700px] text-gray-700 bg-camp-default shadow-md rounded-xl bg-clip-border">
          {/* searching  */}
          <div>
            <CardHeader
              floated={false}
              shadow={false}
              className=" rounded-none  max-w-md  bg-camp-default"
            >
              <div className="w-full ">
                <Input
                  label="Search Invoice"
                  onChange={(e) => setSearch(e.target.value)}
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </CardHeader>
          </div>
          {/* table camps  */}
          <div className="p-6 px-0 overflow-scroll hidden md:block">
            <table className="w-full text-left table-auto min-w-max">
              <thead className="bg-camp-info ">
                <tr className="">
                  <th className="p-4 border-b border-blue-gray-100 bg-camp-info ">
                    <p className="block  font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Camp Name
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-camp-info ">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Camp Fees
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-camp-info ">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Date and Time
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-camp-info ">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Location
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-camp-info ">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Healthcare Professional
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-camp-info ">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      {" "}
                      Action
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {camps.map((camp) => (
                  <tr key={camp._id} className="">
                    <td className="px-4 py-2 ">
                      <div className="flex items-center gap-3">
                        <img
                          src={camp.Image}
                          alt="Spotify"
                          className="relative inline-block h-12 w-12 !rounded-full  bg-blue-gray-50/50 object-contain object-center p-1"
                        />
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                          {camp.CampName}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        ${camp.CampFees}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {camp.DateAndTime}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {camp.Location}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {camp.HealthcareProfessional}
                      </p>
                    </td>
                    <td className="p-4 text-right space-x-3">
                      <button
                        onClick={() => handleUpdateCamp(camp)}
                        className="bg-camp-secondary p-2 rounded-md text-camp-background text-xl"
                        type="button"
                      >
                        <FaPencil />
                      </button>
                      <button
                        onClick={() => handleDeleteCamp(camp)}
                        className="bg-red-500 p-2 rounded-md text-camp-background text-xl"
                        type="button"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* phone table  */}
          <div className="p-6 px-0  md:hidden">
            <table className="w-full">
              {camps.map((camp) => (
                <tbody key={camp._id} className="flex p-3 mb-5 bg-camp-info">
                  <tr className="flex flex-col flex-1 text-left">
                    <th className="my-5">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Camp Name
                      </p>
                    </th>
                    <th className="my-5">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Camp Fees
                      </p>
                    </th>
                    <th className="my-5">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Date and Time
                      </p>
                    </th>
                    <th className="my-5">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Location
                      </p>
                    </th>
                    <th className="my-5">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Healthcare Professional
                      </p>
                    </th>
                    <th className="my-5">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        {" "}
                        Action
                      </p>
                    </th>
                  </tr>
                  <tr
                    key={camp._id}
                    className=" flex flex-col flex-1 text-right"
                  >
                    <td className="px-4 py-2 text-right">
                      <div className=" text-right items-center gap-3">
                        <p className="block text-right font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                          {camp.CampName}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        ${camp.CampFees}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {camp.DateAndTime}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {camp.Location}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {camp.HealthcareProfessional}
                      </p>
                    </td>
                    <td className="p-4 text-right space-x-3">
                      <button
                        onClick={() => handleUpdateCamp(camp)}
                        className="bg-camp-secondary p-2 rounded-md text-camp-background text-xl"
                        type="button"
                      >
                        <FaPencil />
                      </button>
                      <button
                        onClick={() => handleDeleteCamp(camp)}
                        className="bg-red-500 p-2 rounded-md text-camp-background text-xl"
                        type="button"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Update Camp
          </Typography>

          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Camp Name
                </Typography>
                <Input
                  {...register("CampName")}
                  color="gray"
                  size="lg"
                  placeholder="Camp Name"
                  defaultValue={upCamp.CampName}
                  className="placeholder:opacity-100 focus:!border-camp-primary border"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Camp Fees
                </Typography>
                <Input
                  {...register("CampFees")}
                  color="gray"
                  size="lg"
                  type="number"
                  defaultValue={upCamp.CampFees}
                  placeholder="Camp Fees"
                  className="placeholder:opacity-100 focus:!border-camp-primary border"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Date & Time
                </Typography>
                <Input
                  {...register("DateAndTime")}
                  color="gray"
                  size="lg"
                  defaultValue={upCamp.DateAndTime}
                  type="datetime-local"
                  placeholder="Date & Time"
                  className="placeholder:opacity-100 focus:!border-camp-primary border"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Location
                </Typography>
                <Input
                  {...register("Location")}
                  color="gray"
                  size="lg"
                  type="text"
                  defaultValue={upCamp.Location}
                  placeholder="Location"
                  className="placeholder:opacity-100 focus:!border-camp-primary border"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Healthcare Professional Name
                </Typography>
                <Input
                  {...register("HealthcareProfessional")}
                  color="gray"
                  size="lg"
                  defaultValue={upCamp.HealthcareProfessional}
                  placeholder="Healthcare Professional Name"
                  className="placeholder:opacity-100 focus:!border-camp-primary border"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  participant count
                </Typography>
                <Input
                  {...register("ParticipantCount")}
                  color="gray"
                  size="lg"
                  value={upCamp.ParticipantCount}
                  disabled
                  type="number"
                  placeholder="participant count"
                  className="placeholder:opacity-100 focus:!border-camp-primary border"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <input
                {...register("photo", { required: true })}
                type="file"
                className=""
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Description
              </Typography>
              <Textarea
                {...register("Description")}
                placeholder="Your Comment"
                rows={6}
                defaultValue={upCamp.Description}
              />
            </div>

            <div>
              <Button type="submit" className="bg-camp-accent w-full">
                Update Camp
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ManageCamps;
