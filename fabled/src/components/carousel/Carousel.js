import { useState } from "react";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"
import { carouselData } from "./Carousel-data";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
      <div className="carousel">
        <AiOutlineArrowLeft className="arrow previous"/>
        <AiOutlineArrowRight className="arrow next"/>

        {carouselData.map((slide, index) => {
          return (
            <div className={index === currentSlide ?
            "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" /> 
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className="carousel-button">Get Started</button>
                  </div>
                </div>
              )}
            </div>
          )
        })}

      </div>
  );
};

export default Carousel;