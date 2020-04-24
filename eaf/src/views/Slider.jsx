import React, { useState, useEffect } from "react";
import "../styling/slider.scss";
import axios from "axios";
import "../styling/gallery.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  const [images, setImages] = useState([]);

  // gets all images
  useEffect(() => {
    axios
      .get("https://touch-base-server.herokuapp.com/eaf/get")
      .then((res) => {
        setImages(res.data.resources);
      })
      .catch((err) => {
        console.log(err);
      });

    Aos.init({ duration: 2000 });
  }, []);

  const [x, setX] = useState(-100);

  const goLeft = () => {
    setX(x + 100);
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    console.log(images.length);
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div data-aos="fade-right" className="sliderBg">
      <div className="slider">
        {images.map((image, index) => {
          return (
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <img src={image.secure_url} alt="img" key={index} />
            </div>
          );
        })}
      </div>
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
