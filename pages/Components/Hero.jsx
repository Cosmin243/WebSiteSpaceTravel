import React from "react";
import Image from "next/image";
import CosminImagine from "public/WhatsApp Image 2023-04-11 at 19.20.40.jpeg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-20 gap-8">
      <div className="flex flex-col text-center lg:text-left">
        <h1 className=" text-gray-300 text-xl font-semibold mb-6">Hi!</h1>
        <h1 className=" text-white text-3xl inline-block">
          I'm{" "}
          <h1 className="text-[#deb86f] text-3xl inline-block">
            Cosmin Leonte,
          </h1>
        </h1>
        <h1 className="text-white text-3xl mb-6">a Frontend Developer.</h1>
        <p className="text-gray-300 text-lg">
          Frontend Developer based in Bucharest, Romania.
        </p>
        <p className="text-gray-300 text-lg max-w-[450px]">
          I like to develop responsive websites with aim on great user
          experience.
        </p>
        <div className="mt-6">
          <Link
            href="#"
            className="text-white text-lg font-semibold bg-[#deb86f] rounded-xl px-6 py-2 hover:cursor-pointer
            hover:bg-white hover:text-[#deb86f]"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <Image src={CosminImagine} width={400} className="rounded-full" />
    </div>
  );
};

export default Hero;
