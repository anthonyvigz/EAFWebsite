import React, { useState } from "react";
import "../styling/navbar.scss";
import logo from "../img/EAF.png";
import logowhite from "../img/EAFWhiteNoText.png";

export default function NavBar() {
  const [top, setNav] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 1) {
      setNav(true);
    } else {
      setNav(false);
    }
  });
  return (
    <nav className={top ? "navBarHome" : "navBarHome movingNav"}>
      <img className="showLogo" src={top ? logowhite : logo} alt="navLogo" />
      <div className="links">
        <a href="#home">HOME</a>
        <a href="#services">SERVICES</a>
        <a href="#gallery">GALLERY</a>
        <a href="#invisReviewsMargin">REVIEWS</a>
        <a href="#quote">QUOTE</a>
      </div>
    </nav>
  );
}
