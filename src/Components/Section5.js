import React from "react";
import logo from "../Assets/logo.png";

const Section5 = ({ height, width }) => {
  return (
    <section
      style={{ height: height, width: width, backgroundColor: "#FEE998" }}
    >
      <div className="flex flex-col pt-[110px]">
        <img
          src={logo}
          className="w-[154px] h-[154px] self-center"
          alt=""
          srcset=""
        />
        <p className="text-[#EE7D79] text-[36px] font-semibold text-center">
          try it out yourself!
        </p>

        <div className="flex flex-col gap-8 w-[364px] m-auto mt-[30px] items-center">
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-[#FEE998] bg-clip-padding
        border-2 border-solid border-[#141414]
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-[#FEE998] focus:border-[#EE7D79] focus:outline-none
      "
            placeholder="Name"
          />

          <input
            type="email"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-[#FEE998] bg-clip-padding
        border-2 border-solid border-[#141414]
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-[#FEE998] focus:border-[#EE7D79] focus:outline-none
      "
            placeholder="Email"
          />

          <select
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-[#FEE998] bg-clip-padding bg-no-repeat
      border-2 border-solid border-[#141414]
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-[#FEE998] focus:border-[#EE7D79] focus:outline-none"
            aria-label="Default select example"
          >
            <option selected disabled className="text-[#9BA3AF]">
              Android or iOS?
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <button className="btn w-[222px] h-[65px] bg-[#141414] text-white rounded-full">
            Get Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
