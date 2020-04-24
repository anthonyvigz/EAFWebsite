import React from "react";
import "./App.css";
import Home from "./views/Home";
import Services from "./views/Services";
import Gallery from "./views/Gallery";
import Reviews from "./views/Reviews";
import Quote from "./views/Quote";
import NavBar from "./views/NavBar";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="mainApp">
      <NavBar />
      <Home />
      <Services />
      <Gallery />
      <Reviews />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
