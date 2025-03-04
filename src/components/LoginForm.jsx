


import React, { useState } from "react";
import { login } from "../action/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import loginimg from "../img/loginimg.png"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const location = useLocation();

  console.log("========148=====", location);

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate = () => {
    let errors = {};
    if (!formData.Email) {
      errors.emailError = "Email is required.";
    } else if (!emailRegex.test(formData.Email)) {
      errors.emailError = "Please enter a valid email address.";
    }

    if (!formData.Password) {
      errors.passwordError = "Password is required.";
    } else if (formData.Password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters.";
    }

    return errors;
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setEmailError(validationErrors.emailError);
      setPasswordError(validationErrors.passwordError);
      return;
    }

    setLoading(true);

    try {
      const data = await login(formData.Email, formData.Password);
      console.log("API response received:", data);

      if (data.message === "Login successfully" && data.users) {
        localStorage.setItem("userData", JSON.stringify(data.users));
        setLoading(false);

        const from = location.state?.from?.pathname || "/";
        console.log("Navigating to:", from);
        navigate(from, { replace: true });
      } else if (data.message === "Password not found") {
        setPasswordError("Password not found");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center bg-[#FCF8F4] px-4">
        <div className="text-center mb-6">
          <img
            src={loginimg}
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

          <h2 className="text-5xl font-bold mb-8">LOGIN</h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <form>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4e90d2] focus:border-transparent"
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {emailError}
              </p>
            )}

            <div className="mb-4">
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                required
                className="w-full p-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4e90d2] focus:border-transparent"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {passwordError}
              </p>
            )}
           
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-[#EC744A] text-white rounded-full text-lg cursor-pointer hover:bg-[#d36b3c] transition-all duration-300"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

            <div className="mt-6">
              <hr className="border-t-2 border-gray-300" />
              <p className="my-4 text-gray-600">Or continue with</p>
              <button
                disabled
                className="w-full p-3 bg-black text-white rounded-full text-lg hover:bg-[#c1351d] transition-all duration-300"
              >
                Google
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              By logging in, you agree to our{" "}
              <a href="#" className="text-[#EC744A] hover:underline">
                Terms and Conditions
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
