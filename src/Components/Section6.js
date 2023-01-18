import React from "react";

const Section6 = ({ height, width }) => {
  return (
    <section
      style={{ height: height, width: width, backgroundColor: "#141414" }}
    >
      <div className="flex flex-col justify-around h-full">
        <p className="bg-[#1A64BC] text-[#FEE998] text-[36px] font-semibold text-center whitespace-nowrap ">
          roar. roar. roar. roar. roar.
        </p>
        <div className="min-h-1/2">
          <form
            action=""
            className="flex flex-col gap-8 w-[340px] m-auto mt-[30px] items-center"
          >
            <p className=" text-white text-[36px] font-semibold text-center whitespace-nowrap ">
              feedback!
            </p>
            <textarea
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-[#141414] bg-clip-padding
        border-2 border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-[#141414] focus:border-[#FEE998] focus:outline-none
      "
              rows="5"
              placeholder="How did you like the ROAR experience?"
            ></textarea>
            <button
              className="btn w-[222px] h-[65px] bg-[#FEE998] text-black rounded-full mt-[100px]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section6;
