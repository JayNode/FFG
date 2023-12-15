import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-data";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  // slideLength = 1 2 3
  // currentSlide = 0 1 2

  //change autoScroll = false; to stop auto slide change
  const autoScroll = false;
  let slideInterval;
  let intervalTime = 60000;

  //Next slide or currentSlide = 0
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  //Prev slide or currentSlide = slideLength-1
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  //Initial: currentSlide = 0
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  //Auto next slide after (intervalTime) seconds
  //slideInterval = 0 after next/prev slide
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  });

  return (
    <div id="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div id="slide-layout">
                <img src={slide.image} alt="slide" />
                <AiOutlineArrowLeft
                  className="arrow prev"
                  onClick={prevSlide}
                />
                <AiOutlineArrowRight
                  className="arrow next"
                  onClick={nextSlide}
                />
                <div className="slide-content">
                  <h2>{slide.heading}</h2>
                  <hr />
                  <p>{slide.desc}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
