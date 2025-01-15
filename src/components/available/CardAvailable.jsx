import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import moment from "moment";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CardDefault({ camp }) {
  const {
    _id,
    CampName,
    Image,
    DateAndTime,
    HealthcareProfessional,
    Description,
    CampFees,
  } = camp || {};
  const word = Description.split(" ").slice(0, 16).join(" ");
  return (
    <Card className="mt-6 bg-camp-default">
      <CardHeader color="blue" className="relative h-56">
        <img src={Image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue" className="mb-2">
          {CampName}
        </Typography>
        <div className="flex justify-between items-center my-3">
          <p className="flex  gap-2">
            <IoTimeOutline className="text-xl" />
            <span> {moment(DateAndTime).format("LL")}</span>
          </p>
          <p className="">
            <span> CampFree : {CampFees}</span>
          </p>
        </div>

        <Typography>{word}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/details/${_id}`}>
          <Button className="bg-camp-accent px-10">Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
