import React from "react";

const OurService = () => {
  return (
    <div className="rounded-2xl">
      <div className="flex justify-around sm:h-[600px] h-fit sm:py-0 py-20 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="w-full my-auto">
          <h1 className="text-[40px] font-medium mx-auto text-center flex justify-center sm:mb-16 mb-12">
            We Work Many Fields To Clean
            <br /> Your Surrounding Area
          </h1>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-12">
            <div className="col-span-1 m-auto">test 1</div>
            <div className="col-span-1 m-auto">test 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurService;
