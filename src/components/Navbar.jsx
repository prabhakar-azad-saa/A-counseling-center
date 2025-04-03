// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Button from "./Button";
// import frameImage4 from "../img/svgvieweroutput.png";
// // import Logomain from "../img/Logomain";
// import Logolotas from "../img/Logolotas";

// const Navbar = ({ style, from }) => {
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const location = useLocation();
//   const [selected, setSelected] = useState(location.pathname); // Set default selected item as current path

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const storedUser = localStorage.getItem("userData");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUserData(parsedUser);
//       setIsLoggedIn(!!parsedUser.userId);
//     } else {
//       setUserData(null);
//       setIsLoggedIn(false);
//     }
// setSelected(location.pathname);

//   }, [location.pathname]);

//   const handleUserClick = () => {
//     navigate("/userprofile");
   
//   }

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   // const handleAdminClick = () => {
//   //   navigate("/dashboardtable");
//   // };

//   // const handleProfileClick = () =>{
//   //   navigate('/userProfile')
//   // }

//   const handleLogoutClick = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userEmail");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const isHome = location.pathname === "/";
//   const LoginForm = location.pathname === "/login";
//   const SignupForm = location.pathname === "/signup";
  

//   return (
//     <nav
//       className="bg-cover px-4"
//       style={{
//         backgroundImage: !(isHome || LoginForm || SignupForm)
//           ? `url(${frameImage4})`
//           : "none",
//         color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
//       }}
//     >
//       <div className="flex items-center justify-between py-4">
//         <div className="flex items-center space-x-3">
//           {/* <Logomain /> */}
//           <Logolotas className='w-24 h-24'/>

//           <div
//             className="text-2xl font-bold text-black"
//             style={{
//               color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
//             }}
//           >
//             A<sup>+</sup> Counseling Center
//           </div>
//         </div>

//         <div
//           className="hidden lg:flex text-lg space-x-8 font-poppins"
//           style={{
//             color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
//           }}
//         >
//           {["/", "/about", "/services", "/session", "/blogs", "/contactUs"].map((path, index) => {
//             const label = path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2);
//             return (
//               <Link
//                 key={index}
//                 to={path}
//                 onClick={() => setSelected(path)} 
//                 className={`focus:outline-none ${selected === path ? "font-bold" : ""}`}
//               >
//                 {label}
//               </Link>
//             );
//           })}
//         </div>
//         {/* <button onClick={handleAdminClick} className="hidden font-poppins lg:block">Dashboard</button>  */}
//        {/* <button onClick={handleProfileClick} className="font-poppins">Profile</button> */}

//         <div className="hidden lg:block" >
//           {userData ? (
//             <a className="font-bold mr-3 cursor-pointer" onClick={handleUserClick} >
//               {userData?.username} 
//             </a>
//           ) : (
//             <Button
//               onClick={handleLoginClick}
//               className="bg-[#EC744A] text-white text-lg rounded-full px-8 py-3 w-auto h-12"
//             >
//               Login
//             </Button>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden py-4">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-900 hover:text-orange-600 focus:outline-none"
//           >
//             {/* Hamburger Icon */}
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (Toggle visibility on small screens) */}
//       {isOpen && (
//         <div className="lg:hidden mt-4 space-y-2">
//           <div className="flex flex-col gap-2">
//             {/* Mobile Menu Links */}
//             <div
//               className="bg-cover px-4"
//               style={{
//                 backgroundImage: !(isHome || LoginForm || SignupForm)
//                   ? `url(${frameImage4})`
//                   : "none",
//                 color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
//               }}
//             >
//               {["/", "/about", "/services", "/session", "/blogs", "/contact Us"].map((path, index) => {
//                 const label = path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2);
//                 return (
//                   <Link
//                     key={index}
//                     to={path}
//                     onClick={() => {
//                       setSelected(path); // Update selected path on click
//                       setIsOpen(false); // Close the menu on item click
//                     }}
//                     className={`block border-b border-gray-200 px-2 py-3 focus:outline-none ${selected === path ? "font-bold" : ""}`}
//                   >
//                     {label}
//                   </Link>
//                 );
//               })}
//             </div>
            

//             <div className="flex flex-col gap-4 mt-4">
//               {userData ? (
//                 <Link className="font-bold mr-3 ml-8" to="#">
//                   {userData?.username}
//                 </Link>
//               ) : (
//                 <button
//                   onClick={handleLoginClick}
//                   className="w-full text-white bg-[#EC744A] px-6 py-3 rounded-lg transition duration-200"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import frameImage4 from "../img/svgvieweroutput.png";
import Logolotas from "../img/Logolotas";

