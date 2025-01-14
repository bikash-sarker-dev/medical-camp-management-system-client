import React from "react";
import Research from "../components/Home/campResearch/Research";
import CarouselWithContent from "../components/Home/hero/Hero";
import ParticipantHighest from "../components/Home/participantHighest/ParticipantHighest";

const HomePage = () => {
  return (
    <div>
      <CarouselWithContent />
      <Research />
      <ParticipantHighest />
    </div>
  );
};

export default HomePage;
