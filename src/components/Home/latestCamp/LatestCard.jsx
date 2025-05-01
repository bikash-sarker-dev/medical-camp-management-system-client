import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const LatestCard = ({ camp }) => {
  return (
    <Card className=" overflow-hidden rounded-sm">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={camp?.Image} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {camp?.CampName}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {camp?.HealthcareProfessional}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex items-center bg-camp-default hover:bg-camp-info gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default LatestCard;
