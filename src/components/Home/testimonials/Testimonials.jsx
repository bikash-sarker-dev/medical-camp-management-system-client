import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHead from "../../share/sectionHead/SectionHead";
import TestimonialCard from "./TestimonialsCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      let res = await axiosPublic.get("/feedbacks");
      return res.data;
    },
  });

  return (
    <div className=" py-28 bg-[url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-overlay bg-opacity-70 bg-black testimonials">
      <div className="container">
        <SectionHead
          title={"Testimonials"}
          subTitle={
            "Heartfelt stories from patients and volunteers, showcasing the life-changing experiences and compassionate care provided at our medical camps"
          }
        />
        <div>
          <div className="mt-20">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                568: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {reviews.map((feedback) => (
                <SwiperSlide key={feedback._id}>
                  <TestimonialCard feedback={feedback} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
