import React from "react";
import "../styling/quote.scss";
import * as emailjs from "emailjs-com";

export default function Quote() {
  const changeHandler = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  const sendQuoteRequest = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;

    let templateParams = {
      name: name,
      message: message,
      email: email,
    };

    let popup = document.getElementById("popUp");

    if (name && message && email) {
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
        <form onSubmit={sendQuoteRequest} className="quoteForm">
          <input
            onChange={changeHandler}
            value="placeholder"
            name="name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={changeHandler}
            value="placeholder"
            name="email"
            type="text"
            placeholder="E-mail"
          ></input>
          <textarea
            onChange={changeHandler}
            value="placeholder"
            name="message"
            type="text"
            placeholder="Your message"
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
