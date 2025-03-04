
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../action/Auth";
import login2 from "../img/login2.png"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contactNumber: "",
    gender: "",
    role: "Patient",
    firstName: "",
    lastName: "",
    address: "test",
    dateOfBirth: "2025-02-28",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormData({ ...formData, contactNumber: value });
  };

  // Validation function
  const validate = () => {
    let formErrors = {};

    // Username validation
    if (!formData.username) formErrors.username = "Username is required.";

    // Email validation
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid.";
    }

    // Contact Number validation
    if (!formData.contactNumber) {
      formErrors.contactNumber = "Contact Number is required.";
    } else if (formData.contactNumber.length < 10) {
      formErrors.contactNumber = "Contact Number must be at least 10 digits.";
    }

    // Gender validation
    if (!formData.gender) formErrors.gender = "Gender is required.";

    // Password validation
    if (!formData.password) {
      formErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long.";
    }

   

    return formErrors;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const data = await register(formData);
      console.log("Signup successful:", data);

      if (data?.message?.includes("Email Id already exist")) {
        throw new Error("Email already exists. Please use another email.");
      }

      navigate("/login");
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: error.message || "Something went wrong. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center bg-[#FCF8F4] px-4">
        <div className="text-center mb-6">
          <img
            src={login2}
            alt="Login Illustration"
            className="mb-4"
          />
        </div>
        <div className="w-full max-w-xl rounded-xl">
          <div className="mt-4 py-10">
            <a
              onClick={() => navigate("/login")}
              className="text-black text-xl mr-20 font-semibold hover:underline"
            >
              Login
            </a>
            <a
             onClick={() => navigate("/signup")}
              className="text-black text-xl font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>

          <h2 className="text-5xl font-bold mb-8">SIGN UP</h2>

          {errors.general && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {errors.general}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC744A] focus:border-transparent"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-2">{errors.username}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full p-3 text-[18px] border border-gray-300 rounded-full focus:ring-2 focus:ring-[#4e90d2] focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleContactNumberChange}
                placeholder="Mobile Number"
                required
                maxLength={10}
                className="w-full p-3 text-[18px] border border-gray-300 rounded-full focus:ring-2 focus:ring-[#4e90d2] focus:outline-none"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.contactNumber}
                </p>
              )}
            </div>

            <div className="mb-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={`w-full p-3 text-[18px] border border-gray-300 rounded-full focus:ring-2 focus:ring-[#4e90d2] focus:outline-none 
                  ${formData.gender ? "text-black" : "text-gray-400"}`}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-2">{errors.gender}</p>
              )}
            </div>

            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create Password"
                required
                className="w-full p-3 text-[18px] border border-gray-300 rounded-full focus:ring-2 focus:ring-[#4e90d2] focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>

         

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-[#EC744A] text-white rounded-full text-lg cursor-pointer hover:bg-[#d36b3c] transition-all duration-300"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
