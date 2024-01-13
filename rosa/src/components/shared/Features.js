// Note: components
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
    <div className="flex flex-grow">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<IoIosArrowDown color="#8d8f8c" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> {question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#F7F7F7] sm:mx-4 mx-2 rounded-2xl" id="faqs">
      <div className="flex h-fit py-24 max-w-7xl mx-auto px-4 flex-wrap w-full">
        <div className="flex py-20 max-w-7xl mx-auto sm:px-36 px-0 flex-wrap w-full" >
          <div className="w-full">
            <h1 className="text-[40px] font-medium mx-auto text-center flex justify-center sm:mb-16 mb-12 text-[#00284F]">
              We Cover Most <br /> Asked Questions here
            </h1>
            <div className="mx-auto flex flex-col space-y-12">
              {features.map((text, index) => (
                <div key={index} className="">
                  <Module question={text.title} answer={text.description} />
                </div>
              ))}
              {/* <Module
                question="How are you?"
                answer="I am fine and better each day"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
