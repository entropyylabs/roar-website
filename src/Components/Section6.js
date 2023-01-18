import React, { useState, useRef } from "react";

const Section6 = ({ height, width }) => {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyEbhPoEcUOwrW_6R1p7wKXK0DmCFEpsOmr9It2tuy9kBtXylcZlQlSev18FM0IycRAoA/exec";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };

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
            className="flex flex-col gap-8 w-[340px] m-auto mt-[30px] items-center"
            onSubmit={handleSubmit}
            ref={formRef}
            name="waiting-list"
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
              name="Feedback"
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
