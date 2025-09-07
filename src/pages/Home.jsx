import React from "react";
import heroImage from "../assets/azureLanging01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Features from "./Features";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <>
      <div className=" w-full h-[100vh] flex items-center mt-[65px] px-[135px] gap-">
        <div className=" w-[600px]">
          <p className="mb-5 font-bold">NEXT GENERATION TECHNOLOGY</p>
          <p className="font-bold text-7xl">
            Revolutionalize The Future of{" "}
            <span className="text-[#fd0d34]">Technology</span>
          </p>
          <p className="mt-8 text-xl text-gray-600">
            We're not just building software—we're crafting digital revolutions
            that reshape industries and redefine what's possible.
          </p>

          <div className="relative w-100 hidden md:block mt-10">
            <span className="absolute inset-y-0 left-5 flex items-center text-gray-400">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border-2 bg-white pl-13 pr-27 py-[10px] outline-gray-700"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#da183f] cursor-pointer text-white px-5 pb-[10px] pt-[9px] rounded-full text-sm hover:bg-[#e3586f]">
              Search &rarr;
            </button>
          </div>
          <div className="mt-12 flex gap-8">
              <button className="bg-black text-white px-8 py-2 rounded-[4px] font-semibold cursor-pointer hover:shadow-[0px_0px_5px_black]">Key Features</button>
               <button className="border-2 border-black px-8 py-2 rounded-[4px] font-semibold cursor-pointer hover:shadow-[0px_0px_5px_black]">How We Work ? </button>
            </div>
        </div>
      </div>
      <Features/>
      <Reviews/>
    </>
  );
};

export default Home;
