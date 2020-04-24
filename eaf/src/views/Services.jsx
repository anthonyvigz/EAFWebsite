import React, { useEffect } from "react";
import "../styling/services.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="services">
      <div className="serviceBlocks" id="services">
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-hammer"></i>
          <h1>Custom Decks</h1>
          <p>
            We specialize in providing custom decks to create the outdoor living
            space you've always dreamed of.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-crop-alt"></i>
          <h1>Framing</h1>
          <p>
            EAF provides quality construction framing services for when
            homeowners are ready to take the next step in building upon their
            house.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-pump-soap"></i>
          <h1>Rot</h1>
          <p>
            We can clean up exterior wood rot or a rotting deck. These types of
            repairs shouldn't be delayed and can cause further damage on your
            home.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-house-damage"></i>
          <h1>Gut & Remodel</h1>
          <p>
            If your house is starting to show some age, it could be time for a
            makeover.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-warehouse-alt"></i>
          <h1>Shed</h1>
          <p>
            We pride ourselves in creating long-lasting, utility sheds on any
            scale; fully customized to your needs.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-window-frame"></i>
          <h1>Windows & Doors</h1>
          <p>
            EAF also provides exceptional services in installing and fixing
            windows, doors, and house siding.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="serviceBlock"
        >
          <i className="fas fa-plus"></i>
          <h1>And More</h1>
          <p>
            Our mission in helping you construct or repair upon your home is not
            limited, our professional operation strives to complete anything you
            may request.
          </p>
        </div>
      </div>
    </div>
  );
}
