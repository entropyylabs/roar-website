import React from "react";
import phone from "../Assets/phone.png";

const Section3 = ({ height, width }) => {
  return (
    <section
      style={{ height: height, width: width, backgroundColor: "#FEE998" }}
    >
      <div className="flex flex-col justify-around h-full">
        <div className="flex justify-center">
          <img src={phone} className="h-[499px] w-[261px]" alt="" srcset="" />
        </div>

        <p className="w-full h-[172px] text-[#EE7D79] text-[36px] font-semibold p-2 text-center">
          collectibles from your favourite brands
        </p>
      </div>
    </section>
  );
};

export default Section3;
