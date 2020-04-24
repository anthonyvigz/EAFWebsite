import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import "../styling/gallery.scss";
import axios from "axios";

export default function Gallery() {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, [loading]);

  // function to upload image
  const imgUploadHandler = (event) => {
    event.preventDefault();

    const files = event.target.files;
    const data = new FormData();

    data.append("file", files[0]);
    data.append("upload_preset", "eaf_preset");

    setLoading(true);

    // adds the image to cloudinary
    axios
      .post(
        "https://api.cloudinary.com/v1_1/eaf-custom-decks-and-remodelling/image/upload",
        data
      )
      .then((res) => {
        console.log("Success", res);
        setLoading(false);
        setImage(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="gallery">
      <Slider />

      <h1>{loading ? "Uploading..." : ""}</h1>
      <input
        id="file-input"
        onChange={imgUploadHandler}
        className="uploadImage"
        type="file"
      />
      <div>
        {images.map((image) => {
          return <img src={image.secure_url} width="200px" alt="img" />;
        })}
      </div>
    </div>
  );
}
