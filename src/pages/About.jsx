import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLightbulb,
  faUsers,
  faBullseye,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import aboutUsHeroImage from "../assets/aboutusheroimage3.avif";
import aboutUsHeroImage2 from "../assets/aboutusheroimage2.jpg";
import aboutUsCoding1 from "../assets/aboutuscoding1.jpg";
import aboutUsCoding2 from "../assets/aboutuscoding2.jpg";
import reward from "../assets/reward.jpg";
import growth from "../assets/growrh.jpg";
import collaboration from "../assets/collaboration.jpg";
import hackathon3 from "../assets/hackathon3.jpg";
import chatting from "../assets/chatting.jpg";
import innovation from "../assets/innovation.jpg";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import Teams from "./Team";

const About = () => {
  return (
    <>
      <div className="pt-[65px]">
        <div
          className="h-[640px] bg-gray-300"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 70% 100%, 0% 87.5%)",
          }}
        >
          <div
            className="bg-cover bg-center h-[560px] flex items-center px-[150px] text-white"
            style={{
              backgroundImage: `url(${aboutUsHeroImage})`,
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 90%, 70% 100%, 40% 90%, 0% 100%)",
            }}
          >
               <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="w-[500px]">
              <p className="relative text-4xl underline font-bold pb-5 text-[#fd0d34]">
                About Us
              </p>
              <p className=" relative text-6xl pb-4">
                Unleashing Potential, Building the Future of Tech
              </p>
              <p className="relative text-gray-200 pb-7">
                We believe that coding is more than just writing lines of
                code—it's about creating, learning, and growing together. Join
                us in shaping a better tomorrow through technology.
              </p>
              <p>
                <Link to="/" className="pr-2 relative">
                  Home
                </Link>{" "}
                <span className="text-[#fd0d34] relative">&rarr;</span>{" "}
                <Link to="/about" className="pl-2 text-[#fd0d34] relative">
                  About
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="px-[140px] flex gap-20 items-center py-22 h-[700px]">
          <div className="w-[600px]">
            <div>
              <div className="text-5xl text-[#fd0d34] font-bold">
                Providing full range{" "}
              </div>
              <span className="text-5xl font-bold">
                of transportation
              </span>
            </div>
            <div className="pt-8 text-xl pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quod consequatur temporibus provident numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores nam explicabo placeat.
              
            </div>
            <div className=" text-xl pb-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quod consequatur temporibus provident numquam labore dolorem
              laborum tempore distinctio autem
            </div>
            <button className="bg-[#fd0d34] text-white px-8 py-2 cursor-pointer text-lg rounded-md">
              Learn More &rarr;
            </button>
          </div>
          <div className="relative w-[50%] h-full">
            <img
              src={aboutUsCoding1}
              alt=""
              className="w-[400px] h-[300px] object-cover rounded-xl absolute left-0 top-0"
            />
            <img
              src={aboutUsCoding2}
              alt=""
              className="w-[300px] h-[200px] object-cover rounded-xl absolute bottom-20 right-0"
            />
            <div className="shadow-[0px_0px_5px_#7F8CAA] inline-block p-4 rounded-md  absolute top-65 right-62 bg-white">
              <p className="text-[#fd0d34] text-center text-3xl font-bold">
                20 +
              </p>
              <p>Year Experience</p>
            </div>
          </div>
        </div>
        <div className="px-[140px] pb-20 flex justify-between">
          {/* Card 1 */}
          <div className="relative w-[400px] overflow-hidden bg-white shadow-[0px_0px_5px_#7F8CAA] py-4 px-8 rounded-lg group cursor-pointer">
            {/* Sliding background */}
            <div className="absolute inset-0 w-0 bg-[#db4961] group-hover:w-full transition-all duration-500 ease-in-out"></div>

            {/* Content */}
            <div className="relative z-0">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-[#fd0d34] text-3xl pb-2 group-hover:text-white transition-colors duration-500"
              />
              <h4 className="text-2xl text-slate-600 font-bold pb-2 group-hover:text-white transition-colors duration-500">
                Experience & Expertise
              </h4>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores nam explicabo placeat.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-[400px] overflow-hidden bg-white shadow-[0px_0px_5px_#7F8CAA] py-4 px-8 rounded-lg group cursor-pointer">
            <div className="absolute inset-0 w-0 bg-[#db4961] group-hover:w-full transition-all duration-500 ease-in-out"></div>
            <div className="relative z-9">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-[#fd0d34] text-3xl pb-2 group-hover:text-white transition-colors duration-500"
              />
              <h4 className="text-2xl text-slate-600 font-bold pb-2 group-hover:text-white transition-colors duration-500">
                Innovation & Creativity
              </h4>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, repellat!
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-[400px] overflow-hidden bg-white shadow-[0px_0px_5px_#7F8CAA] py-4 px-8 rounded-lg group cursor-pointer">
            <div className="absolute inset-0 w-0 bg-[#db4961] group-hover:w-full transition-all duration-500 ease-in-out"></div>
            <div className="relative z-9">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-[#fd0d34] text-3xl pb-2 group-hover:text-white transition-colors duration-500"
              />
              <h4 className="text-2xl text-slate-600 font-bold pb-2 group-hover:text-white transition-colors duration-500">
                Trusted Solutions
              </h4>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                ducimus.
              </p>
            </div>
          </div>
        </div>

        <div
          className="py-20 bg-gray-300"
          style={{
            clipPath:
              "polygon(0% 10%, 40% 0%, 100% 10%, 100% 10%, 100% 94%, 75% 88%, 0% 90%)",
          }}
        >
          <div
            className="relative bg-cover bg-center h-[580px] px-[150px] text-white"
            style={{
              backgroundImage: `url(${aboutUsHeroImage2})`,
              clipPath:
                "polygon(0% 5%, 40% 0%, 70% 5%, 100% 0%, 100% 100%, 75% 90%, 0% 100%)",
            }}
          >
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content (stays above overlay) */}
            <div className="relative flex justify-center items-center h-full text-center">
              <div className="w-[620px]">
                <p className="text-6xl pb-8 font-bold">
                  Explore Insights From Our Team
                </p>
                <p className="text-gray-200 text-xl pb-16">
                  Dive into articles, stories, and updates where our team shares
                  knowledge, experiences, and the latest trends in technology.
                  Stay inspired and keep learning with us.
                </p>
                <p>
                  <Link to="/blogs">
                    <button className="bg-[#fd0d34] text-lg px-8 py-2  rounded-md cursor-pointer hover:bg-[#ea4762]">
                      Explore Now &rarr;
                    </button>
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center px-[150px] gap-30 py-22 ">
          <div className="flex gap-7 text-white">
            <div>
              {/* Image 1 → Red Gradient Overlay */}
              <div
                className="relative w-[270px] h-[340px] mb-7 bg-cover bg-center rounded-md "
                style={{ backgroundImage: `url(${innovation})` }}
              >
                <div className="absolute inset-0 rounded-md p-10 flex flex-col justify-center items-center bg-[linear-gradient(to_top,rgba(255,128,64,0.9),rgba(255,128,64,0.9))]">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-5xl pb-4"
                  />
                  <h1 className="text-center font-bold text-xl pb-2">
                    Innovation & Ideas
                  </h1>
                  <p className="text-center text-sm">
                    Lorem ipsum dolor sit, amet consectetur elit. Quasi
                    repudiandae dolorem rerum
                  </p>
                </div>
              </div>

              {/* Image 2 → Blue Gradient Overlay */}
              <div
                className="relative w-[270px] h-[324px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${aboutUsCoding1})` }}
              >
                <div className="absolute inset-0 rounded-md p-10 flex flex-col justify-center items-center bg-[linear-gradient(to_top,rgba(19,29,79,0.9),rgba(19,29,79,0.9))]">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-5xl pb-4"
                  />
                  <h1 className="text-center font-bold text-xl pb-2">
                    Collaborate for Future
                  </h1>
                  <p className="text-center text-sm">
                    Lorem ipsum dolor sit, amet consectetur elit. Quasi
                    repudiandae dolorem rerum
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              {/* Image 3 → Plain */}
              <img
                src={hackathon3}
                alt=""
                className="w-[270px] rounded-md h-[340px] object-cover mb-7"
              />

              {/* Image 4 → Green Gradient Overlay */}
              <div
                className="relative w-[270px] h-[340px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${chatting})` }}
              >
                <div className="absolute inset-0 rounded-md p-10 flex flex-col justify-center items-center bg-[linear-gradient(to_top,rgba(22,163,74,0.9),rgba(22,163,74,0.9))]">
                  <FontAwesomeIcon icon={faUsers} className="text-5xl pb-4" />
                  <h1 className="text-center font-bold text-xl pb-2">
                    Team Messaging
                  </h1>
                  <p className="text-center text-sm">
                    Lorem ipsum dolor sit, amet consectetur elit. Quasi
                    repudiandae dolorem rerum
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-5xl font-bold pb-8">
              Who We <span className="text-[#fd0d34]">Are ?</span>
            </h2>
            <div className="text-lg pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              at, a iure sint, cupiditate qui expedita amet dicta, sunt porro
              quia quam nesciunt deserunt libero temporibus nihil nostrum ea ad!
            </div>
            <div className="pb-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              at, a iure sint, cupiditate qui expedita amet dicta, sunt porro
              quia quam nesciunt deserunt libero temporibus nihil nostrum ea ad!
            </div>
            <div className="text-lg flex flex-col gap-3">
              <p>
                <span className="text-[#fd0d34] font-bold mx-2 ">
                  &#10003;
                </span>{" "}
                Offer Team Collaboration
              </p>
              <p>
                <span className="text-[#fd0d34] font-bold mx-2 ">
                  &#10003;
                </span>{" "}
                Interaction with Global Mentors
              </p>

              <p>
                <span className="text-[#fd0d34] font-bold mx-2 ">
                  &#10003;
                </span>{" "}
                Rewards for Your Ideas
              </p>
              <p>
                <span className="text-[#fd0d34] font-bold mx-2 ">
                  &#10003;
                </span>{" "}
                Offer Team Collaboration
              </p>
            </div>
            <button className="bg-[#fd0d34] text-white px-8 py-2 cursor-pointer rounded-md mt-12 text-lg">
              Learn More <span>&rarr;</span>
            </button>
          </div>
        </div>
        {/* <div className="flex px-[140px] justify-evenly my-20">
            <div className="flex flex-col justify-center items-center ">
                <p className="font-bold text-[36px] text-[#fd0d34]">600+</p>
                <p className="text-lg pb-2 font-semibold">Satisfied Clients</p>
                <FontAwesomeIcon icon={faSmile} className="text-3xl text-[#fd0d34]"/>
            </div>
             <div className="flex flex-col justify-center items-center ">
                <p className="font-bold text-[36px] text-[#fd0d34]">200+</p>
                <p className="text-lg pb-2 font-semibold">Project Completed</p>
                <FontAwesomeIcon icon={faSmile} className="text-3xl text-[#fd0d34]"/>
            </div>
             <div className="flex flex-col justify-center items-center ">
                <p className="font-bold text-[36px] text-[#fd0d34]">210+</p>
                <p className="text-lg pb-2 font-semibold">Project Launched</p>
                <FontAwesomeIcon icon={faRocket} className="text-3xl text-[#fd0d34]"/>
            </div>
             <div className="flex flex-col justify-center items-center ">
                <p className="font-bold text-[36px] text-[#fd0d34]">12+</p>
                <p className="text-lg pb-2 font-semibold">Years Completed</p>
                <FontAwesomeIcon icon={faSmile} className="text-3xl text-[#fd0d34]"/>
            </div>
        </div> */}
        <div className="px-[150px] py-10">
          <h1 className="text-center text-5xl font-bold">
            Powerful Features to Enhance
          </h1>
          <p className="text-center font-bold text-5xl pb-16 text-[#fd0d34]">
            Your Hackathon
          </p>
          <div className="flex gap-5 pb-5 text-white">
            {/* Card 1 */}
            <div
              className="relative group w-[820px] h-[280px] rounded-xl cursor-pointer bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${collaboration})` }}
            >
              {/* Overlay background that grows on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent translate-y-[60%] group-hover:translate-y-0 transition-all duration-500"></div>

              {/* Text container sliding up */}
              <div className="absolute bottom-3 left-0 w-full p-5 transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                <h2 className="font-bold text-xl">Community & Collaboration</h2>
                <p className="text-sm mt-2 w-[500px]">
                  Form teams, chat with peers, and collaborate in real-time.
                  Message with team and collaborate globally
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative group w-[380px] h-[280px] rounded-xl cursor-pointer bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${reward})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70  to-transparent translate-y-[60%] group-hover:translate-y-0 transition-all duration-500"></div>

              <div className="absolute bottom-3 left-0 w-full p-5 transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                <h2 className="font-bold text-xl">Engagement & Rewards</h2>
                <p className="text-sm mt-2">
                  Earn badges, prizes, and showcase your achievements.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pb-5 text-white">
            {/* Card 3 */}
            <div
              className="relative group w-[380px] h-[280px] rounded-xl cursor-pointer bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${growth})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent translate-y-[60%] group-hover:translate-y-0 transition-all duration-500"></div>

              <div className="absolute bottom-3 left-0 w-full p-5 transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                <h2 className="font-bold text-xl">Career Growth</h2>
                <p className="text-sm mt-2">
                  Get discovered by recruiters and add projects to your
                  portfolio.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="relative group w-[820px] h-[280px] rounded-xl cursor-pointer bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${aboutUsHeroImage2})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent translate-y-[60%] group-hover:translate-y-0 transition-all duration-500"></div>

              <div className="absolute bottom-5 left-0 w-full p-5 transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                <h2 className="font-bold text-xl">Hackathon Ecosystem</h2>
                <p className="text-sm mt-2 w-[500px]">
                  Join global hackathons with multiple tracks and real-time
                  judging.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[240px] py-18">
          <h1 className="text-5xl text-center pb-3 font-bold">Our Team Behind It</h1>
          <p className="text-center pb-12 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            nemo.
          </p>
          <div className="flex justify-between">
            <Teams
              image={person1}
              name="Prajon Adhikari"
              role="Web Developer"
            />
            <Teams
              image={person2}
              name="Sarthak Adhikari"
              role="Frontend Developer"
            />
            <Teams image={person3} name="Kshitij Adhikari" role="Designer" />
            <Teams image={person4} name="Mary Jane" role="Operation Head" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
