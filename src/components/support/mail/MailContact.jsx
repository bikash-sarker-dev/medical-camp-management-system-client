import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const MailContact = () => {
  return (
    <div className="mb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img
              src="https://images.pexels.com/photos/7709157/pexels-photo-7709157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div>
            <Card
              color="transparent"
              className="bg-camp-default "
              shadow={false}
            >
              <form className=" mb-2 w-full px-10 py-5 max-w-screen-xl  mx-auto">
                <div className="mb-1 flex flex-col gap-3">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Massage
                  </Typography>
                  <Textarea label="Message" />
                </div>

                <Button className="mt-6 bg-camp-accent" fullWidth>
                  Send
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailContact;
