import React, { useEffect } from "react";
import "../styling/reviews.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Reviews() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="reviewsBg">
      <div id="invisReviewsMargin"></div>
      <div id="reviews">
        <h2 data-aos="fade-right">What our customers think of us:</h2>
        <div data-aos="fade-up" className="reviewBlocks">
          <div className="wholeReview">
            <div className="reviewBlock">
              <i className="fas fa-quote-left topLeft"></i>
              <p>
                My first time with EAF. They were very efficient and scheduled
                me very quickly: my deck and side-stair case were both done
                within a week of accepting their contract.{" "}
              </p>
              <i className="fas fa-quote-right bottomRight"></i>
            </div>
            <h3>Carole A.</h3>
            <div className="fiveStars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="wholeReview">
            <div className="reviewBlock">
              <i className="fas fa-quote-left topLeft"></i>
              <p>
                I am very pleased with the work done on my decks... I would
                recommend this company.
              </p>
              <i className="fas fa-quote-right bottomRight"></i>
            </div>
            <h3>John C.</h3>
            <div className="fiveStars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="wholeReview">
            <div className="reviewBlock">
              <i className="fas fa-quote-left topLeft"></i>
              <p>
                We researched 3 different companies to renovate our front and
                back porch. We selected EAF because they were competitively
                priced and all communication I had with them was extremely
                professional.
              </p>
              <i className="fas fa-quote-right bottomRight"></i>
            </div>
            <h3>Michael R.</h3>
            <div className="fiveStars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