const Navbar = ({ style, from }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selected, setSelected] = useState(location.pathname);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("====user data ===== ", parsedUser)
      setUserData(parsedUser);
      setIsLoggedIn(!!parsedUser.userId);
      setIsAdmin(parsedUser.role === "admin");
    } else {
      setUserData(null);
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
    setSelected(location.pathname);
  }, [location.pathname]);

  const handleUserClick = () => navigate("/userprofile");
  const handleLoginClick = () => navigate("/login");
  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isHome = location.pathname === "/";
  const LoginForm = location.pathname === "/login";
  const SignupForm = location.pathname === "/signup";

  return (
    <nav
      className="bg-cover px-4 max-w-[1500px] mx-auto"
      style={{
        backgroundImage: !(isHome || LoginForm || SignupForm) ? `url(${frameImage4})` : "none",
        color: !(isHome || LoginForm || SignupForm) ? "white" : "black",
      }}
    >
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <Logolotas className="w-24 h-24" />
          <div className="text-2xl font-bold" style={{ color: !(isHome || LoginForm || SignupForm) ? "white" : "black" }}>
            A<sup>+</sup> Counseling Center
          </div>
        </div>

        <div className="hidden lg:flex text-lg space-x-8 font-poppins">
          <Link to="/" className={selected === "/" ? "font-bold" : ""} onClick={() => setSelected("/")}>Home</Link>
          <Link to="/about" className={selected === "/about" ? "font-bold" : ""} onClick={() => setSelected("/about")}>About</Link>
          <Link to="/services" className={selected === "/services" ? "font-bold" : ""} onClick={() => setSelected("/services")}>Services</Link>
          <Link to="/session" className={selected === "/session" ? "font-bold" : ""} onClick={() => setSelected("/session")}>Session</Link>
          <Link to="/blogs" className={selected === "/blogs" ? "font-bold" : ""} onClick={() => setSelected("/blogs")}>Blogs</Link>
          <Link to="/contactUs" className={selected === "/contactUs" ? "font-bold" : ""} onClick={() => setSelected("/contactUs")}>Contact Us</Link>
          {userData?.role === "Admin" && <Link to="/dashboardtable" className={selected === "/dashboardtable" ? "font-bold" : ""} onClick={() => setSelected("/dashboardtable")}>Dashboard</Link>}
        </div>

        <div className="hidden lg:block">
          {userData ? (
            <a className="font-bold mr-3 cursor-pointer" onClick={handleUserClick}>{userData?.username}</a>
          ) : (
            <Button onClick={handleLoginClick} className="bg-[#EC744A] text-white text-lg rounded-full px-8 py-3 w-auto h-12">Login</Button>
          )}
        </div>

        <div className="lg:hidden py-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-orange-600 focus:outline-none">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <div className="flex flex-col gap-2">
          <Link to="/" className={selected === "/" ? "font-bold" : ""} onClick={() => setSelected("/")}>Home</Link>
          <Link to="/about" className={selected === "/about" ? "font-bold" : ""} onClick={() => setSelected("/about")}>About</Link>
          <Link to="/services" className={selected === "/services" ? "font-bold" : ""} onClick={() => setSelected("/services")}>Services</Link>
          <Link to="/session" className={selected === "/session" ? "font-bold" : ""} onClick={() => setSelected("/session")}>Session</Link>
          <Link to="/blogs" className={selected === "/blogs" ? "font-bold" : ""} onClick={() => setSelected("/blogs")}>Blogs</Link>
          <Link to="/contactUs" className={selected === "/contactUs" ? "font-bold" : ""} onClick={() => setSelected("/contactUs")}>Contact Us</Link>
          {userData?.role === "Admin" && <Link to="/dashboardtable" className={selected === "/dashboardtable" ? "font-bold" : ""} onClick={() => setSelected("/dashboardtable")}>Dashboard</Link>}
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {userData ? (
              <Link className="font-bold mr-3 ml-8" to="#">{userData?.username}</Link>
            ) : (
              <button onClick={handleLoginClick} className="w-full text-white bg-[#EC744A] px-6 py-3 rounded-lg transition duration-200">Login</button>
            )}
          </div>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;



