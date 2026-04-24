import icon1 from "../../assets/Index/About/travel-guide.png";
import icon2 from "../../assets/Index/About/mission-icon.png";
import authore1 from "../../assets/Index/About/pic1.jpg";
import authore2 from "../../assets/Index/About/pic2.jpg";
import authore3 from "../../assets/Index/About/pic3.jpg";
import Mainbtn from "../../Components/Buttons/Mainbtn";

import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";

import abouting from "../../assets/AboutPage/abt-pic1.png";
import cloud from "../../assets/AboutPage/Cloud-bg.png";
import ballonLeft from "../../assets/hotballon-Left.png";
import ballonRifht from "../../assets/hotballon-right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import destination from "../../Data/DestinationCtg.json";

import { Link } from "react-router-dom";
import sectionBanner from "../../assets/section-banner.jpg";
import { useState } from "react";
import { useRef } from "react";
import DestinationCtgCard from "../../Components/DestinationCtgCard/DestinationCtgCard";
import { Icon } from "@iconify/react";

export const About = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            About Us
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link
                to="/"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Home
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[2%] md:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-yellow-light">
        {/* Left Section  */}
        <div className="about-image w-full xl:w-[50%] relative flex justify-center items-center h-full">
          <div className="w-full h-full top-0 left-0 flex justify-center items-center absolute z-0">
            <span className="h-80 lg:h-120 w-80 lg:w-120 bg-[#fff1da] rounded-full"></span>
          </div>
          <img src={abouting} alt="about-image" className="w-auto z-1" />
        </div>

        {/* Right Section  */}
        <div className="w-full xl:w-[50%] title relative h-full">
          <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
            We <span className="text-yellow">Recommend</span> Beautiful
            Destinations Every Month
          </h1>
          <p className="text-gray-500 pb-5">
            Travlla is a multi-award-winning strategy and content creation
            agency that specializes in travel marketing. They have one of the
            world's largest and most influential online travel communities,
            helping brands and tourism.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl">
              <img src={icon1} alt="icon-mg" className="w-14 h-14" />
              <div>
                <span className="text-xl font-semibold">
                  Trusted travel guide
                </span>
                <p>
                  Provides reliable information to help travelers plan their
                  trips efficiently and safely.
                </p>
              </div>
            </li>

            <li className="flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl">
              <img src={icon2} alt="icon-mg" className="w-14 h-14" />
              <div>
                <span className="text-xl font-semibold">Mission & Vision</span>
                <p>
                  Aims to connect people to positive experience through travel,
                  helping them see the world differently.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-10 pt-8">
            <Mainbtn text={"Discover More"} to="/about" />
            <div className="flex items-center gap-5">
              <div className="author-img flex items-center">
                <img
                  src={authore1}
                  alt="author-img"
                  className="w-10 rounded-full"
                />
                <img
                  src={authore2}
                  alt="author-img"
                  className="w-10 rounded-full -mx-3"
                />
                <img
                  src={authore3}
                  alt="author-img"
                  className="w-10 rounded-full"
                />
              </div>
              <p className="text-md">
                <span className="block text-2xl font-bold text-secondary">
                  3.5k
                </span>
                Happy Customer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destination  */}
      <div
        className="popular-destination bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] md:py-[10%] bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${cloud})` }}
      >
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Popular <span className="text-yellow">Destination</span>
          </h1>
          <p className="text-secondary my-2 text-lg">
            Destinations worth exploring! Here are a few popular spotss
          </p>
          <img
            src={titleShape}
            alt="titleShape"
            className="w-[35%] object-contain absolute -bottom-12"
          />
        </div>

        {/* Swiper  */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="destination-swiper mt-10"
          >
            {destination.map((item) => (
              <SwiperSlide key={item.id}>
                <DestinationCtgCard key={item.id} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg transition cursor-pointer"
          >
            <Icon icon="lsicon:left-filled" width="35" height="35" />
          </button>

          <button
            ref={nextRef}
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg transition cursor-pointer"
          >
            <Icon icon="lsicon:right-outline" width="35" height="35" />
          </button>
        </div>

        <div className="left-hot-ballon">
          <img src={ballonLeft} alt="ballon-image" />
        </div>
        <div className="right-hot-ballon">
          <img src={ballonRifht} alt="ballon-image" />
        </div>
      </div>
    </>
  );
};
