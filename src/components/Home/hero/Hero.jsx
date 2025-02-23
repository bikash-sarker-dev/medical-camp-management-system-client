import { Button, Carousel, Typography } from "@material-tailwind/react";
import Lottie from "lottie-react";
import HeroLottieFile from "../../../assets/lottifile/heroLottie.json";

export default function CarouselWithContent() {
  return (
    <div className="lg:h-[750px]  h-[500px]">
      <Carousel autoplay={true} loop={true} autoplayDelay={7000} className="">
        <div className="relative h-full w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661602138279-b72df3311296?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="container">
              <div className="lg:flex justify-between">
                <div className="w-3/4  md:w-2/4 md:pl-20  text-center mx-auto lg:mx-0 lg:text-left">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-6xl font-poppins lg:leading-[80px] "
                  >
                    Community Vaccination Drive
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Over 300 children were vaccinated against preventable
                    diseases such as measles and polio, ensuring the health of
                    the next generation in the community.
                  </Typography>
                  <div className="flex gap-2 text-center justify-center lg:justify-start ">
                    <Button
                      size="lg"
                      color="white"
                      className="px-14 bg-camp-accent text-white"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
                <div className=" hidden lg:block">
                  <Lottie
                    className="lg:h-[500px]"
                    animationData={HeroLottieFile}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1664303503818-a6fab2dcfd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-6xl font-poppins lg:leading-[80px]"
              >
                Emergency Care Saves a Life
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                A man experiencing chest pain was diagnosed with a heart attack
                during the camp. Emergency intervention and transport to a
                nearby hospital saved his life.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="px-14 bg-camp-accent text-white"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
