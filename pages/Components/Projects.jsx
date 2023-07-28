import React from "react";
import Link from "next/link";
import Image from "next/image";
import SpaceTourism from "https://main--cosminleonte.netlify.app/pages/Components/Desktop - Home.jpg";
import EasyBank from "https://main--cosminleonte.netlify.app/pages/Components/Screenshot 2023-05-05 003415.png";

const Projects = () => {
  return (
    <div className="mb-20">
      <h1 className="text-white text-center lg:text-left text-3xl my-28">
        Projects I've worked on
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="max-w-[1000px]">
          <Link href="#">
            <Image
              src={EasyBank}
              quality={100}
              className="rounded-lg max-h-[900px] rounded-b-none w-full"
            />
          </Link>
          <div className=" bg-[#272727] text-white rounded-t-none rounded-lg p-4 flex justify-between">
            <div>
              <h1 className=" text-lg">Easybank landing page</h1>
              <p className=" text-neutral-300 text-sm">
                Project made with ReactJS, NextJS, TailwindCSS.
              </p>
            </div>
            <Link
              href="#"
              className="text-white text-lg font-semibold bg-[#696762] rounded-xl px-6 py-2 hover:cursor-pointer
              hover:bg-white hover:text-[#696762]"
            >
              View Demo
            </Link>
          </div>
        </div>
        <div className="max-w-[1000px]">
          <Link href="#">
            <Image
              src={SpaceTourism}
              quality={100}
              className="rounded-lg max-h-[900px] rounded-b-none w-full"
            />
          </Link>
          <div className=" bg-[#272727] text-white rounded-t-none rounded-lg p-4 flex justify-between">
            <div>
              <h1 className=" text-lg">Multipage Space-Tourism website</h1>
              <p className=" text-neutral-300 text-sm">
                Project made with ReactJS, NextJS, TailwindCSS.
              </p>
            </div>
            <Link
              href="#"
              className="text-white text-lg font-semibold bg-[#696762] rounded-xl px-6 py-2 hover:cursor-pointer
              hover:bg-white hover:text-[#696762]"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
