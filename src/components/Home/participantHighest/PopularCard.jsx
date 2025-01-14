import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function BookingCard({ camp }) {
  const {
    _id,
    CampName,
    Image,
    DateAndTime,
    HealthcareProfessional,
    Description,
    CampFees,
  } = camp || {};
  const word = Description.split(" ").slice(0, 15).join(" ");

  return (
    <Card className="w-full  shadow-sm bg-camp-default">
      <CardHeader floated={false} color="blue">
        <img className="" src={Image} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {CampName}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            $ {CampFees}
          </Typography>
        </div>
        <Typography className="font-medium" color="gray">
          {HealthcareProfessional}
        </Typography>
        <Typography className="" color="gray">
          {word}...
        </Typography>
      </CardBody>
      <CardFooter className="pt-1  ">
        <Button className="bg-camp-accent" size="lg" fullWidth={true}>
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
