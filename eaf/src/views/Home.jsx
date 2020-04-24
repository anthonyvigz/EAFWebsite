import React, { useEffect } from "react";
import "../styling/home.scss";
import eafLogo from "../img/EAF_Final.png";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const variants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div data-aos="fade-up" id="home">
      <motion.img
        initial="hidden"
        animate="visible"
        variants={variants}
        src={eafLogo}
        alt="eafwhite"
      />
      <motion.a
        href="#quote"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        GET A QUOTE!
      </motion.a>
    </div>
  );
}
