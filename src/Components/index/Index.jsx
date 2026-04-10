import About from "./About/About";
import BookingSteps from "./BookingSteps/BookingSteps";
import Hero from "./Hero/Hero";
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
    </>
  );
};

export default Index;
