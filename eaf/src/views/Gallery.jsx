import React, { useState, useEffect } from "react";
import "../styling/gallery.scss";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {}, []);

  return <div id="gallery">gallery</div>;
}
