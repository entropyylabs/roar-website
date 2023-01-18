import React from "react";
import section4 from "../Assets/section4.png";

const Section4 = ({ height, width }) => {
  return (
    <section
      style={{
        height: height,
        width: width,
        backgroundColor: "#9CC3DA",
        overflow: "hidden",
      }}
      className="relative"
    >
      <p className="absolute z-50 top-1/2 w-full text-[#FEE998] text-4xl font-semibold p-2 mt-2 text-center">
        you’ll be a part of the ROAR gang now wohooo
      </p>
      <img
        src={section4}
        height={height}
        width={width}
        alt=""
        srcset=""
        className="absolute z-10"
      />
    </section>
  );
};

export default Section4;
