import About from "./About/About";
import Banner from "./Banner/Banner";
import BookingSteps from "./BookingSteps/BookingSteps";
import Counter from "./Counter/Counter";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

import TopDestination from "./TopDestination/TopDestination";
import TourCategories from "./TourCategories/TourCategories";
import TourGuide from "./TourGuide/TourGuide";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <BookingSteps />
      <TopDestination />
      <TourGuide />
      <TourCategories />
      <Testimonials />
      <Banner />
      <Counter />
    </>
  );
};

export default Index;
