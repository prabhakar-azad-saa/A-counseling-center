import React, { useState } from 'react';
import frameImage from "../../src/assets/svgvieweroutput.png"

function Booksession() {
  const title = "Book Session";
  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ipsa in corporis voluptate maiores, atque repudiandae ad blanditiis possimus.";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    counselingType: '',
    date: '',
    time: '',
    field: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Full name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    // Session type validation
    if (!formData.counselingType) {
      newErrors.counselingType = "Session type is required";
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    // Counseling field validation
    if (!formData.field) {
      newErrors.field = "Type of counseling is required";
    }

    setErrors(newErrors);

    // If there are no errors, return true to allow form submission
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form before submitting
    if (validateForm()) {
      console.log(formData);
      // You can submit the form data here to your backend if needed
    }
  };

  return (
    <div>
      <nav className="flex w-full p-10 sm:p-8 md:p-10 lg:p-16"
           style={{ backgroundImage: `url(${frameImage})` }}>
        <div className="flex flex-col border-l-4 max-w-screen-2xl px-6 sm:px-12 md:px-20">
          <h1 className="text-[#FFFFFF] text-4xl sm:text-5xl lg:text-6xl font-semibold p-4">{title}</h1>
          <p className="text-[#FFFFFF] text-lg sm:text-xl font-semibold p-4 font-poppins">
            Your trusted partner in mental wellness. Book your path to better emotional health and personal growth.
          </p>
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
              Take the first step toward better mental health. Schedule your session with our experienced counselors today.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:max-w-4xl p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Full Name</label>
                  <input
                    placeholder="Your first name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Email Address</label>
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Phone Number</label>
                  <input
                    placeholder="Enter Mobile Number"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>

                {/* Session Type */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Session Type</label>
                  <select
                    name="counselingType"
                    value={formData.counselingType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  >
                    <option value="">Select</option>
                    <option value="Individual">Individual</option>
                    <option value="Group">Group</option>
                    <option value="Family">Family</option>
                    <option value="Couple">Couple</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.counselingType && <p className="text-red-500 text-sm">{errors.counselingType}</p>}
                </div>

                {/* Available Date */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Available Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  />
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>

                {/* Available Time */}
                <div>
                  <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Available Time</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                  >
                    <option value="">Select</option>
                    <option value="09:00-10:00">09:00-10:00</option>
                    <option value="10:00-11:00">10:00-11:00</option>
                    <option value="11:00-12:00">11:00-12:00</option>
                    <option value="12:00-01:00">12:00-01:00</option>
                    <option value="01:00-02:00">01:00-02:00</option>
                    <option value="02:00-03:00">02:00-03:00</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                </div>
              </div>

              {/* Type of Counseling */}
              <div className="mb-6">
                <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Type of Counseling</label>
                <select
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  required
                  className="w-full p-3 text-lg border border-gray-300 rounded-3xl"
                >
                  <option value="">Select</option>
                  <option value="Mental Health">Mental Health</option>
                  <option value="Career Counseling">Career Counseling</option>
                  <option value="Educational Counseling">Educational Counseling</option>
                  <option value="Relationship Counseling">Relationship Counseling</option>
                  <option value="Other">Other</option>
                </select>
                {errors.field && <p className="text-red-500 text-sm">{errors.field}</p>}
              </div>

              {/* Additional Message */}
              <div className="mb-6">
                <label className="block text-lg sm:text-xl md:text-2xl text-black mb-2">Additional Message (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border border-gray-300 rounded-3xl min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="mb-6">
                <button type="submit" className="w-full p-3 text-white bg-[#EC744A] hover:bg-[#EC744A] rounded-3xl text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booksession;
