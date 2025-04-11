import React, { useState } from "react";

import frameImage from "../img/svgvieweroutput.png";
import { use } from "react";
import { selecetSlot, sessionBook } from "../action/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { motion } from "framer-motion";

function Booksession() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    counselingType: "",
    date: "",
    slot: "",
    field: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [userData, setUserData] = useState(null);
  const [slotData, setSlotData] = useState([]);
  const [slotId, setSlotId] = useState(null);
  const [selecetdResult, setSelecetdResult] = useState("");
  const [loading, setLoading] = useState(false);
  // const [selectedTime, setSelectedTime] = useState("");

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  //   if (name === "date") {
  //     setSelectedDate(value.split("T"));
  //   }
  //   if (name === "slot") {
  //     const selectedSlotData = value?.remainingSlots?.find(
  //       (slot) => slot.slotDescription === value
  //     );

  //     if (selectedSlotData) {
  //       setSlotId(selectedSlotData.slotId);
  //     }
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, // Store ID in formData.slot
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "date") {
      setSelectedDate(value.split("T")[0]);
      console.log(value);
    }

    if (name === "slot") {
      // Find slot object using ID instead of description
      const selectedSlotData = slotData?.find((slot) => slot.slotId == value);

      if (selectedSlotData) {
        setSlotId(selectedSlotData.slotId); // Store ID separately
      }
    }
  };
  // console.log("=======55========", slotId);

  useEffect(() => {
    if (selectedDate) {
      selecetSlot(selectedDate)
        .then((data) => {
          console.log(data, "data slot");
          const formaatedData = data?.remainingSlots.map((slot) => {
            return {
              slotId: slot.slotId,
              slotDescription: slot?.slotDescription,
            };
          });
          setSlotData(formaatedData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedDate, selecetdResult]);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // console.log('=====3333===',user)
      setFormData((prev) => ({
        ...prev,
        name: user.username || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, []);

  // console.log("=======55========", userData?.userId, slotData);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Full name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.counselingType) {
      newErrors.counselingType = "Session type is required";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    if (!formData.slot) {
      newErrors.slot = "slot is required";
    }
    if (!formData.field) {
      newErrors.field = "Type of counseling is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData?.userId) {
      navigate("/login");
      return;
    }

    // console.log(formData);

    if (validateForm()) {
      const sessionData = {
        fullName: formData.name,
        emailId: formData.email,
        contactNumber: `+91` + formData.phoneNumber,
        sessionType: formData.counselingType,
        sessionDate: formData.date,
        sessionSlotId: slotId,
        userId: userData?.userId,
        booked: true,
        counselingType: formData.field,
        message: formData.message,
      };

      console.log(sessionData);
      setLoading(true);

      sessionBook(sessionData)
        .then((data) => {
          console.log(data);
          setSelecetdResult(data);
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            counselingType: "",
            date: "",
            slot: "",
            field: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="">
      <div
        className="relative w-full h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${frameImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 w-full  px-5">
          <div className="grid mt-12 grid-cols-1 md:grid-cols-1 items-center gap-1 min-h-[500px]">
            <div className="flex flex-row ml-8 items-center md:justify-start space-x-8">
              <div className="h-60 border-l-2 border-white"></div>
              <div className="flex flex-col text-center md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-5xl font-bold text-white mb-4" // Added mb-4 for spacing
                >
                  Book Session
                </motion.h2>
                <br />
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-lg text-white"
                >
                  Your trusted partner in mental wellness. Book your path to
                  better emotional health and personal growth
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FCF8F4] pt-6">
        <div className="flex flex-col md:flex-col lg:flex-row justify-center md:space-x-12 px-6 sm:px-12 lg:px-32 mt-20">
          {/* Left Column: Title and Description */}
          <div className="text-center md:text-left mb-10 md:mb-0 md:flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Book Your Counseling Session Instantly
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black mt-4 font-poppins">
              Take the first step toward better mental health. Schedule your
              session with our experienced counselors today.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:max-w-4xl p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Full Name
                  </label>
                  <input
                    placeholder="Your first name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Email Address
                  </label>
                  <input
                    placeholder="Enter Your Email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    placeholder="Enter Mobile Number"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                    maxLength={10}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Session Type */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Session Type
                  </label>
                  <select
                    name="counselingType"
                    value={formData.counselingType}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  >
                    <option value="">Select session type</option>
                    <option value="Video Call">Video Call</option>
                    <option value="Phone call">Phone call</option>
                    <option value="Phone call">Chat Support</option>
                    <option value="In-Person Consultation">
                      In-Person Consultation
                    </option>
                  </select>
                  {errors.counselingType && (
                    <p className="text-red-500 text-sm">
                      {errors.counselingType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Available Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Available Slot
                  </label>

                  <select
                    name="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  >
                    <option value="">Select available slot</option>
                    {slotData?.map((slot) => (
                      <option key={slot.slotId} value={slot.slotId}>
                        {slot.slotDescription}
                      </option>
                    ))}
                  </select>
                  {errors.slot && (
                    <p className="text-red-500 text-sm">{errors.slot}</p>
                  )}
                </div>
              </div>

              {/* Type of Counseling */}
              <div className="mb-6">
                <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                  Type of Counseling
                </label>
                <select
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                >
                  <option value="">Select type of counseling</option>
                  <option value="Mental Health">Individual Therapy</option>
                  <option value="Career Counseling">
                    Relationship Therapy
                  </option>
                  <option value="Educational Counseling">
                    Family Counseling
                  </option>
                  <option value="Relationship Counseling">
                    Specialized Therapy
                  </option>
                  <option value="Career Coaching">Career Coaching</option>
                  <option value="Online Sessions">Online Sessions</option>
                </select>
                {errors.field && (
                  <p className="text-red-500 text-sm">{errors.field}</p>
                )}
              </div>

              {/* Additional Message */}
              <div className="mb-6">
                <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                  Additional Message (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border border-gray-300 rounded-3xl min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="mb-6">
                {/* <button
                  type="submit"
                  className="w-full p-3 text-white bg-[#EC744A] hover:bg-[#EC744A] rounded-3xl text-lg"
                >
                      {loading ? (
                          <>
                            <Spin size="small" className="mr-2" /> Sending...
                          </>
                        ) : (
                          "Submit"
                        )}
                 

                </button> */}
                <button
                  type="submit"
                  className={`w-full p-3 text-white bg-[#EC744A] hover:bg-[#EC744A] rounded-3xl text-lg flex items-center justify-center ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? <Spin size="small" className="mr-2" /> : "Submit"}
                </button>
              </div>
            </form>
            {selecetdResult && (
              <p className="text-green-500 font-semibold text-center mt-3">
                {selecetdResult?.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booksession;
