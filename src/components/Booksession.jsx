import React, { useState } from "react";

import frameImage from "../../src/assets/svgvieweroutput.png";
import { use } from "react";
import { selecetSlot, sessionBook } from "../action/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    }

    if (name === "slot") {
      // Find slot object using ID instead of description
      const selectedSlotData = slotData?.find((slot) => slot.slotId == value);

      if (selectedSlotData) {
        setSlotId(selectedSlotData.slotId); // Store ID separately
      }
    }
  };
  console.log("=======55========", slotId);

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

  console.log("=======55========", userData?.userId, slotData);

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

    console.log(formData);

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
        });
    }
  };

  return (
    <div>
      <nav
        className="flex w-full p-10 sm:p-8 md:p-10 lg:p-16"
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        <div className="flex max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
          <div>
            <div className="border-l-4 h-64 p-5"></div>
          </div>
          <div>
            <h1 className="text-white text-[68px] sm:text-5xl lg:text-[68px] font-extrabold p-4">
              Book Session
            </h1>
            <p className="text-[#FFFFFF] text-lg sm:text-xl  p-4 font-poppins">
              Your trusted partner in mental wellness. Book your path to better
              emotional health and personal growth.
            </p>
          </div>
        </div>
      </nav>

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
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">
                    Available Slot
                  </label>
                  {/* <select
                    name="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  >
                    <option value="">Select available slot</option>
                    <option value="09:00-10:00">09:00-10:00</option>
                    <option value="10:00-11:00">10:00-11:00</option>
                    <option value="11:00-12:00">11:00-12:00</option>
                    <option value="12:00-01:00">12:00-01:00</option>
                    <option value="01:00-02:00">01:00-02:00</option>
                    <option value="02:00-03:00">02:00-03:00</option>
                  </select> */}

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
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-[#EC744A] hover:bg-[#EC744A] rounded-3xl text-lg"
                >
                  Submit
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
