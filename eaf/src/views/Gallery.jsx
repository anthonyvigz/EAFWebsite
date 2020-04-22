import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import a from "../img/test/1.jpg";
import b from "../img/test/2.jpg";
import c from "../img/test/3.jpg";
import d from "../img/test/4.jpg";
import e from "../img/test/5.png";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {}, []);

  return (
    <div id="gallery">
      <Slider />
    </div>
  );
}
