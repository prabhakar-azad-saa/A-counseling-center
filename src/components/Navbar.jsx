import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import frameImage4 from "../img/svgvieweroutput.png";
import Logomain from "../img/Logomain";

const Navbar = ({ style, from }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("userData");
  //   if (storedUser) {
  //     setUserData(JSON.parse(storedUser));
  //   }
  // }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
      setIsLoggedIn(!!parsedUser.userId);
    } else {
      setUserData(null);
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  console.log(userData, "============================");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isHome = location.pathname === "/";
  const LoginForm = location.pathname === "/login";
  const SignupForm = location.pathname === "/signup";

  console.log(isHome, LoginForm, SignupForm);
  return (
    <nav
      className="bg-cover px-4"
      style={{
        backgroundImage: !(isHome || LoginForm || SignupForm)
          ? `url(${frameImage4})`
          : "none",
        color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
      }}
    >
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <Logomain />

          <div
            className="text-2xl font-bold text-gray-900"
            style={{
              color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
            }}
          >
            A<sup>+</sup> Counseling Center
          </div>
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden  lg:flex text-lg space-x-8 font-poppins"
          style={{
            color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
          }}
        >
          <Link className="focus:font-bold" to="/">
            Home
          </Link>
          <Link className="focus:font-bold" to="/about">
            About
          </Link>
          <Link className="focus:font-bold" to="/services">
            Services
          </Link>
          <Link className="focus:font-bold" to="/session">
            Session
          </Link>
          <Link className="focus:font-bold" to="/blogs">
            Blogs
          </Link>
          <Link className="focus:font-bold" to="/contact">
            Contact Us
          </Link>
        </div>

        {/* "Login" or "Logout" Button */}
        {/* <div className="hidden lg:block">
          {isLoggedIn ? (
            <Button
              onClick={handleLogoutClick}
              className="bg-[#EC744A] text-white text-lg rounded-full px-8 py-3 w-auto h-12"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLoginClick}
              className="bg-[#EC744A] text-white text-lg rounded-full px-8 py-3 w-auto h-12"
            >
              Login
            </Button>
          )}
        </div> */}

        <div className="hidden lg:block">
          {userData ? (
            <Link className="font-bold mr-3" to="#">
              {userData?.username}
            </Link>
          ) : (
            <Button
              onClick={handleLoginClick}
              className="bg-[#EC744A] text-white text-lg rounded-full px-8 py-3 w-auto h-12"
            >
              Login
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden py-4">
          <button
            onClick={toggleMenu}
            className="text-gray-900 hover:text-orange-600 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (Toggle visibility on small screens) */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <div className="flex flex-col gap-2">
            {/* Mobile Menu Links */}
            <div
              className="bg-cover px-4"
              style={{
                backgroundImage: !(isHome || LoginForm || SignupForm)
                  ? `url(${frameImage4})`
                  : "none",
                color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
              }}
            >
              <Link
                to="/"
                className="block  border-b border-gray-200 px-2 py-3 focus:font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block  border-b border-gray-200 px-2 py-3 focus:font-bold"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block  border-b border-gray-200 px-2 py-3 focus:font-bold"
              >
                Services
              </Link>
              <Link
                to="/session"
                className="block border-b border-gray-200 px-2 py-3 focus:font-bold"
              >
                Session
              </Link>
              <Link
                className="block border-b border-gray-200 px-2 py-3 focus:font-bold"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className="block  border-b border-gray-200 px-2 py-3 focus:font-bold"
              >
                Contact Us
              </Link>
            </div>

            {/* Right-side login/logout */}
            {/* <div className="flex flex-col gap-4 mt-4">
              {isLoggedIn ? (
                <button
                  // onClick={handleLogoutClick}
                  className="w-full text-white bg-[#EC744A] px-6 py-3 rounded-lg transition duration-200"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="w-full text-white bg-[#EC744A] px-6 py-3 rounded-lg transition duration-200"
                >
                  Login
                </button>
              )}
            </div> */}

            <div className="flex flex-col gap-4 mt-4">
              {userData ? (
                <Link className="font-bold mr-3 ml-8" to="#">
                  {userData?.username}
                </Link>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="w-full text-white bg-[#EC744A] px-6 py-3 rounded-lg transition duration-200"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
