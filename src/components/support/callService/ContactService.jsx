import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";

const ContactService = () => {
  return (
    <div className="my-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold">Get in touch</h1>
          <p className="max-w-xl opacity-70 mx-auto">
            Got a question? You might find the answer in our help centre.
            Otherwise, see all the ways you can speak to our team below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="text-center hover:bg-camp-info transition-all duration-400 bg-camp-default p-10 border border-camp-info rounded-md">
            <div className="flex justify-center">
              <FiPhoneCall className="text-6xl text-camp-accent" />
            </div>
            <h1 className="text-2xl font-semibold  mt-3 mb-2">Phone Number</h1>
            <p>+8801759061600</p>
          </div>
          <div className="text-center hover:bg-camp-info transition-all duration-400 bg-camp-default p-10 border border-camp-info rounded-md">
            <div className="flex justify-center">
              <MdOutlineAttachEmail className="text-6xl text-camp-accent" />
            </div>
            <h1 className="text-2xl font-semibold  mt-3 mb-2">Email</h1>
            <p>bikash.webdeveloper5@gmail.com</p>
          </div>
          <div className="text-center hover:bg-camp-info transition-all duration-400 bg-camp-default p-10 border border-camp-info rounded-md">
            <div className="flex justify-center">
              <CiLocationOn className="text-6xl text-camp-accent" />
            </div>
            <h1 className="text-2xl font-semibold  mt-3 mb-2">Location</h1>
            <p>Mirpur, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactService;
