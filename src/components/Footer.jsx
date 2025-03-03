import React from "react";
import Calls from "../assets/Calls";
import Locationsvg from "../assets/Locationsvg";
import Massages from "../assets/Massages";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-gradient-to-r from-[#007D6E] to-[#5EB47C] mt-8 px-3 py-12">
        <div className="mx-auto w-full m-0 p-0">
          <div className="flex flex-wrap justify-between px-10 sm:px-20">
            {/* Footer Section 1 */}
            <div className="footer-section flex flex-col items-center text-white px-8">
              <div className="footer-image flex items-center">
                <img
                  src="/src/assets/g10.png"
                  alt="A+ Counseling Center Logo"
                  className="w-14 mr-2"
                />
                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    A+ Counseling Center
                  </h1>
                </div>
              </div>
              <p className="pt-4 text-sm sm:text-base md:text-lg">
                Professional mental health consultation and support services.
              </p>
            </div>

            {/* Footer Section 2 (Services) */}
            <div className="footer-section text-white">
              <ul>
                <li className="footer-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Services
                </li>
                <li className="text-sm sm:text-base md:text-lg pb-2">
                  Psychotherapy
                </li>
                <li className="text-sm sm:text-base md:text-lg pb-2">
                  Mental Counseling
                </li>
                <li className="text-sm sm:text-base md:text-lg pb-2">
                  Support Groups
                </li>
                <li className="text-sm sm:text-base md:text-lg pb-2">
                  Case Management
                </li>
              </ul>
            </div>

            {/* Footer Section 3 (Contact) */}
            <div className="footer-section text-white">
              <ul>
                <li className="footer-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Contact
                </li>
                <li className="flex text-sm sm:text-base md:text-lg items-center mb-2">
                  <img
                    src="src/assets/New folder/Call.png"
                    alt="Call Icon"
                    className="mr-2 w-6 h-6"
                  />
                  <p className="pb-2">+91 9685714245</p>
                </li>
                <li className="flex text-sm sm:text-base md:text-lg items-center mb-2">
                  <img
                    src="src/assets/New folder/Message.png"
                    alt="Message Icon"
                    className="mr-2 w-6 h-6"
                  />
                  <p className="pb-2">altaf@apluscounselling.com</p>
                </li>
                {/* <li className="flex text-sm sm:text-base md:text-lg items-center">
                  <img
                    src="src/assets/New folder/Location.png"
                    alt="Location Icon"
                    className="mr-2 w-6 h-6"
                  />
                  <p className="pb-2">Lazyy Tower 192, Burn</p>
                </li> */}
              </ul>
            </div>

            {/* Footer Section 4 (Links) */}
            <div className="footer-section text-white">
              <ul>
                <li className="footer-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Links
                </li>
                <li className="text-sm sm:text-base md:text-lg pb-2">
                  Privacy Policy
                </li>
                <li className="text-sm sm:text-base md:text-lg pb-2">
                  Terms of Use
                </li>
              </ul>
            </div>

            {/* Footer Section 5 (Maps) */}
            {/* <div className="footer-section text-white px-4">
              <ul>
                <li className="footer-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Maps
                </li>
                <li>
                  <div>
                    <iframe
                      title="google map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473115.9060003995!2d-9.790797163012584!3d31.778265070846214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sma!4v1709282907766!5m2!1sen!2sma"
                      width="100%"
                      height="100"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Footer Divider Line */}
        <div className="border-t-2 border-white w-full mt-10 sm:mt-20"></div>

        {/* Social Media & Copyright Section */}
        <div className="text-center text-white mt-10 sm:mt-20 text-sm">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <img
              src="src/assets/New folder/Frame 149.png"
              alt="Social Media Icon"
            />
          </div>

          {/* Copyright Text */}
          <p className="text-[12px] sm:text-sm md:text-base font-poppins">
            Copyright &copy; {new Date().getFullYear()} A+ Counseling Center.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
    // <div className="footer bg-gradient-to-r from-[#007D6E] to-[#5EB47C] mt-8 px-4 sm:px-6 lg:px-12 py-12">
    //   <div className="mx-auto max-w-7xl">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {/* Footer Section 1 */}
    //       <div className="footer-section flex flex-col items-center sm:items-start text-white">
    //         <div className="footer-image flex items-center">
    //           <img
    //             src="/src/assets/g10.png"
    //             alt="A+ Counseling Center"
    //             className="w-14 mr-2"
    //           />
    //           <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
    //             A+ Counseling Center
    //           </h1>
    //         </div>
    //         <p className="pt-4 text-sm sm:text-base md:text-lg text-center sm:text-left">
    //           Professional mental health consultation and support services.
    //         </p>
    //       </div>

    //       {/* Footer Section 2 (Services) */}
    //       <div className="footer-section text-white">
    //         <ul>
    //           <li className="footer-heading text-lg sm:text-xl md:text-2xl font-bold mb-3">
    //             Services
    //           </li>
    //           {[
    //             "Psychotherapy",
    //             "Mental Counseling",
    //             "Support Groups",
    //             "Case Management",
    //           ].map((service, index) => (
    //             <li
    //               key={index}
    //               className="text-sm sm:text-base md:text-lg pb-2"
    //             >
    //               {service}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Footer Section 3 (Contact) */}
    //       <div className="footer-section text-white">
    //         <ul>
    //           <li className="footer-heading text-lg sm:text-xl md:text-2xl font-bold mb-3">
    //             Contact
    //           </li>
    //           <li className="flex items-center text-sm sm:text-base md:text-lg mb-2">
    //             <img
    //               src="src/assets/New folder/Call.png"
    //               alt="Call"
    //               className="w-5 h-5 mr-2"
    //             />
    //             <p>+91 9685714245</p>
    //           </li>
    //           <li className="flex items-center text-sm sm:text-base md:text-lg mb-2">
    //             <img
    //               src="src/assets/New folder/Message.png"
    //               alt="Email"
    //               className="w-5 h-5 mr-2"
    //             />
    //             <p>altaf@apluscounselling.com</p>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Footer Section 4 (Links) */}
    //       <div className="footer-section text-white">
    //         <ul>
    //           <li className="footer-heading text-lg sm:text-xl md:text-2xl font-bold mb-3">
    //             Links
    //           </li>
    //           {["Privacy Policy", "Terms of Use"].map((link, index) => (
    //             <li
    //               key={index}
    //               className="text-sm sm:text-base md:text-lg pb-2"
    //             >
    //               {link}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Divider Line */}
    //   <div className="border-t-2 border-white w-full mt-10"></div>

    //   {/* Social Media & Copyright */}
    //   <div className="text-center text-white mt-10 text-sm">
    //     <div className="flex justify-center space-x-6 mb-4">
    //       <img
    //         src="src/assets/New folder/Frame 149.png"
    //         alt="Social Media"
    //         className="w-8 sm:w-10"
    //       />
    //     </div>
    //     <p className="text-[12px] sm:text-sm md:text-base">
    //       Copyright &copy; {new Date().getFullYear()} A+ Counseling Center. All
    //       Rights Reserved.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Footer;
