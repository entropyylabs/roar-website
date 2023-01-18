import React, { useState, useRef } from "react";
import logo from "../Assets/logo.png";

const Section5 = ({ height, width }) => {
  const formRef = useRef(null);
  const scriptUrl =
    " https://script.google.com/macros/s/AKfycbyQvwtW-Rd9cZN6SIVuejC2cPDxn-oVP1FMZWB9nd2zFMijK9UVBqlezd6oby8g8Ihf3w/exec";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setUser(true);
      })
      .catch((err) => console.log(err));
  };

  const [user, setUser] = useState(false);

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
          {!user ? "try it out yourself!" : "let’s hunt!"}
        </p>
        {!user ? (
          <div>
            <form
              className="flex flex-col gap-8 w-[364px] m-auto mt-[30px] items-center"
              onSubmit={handleSubmit}
              ref={formRef}
              name="waiting-list"
            >
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
                name="Name"
                required
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
                name="Email"
                required
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
                name="Platform"
                required
              >
                <option selected disabled className="text-[#9BA3AF]">
                  Android or iOS?
                </option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>

              <button
                className="btn w-[222px] h-[65px] bg-[#141414] text-white rounded-full"
                type="submit"
              >
                Get Access
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-8 w-[364px] m-auto mt-[30px] items-center">
            <a
              className="btn w-[222px] bg-[#141414] p-4 text-white rounded-full text-center align-middle"
              download="Roar.apk"
            >
              <i class="fa-brands fa-android"></i> &nbsp; Download APK
            </a>
            <button
              className="btn w-[222px] p-4 bg-[#141414] text-white rounded-full"
              type="submit"
            >
              <i class="fa-brands fa-apple"></i> &nbsp; iOS Testflight
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section5;
