import React from "react";
import roar from "../Assets/roar.png";

const Section1 = ({ height, width }) => {
  return (
    <section
      style={{ height: height, width: width, backgroundColor: "#EE7D79" }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-row justify-between p-5 items-center">
            <a href="http://entropylabs.biz">by entropy labs</a>
            <div className="w-[48px] h-[48px] bg-black rounded-full flex justify-center items-center">
              <i className="fa-solid fa-download text-white"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={roar}
            className="h-[144px] self-center"
            height={144}
            alt="roar logo"
            srcset=""
          />
        </div>
        <div className="p-5">
          <p class="text-base text-center text-[#FEE998]">
            hunt digital. earn virtual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
