import React from "react";
import frameImage from "../img/svgvieweroutput.png";
import individual1 from "../img/individual1.png"
import individual2 from "../img/individual2.png"
import individual3 from "../img/individual3.png"
import Psychoanalytic from "../img/Psychoanalytic";
import Mind from "../img/Mind";
import Cognitive from "../img/Cognitive";
import Human from "../img/Human";
import Professionall from "../img/Professionall";
import Reduce from "../img/Reduce";

const Individualsection = () => {
  return (
    <div>
      {/* Navigation Section */}
      <nav
  className="flex w-full justify-center p-8 sm:p-10 lg:p-20 bg-cover"
  style={{ backgroundImage: `url(${frameImage})` }}
>
  <div className="flex flex-col lg:flex-row w-full max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
    {/* Left Section (Border) */}
    <div className="hidden lg:block w-full lg:w-auto">
      <div className="border-l-4 h-64 p-5"></div>
    </div>

    {/* Right Section (Text) */}
    <div className="flex flex-col justify-center w-full text-center lg:text-left">
      <h1 className="text-white text-4xl sm:text-5xl lg:text-[68px] font-extrabold p-4">
        Services Detail
      </h1>
      <p className="text-white text-base sm:text-lg lg:text-xl p-4 font-poppins">
        At A+ Counseling Center, we offer a wide range of counseling
        services tailored to meet the diverse needs of individuals,
        couples, and families. Our approach integrates evidence-based
        techniques with compassionate care to help you navigate life's
        challenges.
      </p>
    </div>
  </div>
</nav>


      <div className="p-5 bg-[#FCF8F4]">
        {/* Individual Therapy Section */}
        <div className="flex flex-wrap gap-5 px-4 sm:px-32 mt-24 mb-10">
          <div className="w-full">
            <img
              // src="src/assets/Mask group.png"
              src={individual1}
              alt="Individual Therapy"
              className="w-full rounded-lg"
              style={{ width: "100%", height: "100%", objectFit: "none" }}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center py-20 sm:py-0">
            <div className="w-full sm:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-5">
                Individual Therapy
              </h1>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="text-lg font-poppins mb-4">
                Our individual therapy sessions provide a safe, confidential
                space for personal growth and healing. We work together to
                address your specific concerns and develop effective coping
                strategies.
              </p>
              <p className="text-lg font-poppins">
                Through personalized treatment plans and evidence-based
                approaches, we help you achieve meaningful progress in your
                mental health journey.
              </p>
            </div>
          </div>
        </div>

        {/* Individual Therapy Method Section */}
        {/* <div className="mb-10 text-center py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
            Individual Therapy Method
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mt-8 p-10">
            <div className="bg-gradient-to-r from-[#007D6E] to-[#2F4B4E] p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
              <img
                src="src/assets/online counselling/007-psychologist.png"
                alt="Psychoanalytic Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Psychoanalytic Therapy
              </h2>
              <p className="text-lg font-poppins">
                Explore deep-seated patterns and unconscious influences to gain
                profound self-understanding and emotional healing.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center">
              <img
                src="src/assets/online counselling/Group (6).png"
                alt="Mindfulness Based Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Mindfulness Based Therapy
              </h2>
              <p className="text-lg font-poppins">
                Learn practical techniques to stay present, manage stress, and
                develop greater emotional awareness.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center">
              <img
                src="src/assets/online counselling/022-inner dialogue.png"
                alt="Cognitive Behavioral Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Cognitive Behavioral Therapy
              </h2>
              <p className="text-lg font-poppins">
                Identify and transform challenging thought patterns to improve
                emotional well-being and daily functioning.
              </p>
            </div>
            <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center text-white">
              <img
                src="src/assets/online counselling/Group (7).png"
                alt="Humanistic Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Humanistic Therapy
              </h2>
              <p className="text-lg font-poppins">
                Discover your inner potential through person-centered approaches
                that emphasize self-growth and awareness.
              </p>
            </div>
          </div>
        </div> */}

        <div className="mb-10 text-center py-12 sm:py-16 px-4 sm:px-32">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
            Individual Therapy Method
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mt-8 p-10">
            {/* <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center text-white">
              <img
                src="src/assets/online counselling/007-psychologist.png"
                alt="Psychoanalytic Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Psychoanalytic Therapy
              </h2>
              <p className="text-lg font-poppins">
                Explore deep-seated patterns and unconscious influences to gain
                profound self-understanding and emotional healing.
              </p>
            </div> */}

            <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* <img
                src="src/assets/online counselling/007-psychologist.png"
                alt="Psychoanalytic Therapy"
                className="w-24 h-24 mx-auto mb-4"
              /> */}
              <Psychoanalytic   className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
                Psychoanalytic Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white font-poppins">
                Explore deep-seated patterns and unconscious influences to gain
                profound self-understanding and emotional healing.
              </p>
            </div>

            {/* <div className="bg-white p-5 rounded-xl text-center">
              <img
                src="src/assets/online counselling/Group (6).png"
                alt="Mindfulness Based Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Mindfulness Based Therapy
              </h2>
              <p className="text-lg font-poppins">
                Learn practical techniques to stay present, manage stress, and
                develop greater emotional awareness.
              </p>
            </div> */}

            <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* <img
                src="src/assets/online counselling/Group (6).png"
                alt="Mindfulness Based Therapy"
                className="w-24 h-24 mx-auto mb-4"
              /> */}
              <Mind  className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
                Mindfulness Based Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
                Learn practical techniques to stay present, manage stress, and
                develop greater emotional awareness.
              </p>
            </div>

            {/* <div className="bg-white p-5 rounded-xl text-center">
              <img
                src="src/assets/online counselling/022-inner dialogue.png"
                alt="Cognitive Behavioral Therapy"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Cognitive Behavioral Therapy
              </h2>
              <p className="text-lg font-poppins">
                Identify and transform challenging thought patterns to improve
                emotional well-being and daily functioning.
              </p>
            </div> */}
            <div className="bg-white p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* <img
                src="src/assets/online counselling/022-inner dialogue.png"
                alt="Cognitive Behavioral Therapy"
                className="w-24 h-24 mx-auto mb-4"
              /> */}
              <Cognitive  className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-gray-900">
                Cognitive Behavioral Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-900 font-poppins">
                Identify and transform challenging thought patterns to improve
                emotional well-being and daily functioning.
              </p>
            </div>

           
            <div className="bg-gradient-to-r from-teal-700 to-teal-400 p-6 rounded-3xl text-center py-12 sm:py-20 cursor-pointer hover:scale-105 transition-transform duration-300">
             
              <Human className="w-24 h-24 mx-auto mb-4"/>
              <h2 className="text-[28px] sm:text-[35px] mb-2 text-white">
                Humanistic Therapy
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white font-poppins">
                Discover your inner potential through person-centered approaches
                that emphasize self-growth and awareness.
              </p>
            </div>
          </div>
        </div>
        {/* Mentor Section */}
        <div
          className="w-full flex flex-col relative bg-cover"
          style={{ backgroundImage: `url(${frameImage})` }}
        >
          <div
            style={{ top: -90 }}
            className="absolute top-0 w-[400px] h-[500px] ml-10 mb-20"
          >
            <img src={individual2} />
          </div>
          <div className="flex justify-end w-full ml-48">
            <div className="text-white flex flex-col items-center sm:items-start sm:w-3/4 p-6">
              <h3 className="text-2xl mb-3">Mentor</h3>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Introduction to Experienced Consulting
              </h1>

              <div className="w-full sm:w-3/4 mb-8">
                {/* Professional Growth Section */}
                <div className="w-full flex mb-8 sm:mb-4 p-3 rounded-xl">
                 
                  <Professionall />
                  <div className="pl-5 flex flex-col justify-center">
                    <h2 className="text-xl font-semibold mb-3">
                      Professional Growth
                    </h2>
                    <p className="text-sm font-poppins">
                      Enhance your personal and professional development through
                      expert guidance.
                    </p>
                  </div>
                </div>

                {/* Reduced Burnout Section */}
                <div className="w-full flex p-3 mb-8 rounded-xl">
                
                  <Reduce/>
                  <div className="pl-5 flex flex-col justify-center">
                    <h2 className="text-xl font-semibold mb-3">
                      Reduced Burnout
                    </h2>
                    <p className="text-sm font-poppins">
                      Learn effective stress management techniques to maintain
                      work-life balance and emotional well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breaking the Stigma Section */}
        <div className="text-center p-10 mb-10 flex flex-col items-center mt-48">
          <img
            src={individual3}
            alt="Breaking the Stigma"
            className="w-full rounded-lg "
            style={{ maxWidth: "1200px" }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-9 font-manrope">
            Breaking the Stigma Mental Health Counseling
          </h1>
          <p className="text-lg md:text-xl justify-center font-manrope pt-12 mb-4 mx-auto max-w-3xl">
            Join us in our mission to create an open dialogue about mental
            health and promote understanding and support in our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Individualsection;
