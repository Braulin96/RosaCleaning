import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CiCalendar } from "react-icons/ci";

const Module = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<CiCalendar />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CiCalendar />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<CiCalendar />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#E6F1FC] sm:mx-4 mx-2 rounded-2xl">
      <div className="flex h-fit py-24 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="flex py-20 max-w-7xl mx-auto px-4 flex-wrap">
          <h1 className="text-[40px] font-medium mx-auto text-center flex justify-center sm:mb-16 mb-12 text-[#00284F]">
            We Cover Most
            <br /> Asked Questions here
          </h1>
        </div>
      </div>
      <Module />
    </div>
  );
};
export default Features;
