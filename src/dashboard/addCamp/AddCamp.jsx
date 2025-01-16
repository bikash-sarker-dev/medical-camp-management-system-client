import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import HeaderDashboard from "../sharedashboard/HeaderDashboard";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useSecureAxios from "./../../hooks/useSecureAxios";

const imageKey = import.meta.env.VITE_ACCESS_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageKey}`;

const AddCamp = () => {
  const axiosPublic = useAxiosPublic();
  const secureAxios = useSecureAxios();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
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

      const res2 = await secureAxios.post("/camps", campItem);
      console.log(res2.data);
      if (res2.data.insertedId) {
        Swal.fire({
          title: "successfully",
          icon: "success",
          draggable: true,
        });
      }
      reset();
    }
  };
  return (
    <div>
      <HeaderDashboard title={"add camp"} />
      <h1 className="text-center my-10 text-3xl font-bold text-camp-primary">
        Add Camp
      </h1>
      <div className="max-w-4xl mx-auto">
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
                value="0"
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
              rows={8}
            />
          </div>

          <div>
            <Button type="submit" className="bg-camp-accent px-16">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;
