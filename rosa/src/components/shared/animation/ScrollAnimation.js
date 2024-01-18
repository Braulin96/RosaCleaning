// Note: hooks:
// Note: components:
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const ScrollAnimation = ( { data, easing, duration, delay, children }) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      //duration: 900,
      //once: true,
      // easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      data-aos={data}
      //data-aos-offset="200"
      //data-aos-easing={easing}
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      {children}
    </div>
  );
};
export default ScrollAnimation;
