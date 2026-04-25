import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionBanner from "../../assets/section-banner.jpg";
import { Link } from "react-router-dom";
import Testimonials from "../../Components/index/Testimonials/Testimonials";
import services from "../../Data/Services.json";

const Services = () => {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Services
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
              <Link
                to="/services"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="services bg-secondary px-[2%] sm:px-[8%] lg:px-[12%] md:py-[10%] relative">
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            <span className="text-yellow">Our Amazing </span>Services
          </h1>
          <p className="text-gray-200 my-2 text-lg">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <img
            src={titleShape}
            alt="titleShape"
            className="w-[35%] object-contain absolute -bottom-12 brightness-0"
          />
        </div>

        <div className="bg-[#daeeef] p-5 md:p-10 rounded-2xl my-10 md:my-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((srv) => {
              return (
                <>
                  <Link
                    to={`/services/${srv.id}`}
                    className="services-item bg-white shadow-xl rounded-3xl p-3 group hover:bg-secondary transition-colors duration-500 cursor-pointer"
                  >
                    <div className="services-image rounded-3xl overflow-hidden h-60 md:h-100">
                      <img
                        src={srv.image}
                        alt={srv.name}
                        className="w-full h-full! object-cover"
                      />
                    </div>
                    <span className="text-center block pt-5 py-2 text-2xl font-medium text-secondary group-hover:text-yellow transition-colors duration-500">
                      {srv.name}
                    </span>
                  </Link>
                </>
              );
            })}
          </div>
          <div className="absolute right-40 bottom-8 hidden lg:flex flex-col text-white font-kaushan! text-2xl text-end xl:text-5xl z-1">
            Wornderful Services For You
            <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-8xl text-yellow">
              Services We Offer
            </h2>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Services;
