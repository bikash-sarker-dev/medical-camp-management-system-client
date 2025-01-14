import Lottie from "lottie-react";
import React from "react";
import medicalToolsLottifile from "../../../assets/lottifile/medicalTools.json";

const Research = () => {
  return (
    <div className="py-28">
      <div className="container">
        <div className="lg:flex gap-2">
          <div className="md:flex-1">
            <Lottie
              className="lg:h-[500px]"
              animationData={medicalToolsLottifile}
              loop={true}
            />
            ;
          </div>
          <div className="md:flex-1">
            <h3 className="font-poppins text-3xl font-semibold">
              Medical camps as research tools
            </h3>
            <p className="text-gray-700 mt-3">
              Traditionally, medical camps by non-governmental organisations
              (NGOs), corporate sponsors, foundations, and other charitable
              institutions are seen as acts of charity. The communities that the
              camps support also see them as short, solidarity events. Weak
              public health systems, particularly those in preventive health,
              necessitate such acts of charity.
            </p>
            <p className="text-gray-700 mt-3">
              Such camps continue to play a crucial role in helping individuals
              access better health primarily because the demand for decent and
              affordable healthcare outstrips its supply. In our experience,
              however, apart from fulfilling the immediate, short-term needs of
              individual citizens, medical camps can also become an important
              research tool, aimed at strengthening the larger public health
              system.
            </p>
            <p className="text-gray-700 mt-3">
              At first, the engagement of resident communities in conversations
              around health and health systems could, at best, be described as
              passive. We then experimented with using medical camps as
              icebreakers with our resident slum and slum relocation communities
              to generate conversations about their personal and community
              health. In our experience, these camps proved to be far more
              consequential than we expected – they did a lot more than simply
              ‘break the ice’.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
