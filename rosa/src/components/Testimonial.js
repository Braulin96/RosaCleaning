import React from "react";
import Profile from "../assets/profile.jpeg";
import { VscQuote } from "react-icons/vsc";

const test = [
  {
    name: "Marie Jonh",
    profile: Profile,
    quote: "My home has never looked so spotless and fresh! Thank you!",
    position: "Director at H&M",
  },
  {
    name: "Anne Cristine",
    profile: Profile,
    quote: "My home Cris has never looked so spotless and fresh! Thank you!",
    position: "Director at Zara",
  },
  {
    name: "Carla Paula",
    profile: Profile,
    quote: "My home Carla has never looked so spotless and fresh! Thank you!",
    position: "Director at Berska",
  },
];

const ModuleTestimonial = ({ quote, name, position, profile }) => {
  return (
    <>
      <div className="w-52 flex flex-col bg-[#d1d2d1] h-60 mx-auto p-4 shadow-md rounded-lg my-auto">
        <div className="my-auto space-y-2">
          <VscQuote color="#e5e7eb" width={40} size={30} />
          <p className="mx-2">
            {/* My home has never looked so spotless and fresh! Thank you! */}
            {quote}
          </p>
        </div>

        <div className="border-t-2 flex mt-auto">
          <div className="flex gap-4 mt-2">
            <div className="text-xs flex-grow">
              <p> {name}</p>
              <p> {position}</p>
            </div>
            <div className="rounded-full aspect-square my-auto w-1/4">
              <img
                src={profile}
                className="object-cover w-full h-full rounded-full border-[#e5e7eb] border-2"
                alt="Profile Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Testimonial = () => {
  return (
    <>
      <div className="flex relative bg-gradient-to-t from-[#bcbdbb] via-white to-white mx-auto flex-wrap h-[600px] ">
        <div className="flex max-w-7xl justify-around w-full mx-auto">
          {test.map((details, index) => (
            <ModuleTestimonial
              key={index}
              quote={details.quote}
              name={details.name}
              position={details.position}
              profile={details.profile}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Testimonial;
