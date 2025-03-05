import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-10 mt-10 ">
      <div className="flex flex-col justify-center items-center gap-10 max-w-screen-lg">
        <div className="text-center items-center flex flex-col gap-4">
          <p className="uppercase text-primary">What Our Clients Say</p>
          <p className="text-black text-4xl text-center font-semibold ">
            Discover how our platform has transformed their testing process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
