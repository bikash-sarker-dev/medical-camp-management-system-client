import React from "react";

const DetailsContent = () => {
  return (
    <section className="">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="hero min-h-screen container"
      >
        <div className="flex-col my-20">
          <img
            src="https://images.pexels.com/photos/28271638/pexels-photo-28271638/free-photo-of-a-desert-landscape-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" my-10 rounded-lg shadow-2xl md:min-w-[700px] lg:max-h-[700px]"
          />
          <div>
            <h1 className="text-4xl font-bold">title</h1>
            <div className="max-w-2xl flex  mt-3">
              <p className="text-gray-500 flex-1 mt-2 font-medium">Author:</p>
              <p className="text-gray-500 flex-1 mt-2 font-medium"></p>
            </div>
            <div className="max-w-2xl flex  mt-4">
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                date or time:
              </p>
              <p className="text-gray-500 flex-1 mt-2 font-medium">location:</p>
            </div>
            <div className="max-w-2xl flex  mt-4">
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                availability:
              </p>
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                BookingCount:
              </p>
            </div>
            <p className="text-gray-500 flex-1 mt-4 font-bold flex items-center gap-5">
              Rating:
            </p>
            <p className="text-gray-500  mt-4 font-bold">Price : / day</p>

            <p className="py-6 max-w-3xl"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;
