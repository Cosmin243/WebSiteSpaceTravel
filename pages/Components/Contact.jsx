import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-[#deb86f] mb-20 rounded-xl py-10 flex gap-4 sm:gap-0 flex-col sm:flex-row justify-around items-center">
      <h1 className="text-white text-3xl text-center lg:text-left">
        Interested <br /> working <br />
        with me?
      </h1>
      <Link
        href="https://www.fiverr.com/l_cosmin/convert-figma-psd-sketch-design-to-fully-responsive-react-website"
        target="_blank"
      >
        <h1
          className="text-white text-xl bg-[#292929] px-6 py-2 rounded-3xl hover:cursor-pointer
      hover:text-[#292929] hover:bg-white"
        >
          Hire Me
        </h1>
      </Link>
    </div>
  );
};

export default Contact;
