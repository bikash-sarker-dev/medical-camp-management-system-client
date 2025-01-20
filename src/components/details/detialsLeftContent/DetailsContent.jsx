import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DetailsContent = () => {
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOpen = () => setOpen(!open);
  const doc = {
    title: "Record of a Shriveled Datum",
    content: "No bytes, no problem. Just insert a document, in MongoDB",
  };

  const onSubmit = async (data) => {
    console.log(data);
    let joinInfo = {
      ...data,
      campId: id,
      PaymentStatus: "unPaid",
      Confirmation: "pending",
    };
    const res = await axiosPublic.post("/join-camp", joinInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `You join in ${data.CampName} camp`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const { data: details = {} } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      let res = await axiosPublic.get(`/details/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    CampName,
    CampFees,
    DateAndTime,
    Description,
    HealthcareProfessional,
    Image,
    Location,
    ParticipantCount,
  } = details || {};

  return (
    <section className="mb-16">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="hero min-h-screen container"
      >
        <div className="md:flex-col my-20">
          <img
            src={Image}
            className=" my-10 rounded-lg shadow-2xl md:min-w-[700px] lg:max-h-[700px]"
          />
          <div>
            <h1 className="text-3xl font-bold">{CampName}</h1>

            <p className="text-gray-700 md:flex-1 mt-3 font-medium">
              Health care Professional: {HealthcareProfessional}
            </p>
            <p className="text-gray-700 md:flex-1 mt-3 font-medium"></p>

            <p className="text-gray-700 md:flex-1 mt-3 font-medium">
              date or time: {DateAndTime}
            </p>

            <p className="text-gray-700 md:flex-1 mt-3 font-medium">
              location: {Location}
            </p>

            <p className="text-gray-700 md:flex-1 mt-3 font-medium">
              Participant Count: {ParticipantCount}
            </p>

            <p className="py-6 max-w-3xl">{Description}</p>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleOpen}
              className="text-lg px-10 bg-camp-accent mt-18"
            >
              Join Camp
            </Button>
          </div>
        </div>
      </div>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Join in Your Camp
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date and organized.
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody className="space-y-3 h-[400px] lg:h-auto overflow-auto">
            <div className="md:flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Camp Name
                </Typography>
                <Input
                  {...register("campName")}
                  color="gray"
                  size="lg"
                  value={CampName}
                  disabled
                  placeholder="Camp Name"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
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
                  {...register("campFees")}
                  color="gray"
                  size="lg"
                  type="number"
                  value={CampFees}
                  disabled
                  placeholder="Camp Fees"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Location
                </Typography>
                <Input
                  {...register("location")}
                  color="gray"
                  size="lg"
                  value={Location}
                  disabled
                  placeholder="Location"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
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
                  Healthcare Professional Name
                </Typography>
                <Input
                  {...register("healthcareProfessionalName")}
                  color="gray"
                  size="lg"
                  value={HealthcareProfessional}
                  disabled
                  placeholder="Healthcare Professional Name("
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Participant Name
                </Typography>
                <Input
                  {...register("participantName")}
                  color="gray"
                  size="lg"
                  value={user?.displayName}
                  disabled
                  placeholder="Participant Name"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
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
                  Participant Email
                </Typography>
                <Input
                  {...register("participantEmail")}
                  color="gray"
                  size="lg"
                  value={user?.email}
                  disabled
                  placeholder="Participant email"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Age
                </Typography>
                <Input
                  {...register("age")}
                  color="gray"
                  size="lg"
                  type="number"
                  placeholder="Age"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
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
                  Phone Number
                </Typography>
                <Input
                  {...register("phoneNumber")}
                  color="gray"
                  size="lg"
                  placeholder="Phone Number"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Emergency Contact
              </Typography>
              <Input
                {...register("emergencyContact")}
                color="gray"
                size="lg"
                placeholder="Emergency Contact"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className=" text-left font-medium"
              >
                Gender
              </Typography>
              <div className="md:flex gap-8">
                <Radio
                  label="Male"
                  value="male"
                  color="blue"
                  {...register("gender")}
                />
                <Radio
                  label="Female"
                  value="female"
                  color="blue"
                  {...register("gender")}
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              type="submit"
              className="ml-auto w-full bg-camp-accent"
              onClick={handleOpen}
            >
              Join Confirm
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </section>
  );
};

export default DetailsContent;
