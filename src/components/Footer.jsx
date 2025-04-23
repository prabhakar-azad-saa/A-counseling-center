// import React from "react";
// import { Link } from "react-router-dom";
// import Calls from "../img/Calls";
// import Massages from "../img/Massages";
// import Locationfooter from "../img/Locationfooter";
// import Logolotas from "../img/Logolotas";
// import footerSocial from "../img/footerSocial.png";

// const services = [
//   "Individual Therapy",
//   "Relationship Therapy",
//   "Family Counseling",
//   "Specialized Therapy",
//   "Career Coaching",
//   "Online Sessions",
// ];

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-br from-[#002B36] via-[#0F4C4C] to-[#3A6351] text-white pt-20 pb-10 px-6 overflow-hidden">
//       {/* Soft Blur Background Glow */}
//       <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#C8FACC]/10 rounded-full blur-3xl animate-pulse z-0" />
//       <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-[#C8FACC]/10 rounded-full blur-2xl animate-ping z-0" />

//       <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         {/* Left Column – Branding */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//           <div className="flex items-center gap-4 mb-4">
//             <Logolotas />
//             <h2 className="text-3xl font-bold">
//               A<sup>+</sup> Counseling
//             </h2>
//           </div>
//           <p className="text-white/80 text-sm max-w-md">
//             Your space to feel heard, supported, and empowered. We're here for you — every step of the way.
//           </p>
//           <div className="mt-6">
//             <img src={footerSocial} alt="Social Media Icons" className="h-8 w-auto hover:scale-105 transition-transform" />
//           </div>
//         </div>

//         {/* Right Column – Cards */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {/* Services Card */}
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-lg font-semibold mb-4 text-green-100">Our Services</h3>
//             <ul className="space-y-2 text-sm">
//               {services.map((service, idx) => (
//                 <li key={idx}>
//                   <Link
//                     to={`/services?name=${encodeURIComponent(service)}`}
//                     className="hover:text-green-200 transition duration-200"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Card */}
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-lg font-semibold mb-4 text-green-100">Contact</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 <Calls className="w-5 h-5" /> +91 9685714245
//               </li>
//               <li className="flex items-center gap-2">
//                 <Massages className="w-5 h-5" /> info@apluscounselling.com
//               </li>
//               <li className="flex items-start gap-2">
//                 <Locationfooter className="w-5 h-5 mt-1" />
//                 D67, BDA Colony, <br /> Kohefiza, Bhopal
//               </li>
//             </ul>
//           </div>

//           {/* Policies Card */}
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:col-span-2 hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-lg font-semibold mb-4 text-green-100">Quick Links</h3>
//             <ul className="flex flex-col sm:flex-row sm:gap-6 text-sm">
//               <li>
//                 <Link to="/privacy-policy" className="hover:underline hover:text-green-200">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms-of-use" className="hover:underline hover:text-green-200">
//                   Terms of Use
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="relative z-10 text-center mt-12 text-white/60 text-xs sm:text-sm">
//         &copy; {new Date().getFullYear()} A<sup>+</sup> Counseling & Consultancy Services. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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

