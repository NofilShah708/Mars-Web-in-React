import React, { useRef } from "react";
import "../assets/stylesheets/TechnicalRole.css";
import Box1 from "../assets/images/13f30de3-6120-4fb2-a853-72d489e3f044.png";
import Box2 from "../assets/images/9d4e0183-f7df-4285-b597-cf7cb115ddb5.png";
import Box3 from "../assets/images/7973ae21-3192-4fa9-acc7-6b68715cb848.png";

const TechnicalRole = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = 340; // Adjust to your image/card width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {/* // <!-- Technical Roles --> */}
      <div className="technical-role-section">
        <div className="technical-role-section-container">
          <h1>Technical Roles in Mars Exploration</h1>
          <p>
            In Mars Exploration, there are various technical roles that are
            crucial to the success of the mission. These roles include
            engineers, scientists, programmers, and technicians who work
            together to design, build, and operate the spacecraft and its
            instruments. The engineers are responsible for designing and
            developing the spacecraft, its propulsion systems, and its
            communication systems.
          </p>
        </div>
        <div className="technical-role-section-container-inner">
          <div className="technical-box">
            <img src={Box3} alt="" style={{ borderRadius: "10px" }} />
            <h2>Mars Exploration.</h2>
            <p>
              Mars Exploration is a space mission that aims to explore the
              planet Mars. The mission involves sending a spacecraft to Mars and
              conducting various experiments to gather data about the planet.
            </p>
          </div>
          <div className="technical-box">
            <img src={Box2} alt="" style={{ borderRadius: "10px" }} />
            <h2>Atmospheric Profiling.</h2>
            <p>
              The spacecraft is equipped with various instruments such as
              cameras, spectrometers, and radar systems to collect data about
              the Martian surface, atmosphere, and geology. The data collected
              by the spacecraft is then transmitted back to Earth where it is
              analyzed by scientists.
            </p>
          </div>
          <div className="technical-box">
            <img src={Box1} alt="" style={{ borderRadius: "10px" }} />
            <h2>Earth Globle.</h2>
            <p>
              The mission provides valuable insights into the Martian
              environment and helps us better understand the planet. The data
              collected by the spacecraft is then transmitted back to Earth
              where it is analyzed by scientists.
            </p>
          </div>
        </div>
        <div className="technical-box-crausel-container">
          <div className="carousel-wrapper">
            <button
              className="carousel-btn left"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              &#8249;
            </button>
            <div
              className="technical-box-crausel-container"
              tabIndex={0}
              ref={carouselRef}
            >
              <div className="technical-box-crausel">
                <img src={Box1} alt="Mars spacecraft" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box2} alt="Mars habitat" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box3} alt="Mars surface activity" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box3} alt="Mars surface activity" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box3} alt="Mars surface activity" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box3} alt="Mars surface activity" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box3} alt="Mars surface activity" />
              </div>
              <div className="technical-box-crausel">
                <img src={Box3} alt="Mars surface activity" />
              </div>
            </div>
            <button
              className="carousel-btn right"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalRole;
