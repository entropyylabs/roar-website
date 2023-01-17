import React from "react";
import section2 from "../Assets/section2.png";

const Section2 = ({ height, width }) => {
  return (
    <section
      style={{
        height: height,
        width: width,
        backgroundColor: "#9CC3DA",
      }}
      className="relative"
    >
      <p className="absolute z-50 top-1/3 w-[371px] h-[172px] text-[#1A64BC] text-[36px] font-semibold p-2 text-center">
        the most fun AR hunt we might have ever played
      </p>
      <img src={section2} alt="" srcset="" className="absolute z-10" />
    </section>
  );
};

export default Section2;
