import React from "react";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Gallery from "./views/Gallery";
import Reviews from "./views/Reviews";
import Quote from "./views/Quote";
import NavBar from "./views/NavBar";

function App() {
  return (
    <div className="mainApp">
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Reviews />
      <Quote />
    </div>
  );
}

export default App;
