import React from "react";
import Calls from "../img/Calls";
import Massages from "../img/Massages";
import footerSocial from "../img/footerSocial.png";
import Locationfooter from "../img/Locationfooter";
import Logolotas from "../img/Logolotas";
import { Link } from "react-router-dom";

const services = [
  "Individual Therapy",
  "Relationship Therapy",
  "Family Counseling",
  "Specialized Therapy",
  "Career Coaching",
  "Online Sessions",
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#007D6E] to-[#5EB47C] py-12 text-white">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 text-center lg:text-left">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-3 mb-2">
                <Logolotas />
                <h1 className="text-2xl sm:text-3xl font-bold">
                  A<sup>+</sup> Counseling & Consultancy Services
                </h1>
              </div>
              <p className="text-sm sm:text-base mt-2">
                Professional mental health consultation <br /> and support services.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul>
              {services.map((service, index) => (
                <li key={index} className="text-sm sm:text-base pb-2">
                   <Link
          to={`/services?name=${encodeURIComponent(service)}`}
          className="hover:underline hover:text-gray-200 transition duration-200"
        >
          {service}
        </Link>
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li className="flex justify-center lg:justify-start items-center gap-2 text-sm sm:text-base">
                <Calls className="w-5 h-5" />
                +91 9685714245
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-2 text-sm sm:text-base">
                <Massages className="w-5 h-5" />
                info@apluscounselling.com
              </li>
              <li className="flex justify-center lg:justify-start items-start gap-2 text-sm sm:text-base">
                <Locationfooter className="w-5 h-5 mt-1" />
                Head office: D67, BDA Colony, <br />
                Kohefiza, Bhopal
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base">Privacy Policy</li>
              <li className="text-sm sm:text-base">Terms of Use</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-8"></div>

        {/* Social & Copyright */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src={footerSocial} alt="Socials" className="h-8 w-auto" />
          </div>
          <p className="text-xs sm:text-sm md:text-base">
            &copy; {new Date().getFullYear()} A<sup>+</sup> Counseling & Consultancy Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
