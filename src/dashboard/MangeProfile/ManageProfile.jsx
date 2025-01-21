import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { getAuth, updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import uesProfile from "../../hooks/uesProfile";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import HeaderDashboard from "../sharedashboard/HeaderDashboard";
import useAuth from "./../../hooks/useAuth";

const ManageProfile = () => {
  const { user } = useAuth();
  const auth = getAuth();
  const [profile, refetch] = uesProfile();

  const axiosPublic = useAxiosPublic();
  const [open, setOpen] = React.useState(false);

  const firstCharacter = user?.displayName?.split("")[0];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const imageApI = import.meta.env.VITE_ACCESS_API_KEY;
  const imageStoreApi = `https://api.imgbb.com/1/upload?key=${imageApI}`;

  const handleOpen = () => setOpen((cur) => !cur);

  const onSubmit = async (data) => {
    console.log(data);
    const fullName = `${data.firstName} ${data.lastName} `;
    const imageCatch = { image: data.photo[0] };
    const res = await axiosPublic.post(imageStoreApi, imageCatch, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const profileInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      eduction: data.eduction,
      address: data.address,
      country: data.country,
      state: data.state,
      website: data.website,
      bio: data.bio,
      photo: res?.data?.data?.display_url,
    };

    updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: res?.data?.data?.display_url,
    })
      .then(async () => {
        const res2 = await axiosPublic.patch(
          `/profile/${user.email}`,
          profileInfo
        );
        if (res2.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully Updated!",
            icon: "success",
            draggable: true,
          });
        }
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-camp-default">
      <HeaderDashboard title={"Manage Profile"} />
      <div className="max-w-5xl mx-auto  bg-camp-default rounded-xl p-10">
        <div className="">
          <div className="md:flex  items-center">
            {user?.photoURL ? (
              <div className="">
                <div className="w-52 h-52 bg-camp-info flex justify-center items-center text-7xl font-semibold text-camp-primary rounded-full">
                  <img
                    className="w-52 h-52 rounded-full object-cover "
                    src={profile?.photo}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="w-52 h-52 bg-camp-info flex justify-center items-center text-7xl font-semibold text-camp-primary rounded-full">
                  <span className="uppercase">{firstCharacter}</span>
                </div>
              </div>
            )}
            <div className="mt-8 flex-1 md:ml-12">
              <h4 className="text-xl font-semibold text-gray-800">Your Bio:</h4>
              <p className="text-gray-700 mt-1 =">{profile.bio}</p>
            </div>
          </div>

          <div className="md:flex  items-center">
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                First Name:
              </h4>
              <p className="text-gray-700 mt-1 =">{profile.firstName}</p>
            </div>{" "}
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                Last Name:
              </h4>
              <p className="text-gray-700 mt-1 =">{profile.lastName}</p>
            </div>
          </div>
          {/* email and phone  */}
          <div className="md:flex  items-center">
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                Participant Email:
              </h4>
              <p className="text-gray-700 mt-1">{user?.email}</p>
            </div>{" "}
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                Participant Phone:
              </h4>
              <p className="text-gray-700 mt-1">{profile.phone}</p>
            </div>
          </div>
          {/* eduction and address  */}
          <div className="md:flex  items-center">
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                Your Education:
              </h4>
              <p className="text-gray-700 mt-1">{profile.eduction}</p>
            </div>{" "}
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">Address:</h4>
              <p className="text-gray-700 mt-1">{profile.address}</p>
            </div>
          </div>
          {/* country name and state/region  */}
          <div className="md:flex  items-center">
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                Country Name:
              </h4>
              <p className="text-gray-700 mt-1">{profile.country}</p>
            </div>{" "}
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                State / Region:
              </h4>
              <p className="text-gray-700 mt-1">{profile.state}</p>
            </div>
          </div>
          {/* country name and state/region  */}
          <div className="md:flex  items-center">
            <div className="mt-8 flex-1">
              <h4 className="text-xl font-semibold text-gray-800">
                Website Url:
              </h4>
              <p className="text-gray-700 mt-1">{profile.website}</p>
            </div>{" "}
          </div>

          <Button onClick={handleOpen} className="bg-camp-primary mt-8">
            Update Profile
          </Button>
        </div>
      </div>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none  overflow-auto h-[500px] lg:h-auto"
      >
        <Card className="mx-auto w-full ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardBody className="flex flex-col gap-4  ">
              <div className="text-center py-2">
                <Typography variant="h4" color="blue-gray">
                  Profile Update
                </Typography>
              </div>

              <div className="md:flex gap-5">
                <div className="flex-1">
                  <div>
                    <Typography className="-mb-2" variant="h6">
                      Participant Photo
                    </Typography>

                    <input
                      {...register("photo")}
                      className="mt-5"
                      type="file"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Website URL
                  </Typography>
                  <Input
                    {...register("website")}
                    label=" Participant Phone"
                    defaultValue={profile.website}
                    type="url"
                    size="lg"
                  />
                </div>
              </div>
              {/* first or last Name  */}
              <div className="md:flex gap-5">
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    First Name
                  </Typography>
                  <Input
                    {...register("firstName")}
                    label="Participant Name"
                    defaultValue={profile.firstName}
                    type="text"
                    size="lg"
                  />{" "}
                </div>
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Last Name
                  </Typography>
                  <Input
                    {...register("lastName")}
                    label="Participant Name"
                    defaultValue={profile.lastName}
                    type="text"
                    size="lg"
                  />{" "}
                </div>
              </div>
              {/* phone or email  */}
              <div className="md:flex gap-5">
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Participant Email
                  </Typography>
                  <Input
                    {...register("email")}
                    defaultValue={user?.email}
                    disabled
                    label="Email"
                    size="lg"
                  />
                </div>
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Participant Phone
                  </Typography>
                  <Input
                    {...register("phone")}
                    label=" Participant Phone"
                    defaultValue={profile.phone}
                    type="phone"
                    size="lg"
                  />
                </div>
              </div>
              {/* eduction and address  */}
              <div className="md:flex gap-5">
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Your Eduction
                  </Typography>
                  <Input
                    {...register("eduction")}
                    defaultValue={profile.eduction}
                    label="Eduction"
                    size="lg"
                  />
                </div>
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Address
                  </Typography>
                  <Input
                    {...register("address")}
                    label=" address"
                    defaultValue={profile.address}
                    type="text"
                    size="lg"
                  />
                </div>
              </div>
              {/* country name or state / region  */}
              <div className="md:flex gap-5">
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    Country Name
                  </Typography>
                  <Input
                    {...register("country")}
                    defaultValue={profile.country}
                    label="country"
                    size="lg"
                  />
                </div>
                <div className="flex-1">
                  <Typography className="mb-2" variant="h6">
                    State / Region
                  </Typography>
                  <Input
                    {...register("state")}
                    label=" Participant state"
                    type="text"
                    defaultValue={profile.state}
                    size="lg"
                  />
                </div>
              </div>
              {/* bio  */}
              <div className="">
                <Typography className="mb-2" variant="h6">
                  Your Bio
                </Typography>

                <Textarea
                  {...register("bio")}
                  defaultValue={profile.bio}
                  label="Message"
                />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                className="bg-camp-accent"
                onClick={handleOpen}
                fullWidth
              >
                Confirm Update
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </div>
  );
};

export default ManageProfile;
