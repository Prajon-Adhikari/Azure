import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, faXTwitter, faWhatsapp, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#18191a] mt-10 px-[120px] text-white">
      <div className=" px-10 pb-12 pt-16 flex justify-between text-sm text-[#fd0d34]">
        <div className="w-[300px]">
           <h1 className="font-bold text-3xl pb-3 ">AzureDev</h1>
           <p className="text-white"> Maxime quaerat asperiores ab cumque labore eveniet facilis ducimus nemo autem aperiam. labore eveniet facilis ducimus nemo autem aperiam.</p>
           <div className="pt-5 flex gap-5 items-center cursor-pointer">
              <span className="bg-[#fd0d34] px-2 pt-2 pb-2 rounded-full">
                <FontAwesomeIcon icon={faFacebook} className="text-lg text-white"/>
              </span>
              <div className="bg-[#fd0d34]  px-2 pt-2 pb-2 rounded-full">
                <FontAwesomeIcon icon={faXTwitter} className="text-lg text-white"/>
              </div>
              <div className="bg-[#fd0d34]  px-[9px] pt-2 pb-2 rounded-full">
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-white"/>
              </div>
              <div className="bg-[#fd0d34]  px-[9px] pt-2 pb-2 rounded-full">
                <FontAwesomeIcon icon={faInstagram} className="text-lg text-white"/>
              </div>
           </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">AzureDev</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline text-white">
                 Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline flex items-center text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline text-white">
               Blogs
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-white">
                 Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-white">
                 Contact
              </Link>
            </li>
           
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-2">Our servies</h4>
          <ul className="space-y-1">
            <li>
              <Link to="join/hackathon" className="hover:underline text-white">
                 Web Development
              </Link>
            </li>
    
            <li>
              <Link to="hackathon" className="hover:underline text-white">
                 Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-white">
                    UI/UX Design
              </Link>
            </li>
             <li>
              <Link to="" className="hover:underline text-white">
                    Cloud Solutions
              </Link>
            </li>
             <li>
              <Link to="" className="hover:underline text-white">
                    AI & ML
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Information</h4>
          <ul className="space-y-1 text-white">
            <li>
              <FontAwesomeIcon icon={faPhone} className="text-[#A2A2A2] pr-2" /> +977-9800000000
            </li>
    
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="text-[#A2A2A2] pr-2"/> hello@azure.com.np

            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="text-[#A2A2A2] pr-2"/> Bharatpur-7, Chitwan
            </li>
          </ul>
          <h4 className="font-bold text-xl mb-2 pt-5">Opening Hours</h4>
              <div className="text-white">Sunday-Friday ( 10:00 to 05:00 )</div>
              <div className="text-white">Saturday ( Closed )</div>
        </div>
      </div>

      <div className=" px-10 py-6 border-t flex flex-col md:flex-row justify-between text-xs text-white">
        <p>© 2025 AzureDev, Inc. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <Link to="" className="hover:underline">
            Community guidelines
          </Link>
          <Link to="" className="hover:underline ">
            Terms of service
          </Link>
          <Link to="" className="hover:underline">
            Security
          </Link>
          <Link to="" className="hover:underline">
            CA notice
          </Link>
          <Link to="" className="hover:underline">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
