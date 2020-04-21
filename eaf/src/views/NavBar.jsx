import React from "react";
import "../styling/navbar.scss";

export default function NavBar() {
  return (
    <nav className="navBar">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#gallery">GALLERY</a>
      <a href="#reviews">REVIEWS</a>
      <a href="#quote">QUOTE</a>
    </nav>
  );
}
