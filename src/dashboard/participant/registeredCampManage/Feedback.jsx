import {
  Button,
  Dialog,
  DialogBody,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "./../../../hooks/useAuth";
import useSecureAxios from "./../../../hooks/useSecureAxios";

const Feedback = ({ open, setOpen, feedbackValue }) => {
  const { user } = useAuth();
  const [rated, setRated] = useState(4);
  const secureAxios = useSecureAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleOpen = () => {
    setOpen(!open);
  };
  const onSubmit = async (data) => {
    console.log(data);
    let reviewInfo = {
      name: user?.displayName,
      image: user?.photoURL,
      rating: rated,
      description: data.message,
      joinId: feedbackValue._id,
    };
    const res = await secureAxios.post("/feedbacks", reviewInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      setOpen(!open);
      reset();
      toast.success("Thanks, your feedback successfully.");
    }
  };

  return (
    <div>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-end py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Please your feedback . Select start then Write the message and then
            click button.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Rating Star
              </Typography>
              <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                {rated}
                <Rating value={4} onChange={(value) => setRated(value)} />
              </div>

              <Textarea
                {...register("message", { required: true })}
                label="Message"
              />
            </div>
            <div className="mt-5">
              <Button
                size={"sm"}
                className="bg-camp-accent"
                type="submit"
                color="gray"
              >
                send feedback
              </Button>
              <Button variant="text" color="gray" onClick={handleOpen}>
                cancel
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Feedback;
