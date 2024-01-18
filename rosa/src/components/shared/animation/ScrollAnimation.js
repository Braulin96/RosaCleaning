// Note: hooks:
import { useEffect } from "react";
// Note: components:
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollAnimation = ({ data, easing, duration, delay, children }) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      //duration: 900,
      once: true,
      // easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      data-aos={data}
      data-aos-easing={easing}
      //data-aos-offset="200"
      //data-aos-easing={easing}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};
export default ScrollAnimation;
