import React from "react";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiRevision } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const Prices = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-4 2xl:gap-10 my-20 flex-grow-0">
      <div className="bg-[#292929] py-6 px-16 2xl:px-20 rounded-3xl">
        <div className="text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Basic</h1>
            <h1 className="text-3xl font-extrabold">€76</h1>
            <h2 classNsame="font-bold">1 PAGE website with up to 5 sections</h2>
            <div className="flex flex-col gap-1">
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />1 page
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Responsive website
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Opt-in Form
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Content upload
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Social media icons
              </h1>
            </div>
            <div className="flex justify-between">
              <h2 className="inline-block font-bold">
                <AiOutlineClockCircle className="inline-block" /> 3 Days
                Delivery
              </h2>
              <h2 className="inline-block text-center font-bold">
                <BiRevision className="inline-block" />
                Unlimited Revisions
              </h2>
            </div>
          </div>
        </div>
        <Link href="#">
          <h1 className="text-white text-lg font-semibold bg-[#deb86f] rounded-3xl px-6 py-2 text-center mt-6 hover:cursor-pointer hover:text-[#deb86f] hover:bg-white">
            Order
          </h1>
        </Link>
      </div>

      <div className="bg-[#deb76f] py-6 px-12 2xl:px-20 rounded-3xl">
        <div className="text-[#292929]">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Standard</h1>
            <h1 className="text-3xl font-extrabold">€85</h1>
            <h2 className="font-bold">
              Up to 3 PAGES website with up to 5 sections each
            </h2>
            <div className="flex flex-col gap-1">
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-[#292929]" />3
                pages
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-[#292929]" />
                Responsive website
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-[#292929]" />
                Opt-in Form
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-[#292929]" />
                Content upload
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-[#292929]" />
                Social media icons
              </h1>
            </div>
            <div className="flex justify-between">
              <h2 className="inline-block font-bold">
                <AiOutlineClockCircle className="inline-block" /> 5 Days
                Delivery
              </h2>
              <h2 className="inline-block text-center font-bold">
                <BiRevision className="inline-block" />
                Unlimited Revisions
              </h2>
            </div>
          </div>
        </div>
        <Link href="#">
          <h1
            className="text-white text-lg font-semibold bg-[#292929] rounded-3xl px-6 py-2 text-center mt-6
          hover:cursor-pointer hover:bg-white hover:text-[#292929]"
          >
            Order
          </h1>
        </Link>
      </div>

      <div className="bg-[#292929] py-6 px-12 2xl:px-20 rounded-3xl">
        <div className="text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Premium</h1>
            <h1 className="text-3xl font-extrabold">€95</h1>
            <h2 classname="font-bold">
              Up to 5 PAGES website with up to 5 sections each
            </h2>
            <div className="flex flex-col gap-1">
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />5 pages
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Responsive website
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Opt-in Form
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Content upload
              </h1>
              <h1 className="inline-block">
                <AiFillCheckCircle className="inline-block text-white" />
                Social media icons
              </h1>
            </div>
            <div className="flex justify-between">
              <h2 className="inline-block font-bold">
                <AiOutlineClockCircle className="inline-block" /> 7 Days
                Delivery
              </h2>
              <h2 className="inline-block text-center font-bold">
                <BiRevision className="inline-block" />
                Unlimited Revisions
              </h2>
            </div>
          </div>
        </div>
        <Link href="#">
          <h1 className="text-white text-lg font-semibold bg-[#deb86f] rounded-3xl px-6 py-2 text-center mt-6 hover:cursor-pointer hover:text-[#deb86f] hover:bg-white">
            Order
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Prices;
