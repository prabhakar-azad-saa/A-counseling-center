import React from "react";
import { Link } from "react-router-dom";
import Calls from "../img/Calls";
import Massages from "../img/Massages";
import Locationfooter from "../img/Locationfooter";
import Logolotas from "../img/Logolotas";
import footerSocial from "../img/footerSocial.png";

const services = [
  "Individual Therapy",
  "Relationship Therapy",
  "Family Counseling",
  "Specialized Therapy",
  "Career Coaching",
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#002B36] via-[#0F4C4C] to-[#3A6351] text-white pt-20 pb-10 px-6 overflow-hidden">
      {/* Soft Blur Background Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#C8FACC]/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-[#C8FACC]/10 rounded-full blur-2xl animate-ping z-0" />

      <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column – Branding */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-4 mb-4">
            <Logolotas />
            <h2 className="text-xl font-bold">
              A<sup>+</sup> Counseling &<br /> Consultancy Services
            </h2>
          </div>
          <p className="text-white/80 ml-4 text-sm max-w-md">
            Your space to feel heard, supported, and empowered. We're here for
            you — every step of the way.
          </p>
          <div className="mt-6 ">
            <img
              src={footerSocial}
              alt="Social Media Icons"
              className="h-8 ml-4 w-auto hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Right Column – Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Services Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-green-100">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={`/services?name=${encodeURIComponent(service)}`}
                    className="hover:text-green-200 transition duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-green-100">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Calls className="w-5 h-5" /> +91 9977783332
              </li>
              <li className="flex items-center gap-2">
                <Massages className="w-5 h-5" />
                info@apluscounselling.com
              </li>
              <li className="flex items-start gap-2">
                <Locationfooter className="w-5 h-5 mt-1" />
                Head Office: D67, BDA Colony, <br /> Kohefiza, Bhopal
              </li>
            </ul>
          </div>

          {/* Policies Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:col-span-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-green-100">
              Quick Links
            </h3>
            <ul className="flex flex-col sm:flex-row sm:gap-6 text-sm">
              <li>
                <h3 className="hover:underline hover:text-green-200">
                  Privacy Policy
                </h3>
              </li>
              <li>
                <h3 className="hover:underline hover:text-green-200">
                  Terms of Use
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center mt-12 text-white/60 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} A<sup>+</sup> Counseling & Consultancy
        Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import Calls from "../img/Calls";
// import Massages from "../img/Massages";
// import footerSocial from "../img/footerSocial.png";
// import Locationfooter from "../img/Locationfooter";
// import Logolotas from "../img/Logolotas";

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
//     // bg-gradient-to-r from-[#007D6E] to-[#5EB47C]
//     <div className=" bg-gradient-to-r from-[#36736e] via-[#3d857e] to-[#36736e]  py-12 text-white">
//       <div className="mx-auto w-full max-w-[2300px] justify-between md:px-5 sm:px-20 grid grid-cols-1 md:grid-4 gap-10 px-6  ">
//         <div className="flex flex-wrap justify-between gap-y-10">
//           {/* Logo & About */}
//           <div className="flex flex-col max-w-sm">
//             <div className="flex items-center mb-4">
//               <Logolotas />
//               <h1 className="ml-3 text-xl sm:text-2xl md:text-3xl font-bold">
//                 A<sup>+</sup> Counseling & Consultancy Services
//               </h1>
//             </div>
//             <p className="text-sm sm:text-base md:text-lg ml-10">
//               Professional mental health consultation and support services.
//             </p>
//           </div>

//           {/* Services Section */}
//           <div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
//               Services
//             </h2>
//             <ul>
//               {services.map((service, index) => (
//                 <li key={index} className="pb-2 text-sm sm:text-base md:text-lg">
//                   <Link
//                     to={`/services?name=${encodeURIComponent(service)}`}
//                     className="hover:underline hover:text-gray-200 transition duration-200"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
//               Contact
//             </h2>
//             <ul className="space-y-3">
//               <li className="flex items-center text-sm sm:text-base md:text-lg">
//                 <Calls className="mr-2 w-5 h-5" />
//                 +91 9685714245
//               </li>
//               <li className="flex items-center text-sm sm:text-base md:text-lg">
//                 <Massages className="mr-2 w-5 h-5" />
//                 info@apluscounselling.com
//               </li>
//               <li className="flex items-start text-sm sm:text-base md:text-lg">
//                 <Locationfooter className="mr-2 w-5 h-5 mt-1" />
//               Head Office: D67, BDA Colony,<br/> Kohefiza, Bhopal
//               </li>
//             </ul>
//           </div>

//           {/* Links Section */}
//           <div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
//               Links
//             </h2>
//             <ul className="space-y-2">
//               <li className="text-sm sm:text-base md:text-lg">Privacy Policy</li>
//               <li className="text-sm sm:text-base md:text-lg">Terms of Use</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t-2 border-white w-full mt-12"></div>

//         {/* Socials & Copyright */}
//         <div className="text-center mt-10 text-sm">
//           <div className="flex justify-center mb-4">
//             <img src={footerSocial} alt="Social Media Icons" className="h-8 w-auto" />
//           </div>
//           <p className="text-[12px] sm:text-sm md:text-base">
//             &copy; {new Date().getFullYear()} A<sup>+</sup> Counseling & Consultancy Services. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
