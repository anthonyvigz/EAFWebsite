import React, { useState, useEffect } from "react";
import "../styling/quote.scss";
import * as emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Quote() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [quote, setQuote] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();

    setQuote({ ...quote, [event.target.name]: event.target.value });
  };

  const sendQuoteRequest = (event) => {
    event.preventDefault();

    const { name, email, number, message } = quote;

    let templateParams = {
      name: name,
      number: number,
      message: message,
      email: email,
    };

    let popup = document.getElementById("popUp");

    if (name && message && email && number) {
      emailjs
        .send(
          "gmail",
          "template_SPqTzvPP",
          templateParams,
          "user_ok070rGofhMku7T0N56rz"
        )
        .then((res) => {
          popup.style.opacity = "1";
          popup.innerHTML = "Sent!";

          setTimeout(function () {
            popup.style.opacity = "0";
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
        });

      this.setState({ name: "", email: "", message: "" });
    } else {
      popup.style.opacity = "1";
      popup.innerHTML = "Please fill out all fields.";

      setTimeout(function () {
        popup.style.opacity = "0";
      }, 3000);
    }
  };

  return (
    <div id="quote">
      <div className="quoteBlock">
        <div id="popUp" style={{ opacity: "0" }}>
          Sent!
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          className="textQuoteBlock"
        >
          <h1>CONTACT US</h1>
          <div className="contactBlocks">
            <div className="contactBar">
              <i className="fas fa-phone"></i>1 (603) 897 9776
            </div>
            <div className="contactBar">
              <i className="fas fa-at"></i>
              eafcustomdecks@yahoo.com
            </div>
            <div className="contactBar">
              <i className="fas fa-map-marked-alt"></i>
              Nashua, NH
            </div>
            <div className="contactBar">
              <a
                a
                target="_blank"
                href="https://www.facebook.com/EAFCustomDecksandRemodeling/"
              >
                Check out our Facebook!
              </a>
            </div>
          </div>
        </div>
        <form
          data-aos="flip-left"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          onSubmit={sendQuoteRequest}
          className="quoteForm"
        >
          <h1>REQUEST A QUOTE!</h1>
          <input
            onChange={changeHandler}
            value={quote.name}
            name="name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={changeHandler}
            value={quote.email}
            name="email"
            type="text"
            placeholder="E-mail"
          ></input>
          <input
            onChange={changeHandler}
            value={quote.number}
            name="number"
            type="text"
            placeholder="Phone Number"
          ></input>
          <textarea
            onChange={changeHandler}
            value={quote.message}
            name="message"
            type="text"
            placeholder="Message"
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Submit!</button>
        </form>
      </div>
    </div>
  );
}
