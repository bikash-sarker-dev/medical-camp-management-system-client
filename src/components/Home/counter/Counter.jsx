import React from "react";
import { FaAward, FaGoogleWallet, FaUsers } from "react-icons/fa";
import { IoHappyOutline } from "react-icons/io5";
import { CountUp } from "use-count-up";
import SectionHead from "./../../share/sectionHead/SectionHead";

const Counter = () => {
  return (
    <section className=" py-28 bg-[url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-overlay bg-opacity-70 bg-black testimonials">
      <div className="container">
        <SectionHead
          title={"Success Stat"}
          subTitle={
            "Heartfelt stories from patients and volunteers, showcasing the life-changing experiences and compassionate care provided at our medical camps"
          }
        />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border border-dotted text-center p-10">
              <div className="justify-center flex">
                <IoHappyOutline className="text-7xl text-camp-background" />
              </div>
              <h2 className="text-4xl font-extrabold my-2">
                + <CountUp isCounting end={1320} duration={8.2} />
              </h2>
              <h3 className="text-camp-info text-xl">Happy Clients</h3>
            </div>
            <div className="border border-dotted text-center p-10">
              <div className="justify-center flex">
                <FaGoogleWallet className="text-7xl text-camp-background" />
              </div>
              <h2 className="text-4xl font-extrabold my-2">
                + <CountUp isCounting end={152} duration={8.2} />
              </h2>
              <h3 className="text-camp-info text-xl">All Camps</h3>
            </div>
            <div className="border border-dotted text-center p-10">
              <div className="justify-center flex">
                <FaUsers className="text-7xl text-camp-background" />
              </div>
              <h2 className="text-4xl font-extrabold my-2">
                + <CountUp isCounting end={3586} duration={8.2} />
              </h2>
              <h3 className="text-camp-info text-xl"> Participant All</h3>
            </div>
            <div className="border border-dotted text-center p-10">
              <div className="justify-center flex">
                <FaAward className="text-7xl text-camp-background" />
              </div>
              <h2 className="text-4xl font-extrabold my-2">
                + <CountUp isCounting end={60} duration={8.2} />
              </h2>
              <h3 className="text-camp-info text-xl">Awards Received</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
