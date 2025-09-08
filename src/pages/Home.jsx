import React, { useState } from "react";
import heroImage from "../assets/azureLanging01.jpg";
import innovation from "../assets/innovation.jpg";
import collaboration from "../assets/collaboration.jpg";
import aboutUsHeroImage from "../assets/aboutusheroimage3.avif";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUsers,
  faPlay,
  faCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import Features from "./Features";
import Reviews from "./Reviews";
import coding3 from "../assets/coding3.jpg";
import coding4 from "../assets/coding4.jpg";
import coding5 from "../assets/coding5.jpg";
import growth from "../assets/growrh.jpg";
import mobileImage from "../assets/mobileImage.webp";
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      title: "Launch Your Career",
      description:
        "Start your journey with our comprehensive internship programs designed for growth.",
      image: innovation,
    },
    {
      title: "Masters Your Skills",
      description:
        "Enhance your expertise with hands-on training and real-world projects.",
      image: collaboration,
    },
    {
      title: "Create & Innovate",
      description:
        "Bring your unique ideas to life with our innovation-driven ecosystem.",
      image: heroImage,
    },
  ];

  return (
    <>
      <div className=" w-full h-[100vh] flex items-center mt-[65px] px-[135px] gap-40">
        <div className=" w-[600px]">
          <p className="mb-3 font-bold">NEXT GENERATION TECHNOLOGY</p>
          <p className="font-bold text-7xl">
            Revolutionalize The Future of{" "}
            <span className="text-[#fd0d34]">Technology</span>
          </p>
          <p className="mt-8 text-lg text-gray-600">
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
              className="w-full rounded-full border-2 bg-white pl-13 pr-27 py-[10px] outline-gray-700 border-gray-400"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#da183f] cursor-pointer text-white px-5 pb-[10px] pt-[9px] rounded-full text-sm hover:bg-[#e3586f]">
              Search &rarr;
            </button>
          </div>
          <div className="mt-12 flex gap-8">
            <button className="bg-black text-white px-8 py-2 rounded-[4px] font-semibold cursor-pointer hover:shadow-[0px_0px_5px_black]">
              Key Features
            </button>
            <button className="border-2 border-black px-8 py-2 rounded-[4px] font-semibold cursor-pointer hover:shadow-[0px_0px_5px_black]">
              How We Work ?{" "}
            </button>
          </div>
        </div>
        <div>
          <img src={mobileImage} alt="" className="h-[650px] w-[660px] object-cover"/>
        </div>
        {/* <div className="relative h-full w-[520px]">
          <div className="w-[220px] h-[300px] absolute top-5 -rotate-5 left-0 z-20 shadow-[0px_0px_5px_gray] bg-slate-700 p-2 rounded-xl">
            <img
              src={collaboration}
              alt=""
              className="w-full h-full object-cover  rounded-lg"
            />
          </div>
          <div className="w-[220px] h-[300px] absolute top-55 left-48 rotate-20 z-10 shadow-[0px_0px_5px_gray] bg-slate-600 p-2 rounded-xl">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="w-[220px] h-[300px] absolute bottom-0 left-0 -rotate-30 bg-slate-500 shadow-[0px_0px_5px_gray] p-2 rounded-xl">
            <img
              src={innovation}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div> */}
      </div>
      <Features />
      <div className="  h-[690px] mb-20 mt-10 px-[100px] py-[70px]  flex gap-30 bg-gray-100">
        <div className="w-[600px] relative">
          <img
            src={innovation}
            alt=""
            className="h-[420px] w-[340px] object-cover absolute top-10 left-30  rounded-4xl z-10 shadow-[0px_0px_8px_gray]"
          />
          <img
            src={coding3}
            alt=""
            className="h-[100px] absolute top-20 left-0  rounded-2xl shadow-[0px_0px_8px_gray]"
          />
          <img
            src={coding5}
            alt=""
            className="h-[78px] w-[78px] object-cover absolute top-40 right-12  rounded-2xl z-10 shadow-[0px_0px_8px_gray]"
          />
          <img
            src={coding4}
            alt=""
            className="h-[150px] w-[210px] object-cover absolute bottom-5 left-0  rounded-4xl shadow-[0px_0px_8px_gray]"
          />
          <img
            src={collaboration}
            alt=""
            className="h-[210px] w-[290px] object-cover absolute bottom-0 right-5 z-20  rounded-4xl shadow-[0px_0px_8px_gray]"
          />
        </div>
        <div>
          <h4 className="font-bold text-2xl border-l-4 pl-4 border-[#da183f]">
            Our Story in Motion
          </h4>
          <p className="pl-4 pt-2 font-bold text-5xl w-[500px] text-[#da183f]">
            Transforming Ideas <span className="text-black">into Reality</span>
          </p>
          <p className="w-[600px] pl-4 pt-6 text-lg">
            Step inside our creative studio and witness the journey from concept
            to launch. Our team blends design, technology, and strategy to
            deliver digital products that make a difference. Watch our
            behind-the-scenes video to see how we collaborate, innovate, and
            bring visions to life for our clients.
          </p>
          <div className="pt-12 pl-3 flex gap-20">
            <div className="flex flex-col gap-9">
              <div className="flex ">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-xl pt-[5px] pr-3 text-[#da183f]"
                />
                <div>
                  <p className="font-semibold text-xl">Quick Overview</p>
                  <p className="text-gray-600 text-sm">2 min watch</p>
                </div>
              </div>
              <div className="flex ">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-xl pt-[5px] pr-3 text-[#da183f]"
                />
                <div>
                  <p className="font-semibold text-xl">Tech Stack</p>
                  <p className="text-gray-600 text-sm">Modern & Scalable</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <div className="flex ">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-xl pt-[5px] pr-3 text-[#da183f]"
                />
                <div>
                  <p className="font-semibold text-xl">TeamWork</p>
                  <p className="text-gray-600 text-sm">Collaboration process</p>
                </div>
              </div>
              <div className="flex ">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-xl pt-[5px] pr-3 text-[#da183f]"
                />
                <div>
                  <p className="font-semibold text-xl">Innovation</p>
                  <p className="text-gray-600 text-sm">Creative solutions</p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#da183f] text-white px-8 pt-1 pb-2 ml-3 cursor-pointer hover:bg-[#f14769] rounded-sm mt-10 text-lg">
            Explore &rarr;
          </button>
        </div>
      </div>

      {/* Build Your Project Section */}
      <div className="px-[150px] mt-10">
        <h5 className="font-semibold text-xl pl-1 pb-3">
          Join Our Innovation Journey
        </h5>
        <p className="text-6xl w-[500px] font-bold">
          Build Your Future With{" "}
          <span className="text-[#f14769]">Azure Dev</span>
        </p>

        <div className="mt-12 flex gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-500 ease-in-out cursor-pointer 
                h-[300px] p-8 rounded-3xl flex flex-col justify-between shadow-md
                ${
                  activeIndex === index
                    ? "w-[600px] bg-gray-200"
                    : "w-[300px] bg-red-200"
                }`}
            >
              <div className="flex h-full gap-10">
                <div>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h2 className="font-bold text-3xl w-[250px]">
                        {card.title}
                      </h2>
                      {activeIndex === index && (
                        <p className="text-lg mt-4 w-[300px]">
                          {card.description}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between items-end">
                      <button className="text-lg font-semibold">
                        Read more <span className="ml-2 text-xl">&rarr;</span>
                      </button>
                      {activeIndex !== index && (
                        <button className="text-2xl bg-white px-2 pb-1 rounded-full">
                          &#8599;
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  {activeIndex === index && (
                    <img
                      src={card.image}
                      className="w-[190px] h-full rounded-xl object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers data */}
      {/* Numbers data */}
      <div className="relative mt-30 px-[140px] py-20">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutUsHeroImage})` }}
        ></div>

        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-600/50"></div>

        {/* Glass container */}
        <div className="relative w-full bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-10 py-12 flex justify-around">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="text-[50px] font-bold text-[#d70e36]">98 %</div>
            <div className=" font-semibold text-lg">
              CLIENT SATISFACTION
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="text-[50px] font-bold text-[#d70e36]">500 +</div>
            <div className=" font-semibold text-lg">
              PROJECT COMPLETED
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="text-[50px] font-bold text-[#d70e36]">12 +</div>
            <div className=" font-semibold text-lg">
              YEAR EXPERIENCE
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <div className="text-[50px] font-bold text-[#d70e36]">50 +</div>
            <div className=" font-semibold text-lg">TEAM MEMBERS</div>
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default Home;
