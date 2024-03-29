// Note: components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ScrollAnimation from "./shared/animation/ScrollAnimation";
// Note: images/icons
import { IoIosArrowDown } from "react-icons/io";

const features = [
  {
    title: "What is you name",
    description: "my name is Brawlin",
  },
  {
    title: "What is you age",
    description: "I am 27 years old",
  },
  {
    title: "Where are you from",
    description: "I am from Cape verde",
  },
];

const Module = ({ question, answer }) => {
  return (
    <div className="flex flex-grow text-[#00284F]">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<IoIosArrowDown color="#00284F" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[#00284F]">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[#00284F]">{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#F7F7F7] sm:mx-4 mx-2 rounded-2xl text-[#00284F]" id="faqs">
      <div className="flex h-fit py-24 max-w-7xl mx-auto px-4 flex-wrap w-full">
        <div className="flex py-20 max-w-7xl mx-auto sm:px-36 px-0 flex-wrap w-full">
          <div className="w-full">
            <h1 className="text-[40px] font-medium mx-auto text-center flex justify-center sm:mb-16 mb-12">
              We Cover Most <br /> Asked Questions here
            </h1>
            <div className="mx-auto flex flex-col space-y-12">
              {features.map((text, index) => (
                <div key={index} className="">
                  <ScrollAnimation data="fade-in" easing="ease-in-sine" duration="500" delay="500">
                  <Module question={text.title} answer={text.description} />
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
