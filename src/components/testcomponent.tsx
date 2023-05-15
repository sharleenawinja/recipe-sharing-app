import React from "react";
import Navbar from "./layout/Navbar.componet";
import Sidebar from "./layout/SideBar.component";
import Slider from "react-slick";

// CSS styles for react-slick (ensure you have the required CSS file)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Loop through the slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per click
  };

  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-grow">
        <Sidebar />
        <div className="bg-indigo-300 flex-grow">
          <div className="max-w-sm mx-auto">
            <Slider {...settings}>
              <div className="px-4">
                <h2>Slide 1</h2>
              </div>
              <div className="px-4">
                <h2>Slide 2</h2>
              </div>
              <div className="px-4">
                <h2>Slide 3</h2>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
