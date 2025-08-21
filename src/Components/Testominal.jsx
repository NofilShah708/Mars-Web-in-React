import React from "react";
import "../assets/stylesheets/Testominal.css";
import user1 from "../assets/images/9b806f95-6914-4567-9044-e688866dedc4.png"; // Replace with your image
import user2 from "../assets/images/c86affe5-40ae-4d2f-8138-0cf7717c8632.png"; // Replace with your image

const Testominal = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <h3 className="testimonial-heading">Mars Explorer is incredible</h3>
          <p className="testimonial-text">
            First Mars Explorer is an amazing aerospace company founded by John
            Doe. It is one of the leading private Space agencies around the
            globe. Mars Explorer rockets are reusable and can re-flight again.
          </p>
          <div className="testimonial-user">
            <img
              src={user1}
              alt="Martha Smith"
              className="testimonial-avatar"
            />
            <div>
              <div className="testimonial-name">Martha Smith</div>
              <div className="testimonial-location">California</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <h3 className="testimonial-heading">
            Changing the future for the better
          </h3>
          <p className="testimonial-text">
            Trying to change the future to make it better. Keep pushing forward
            to make humanity a multi-planetary species. Mars Explorer are such a
            magnificent aerospace company.
          </p>
          <div className="testimonial-user">
            <img
              src={user2}
              alt="Alley Holzer"
              className="testimonial-avatar"
            />
            <div>
              <div className="testimonial-name">Alley Holzer</div>
              <div className="testimonial-location">New York</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <h3 className="testimonial-heading">Mars Explorer is incredible</h3>
          <p className="testimonial-text">
            First Mars Explorer is an amazing aerospace company founded by John
            Doe. It is one of the leading private Space agencies around the
            globe. Mars Explorer rockets are reusable and can re-flight again.
          </p>
          <div className="testimonial-user">
            <img
              src={user1}
              alt="Martha Smith"
              className="testimonial-avatar"
            />
            <div>
              <div className="testimonial-name">Martha Smith</div>
              <div className="testimonial-location">California</div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Testominal;
