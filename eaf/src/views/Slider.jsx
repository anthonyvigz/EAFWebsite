import React, { useState } from "react";
import "../styling/slider.scss";
import a from "../img/test/1.jpg";
import b from "../img/test/2.jpg";
import c from "../img/test/3.jpg";
import d from "../img/test/4.jpg";
import e from "../img/test/5.png";

export default function Slider() {
  let sliderArr = [a, b, c, d, e];

  const [x, setX] = useState(-100);

  const goLeft = () => {
    setX(x + 100);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    console.log(x);
    console.log(sliderArr.length);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div className="slide" style={{ transform: `translateX(${x}%)` }}>
            <img src={item} alt="img" key={index} />
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
