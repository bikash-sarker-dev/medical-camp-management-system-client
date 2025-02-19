import React from "react";
import Blogs from "../components/Home/blog/Blogs";
import Research from "../components/Home/campResearch/Research";
import Gallery from "../components/Home/gallery/Gallery";
import CarouselWithContent from "../components/Home/hero/Hero";
import ParticipantHighest from "../components/Home/participantHighest/ParticipantHighest";
import Testimonials from "../components/Home/testimonials/Testimonials";
import TabTitle from "../components/share/htmlHead/TabTitle";

const HomePage = () => {
  return (
    <div>
      <TabTitle title={` Medical | Home`} />
      <CarouselWithContent />
      <Research />
      <ParticipantHighest />
      <Testimonials />
      <Gallery />
      <Blogs />
    </div>
  );
};

export default HomePage;
