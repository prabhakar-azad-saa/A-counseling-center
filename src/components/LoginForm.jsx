// import React, { useState } from 'react';
// import Button from './Button';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = ()=> {
//   const [formData, setFormData] = useState({
//     Email: '',
//     Password: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Form submit started");
//     // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!formData.Email || !formData.Password) {
//       console.log("Missing email or password");
//       setError('Both fields are required!');
//       return;
//     }

//     console.log("Email and Password are provided");
//     setError('');
//     setLoading(true);

//     try {
//       console.log("Making API call...");

//       const response = await fetch(`http://192.168.1.180/Hospital/api/hospital/Login?Email=${formData.Email}&Password=${formData.Password}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//       console.log("eeee",response)

//       console.log("API response received");
//       navigate('/');
//       localStorage.setItem('userData', JSON.stringify(user));

//     } catch (error) {
//       console.error("API call failed:", error);
//       setError('Network error. Please try again later.');
//     } finally {
//       console.log("API call finished");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-center items-center bg-[#FCF8F4] px-4">
//       <div className="text-center mb-6">
//         <img src="src/assets/login2.png" alt="Login Illustration" className="mb-4" />
//       </div>
//       <div className="w-full max-w-xl rounded-xl">
//         <div className="mt-4 py-10">

//           <a href="/login" className="text-black text-xl font-semibold hover:underline mr-20">
//             Login
//           </a>
//           <a href="/signup" className="text-black text-xl font-semibold hover:underline ">
//             Sign Up
//           </a>
//         </div>

//         <h2 className="text-5xl font-bold mb-8">LOG IN</h2>
//         {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

//         <form>
//           <div className="mb-4">
//             <label htmlFor="Email" className="block text-lg font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               id="Email"
//               name="Email"
//               value={formData.Email}
//               onChange={handleChange}
//               placeholder="Enter Your Email"
//               required
//               className="w-full p-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC744A] focus:border-transparent"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="Password" className="block text-lg font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               id="Password"
//               name="Password"
//               value={formData.Password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               required
//               className="w-full p-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC744A] focus:border-transparent"
//             />
//           </div>

//           <div className="mb-6">
//             <Button className="bg-[#EC744A] text-white py-3 px-10 rounded-full" onClick={handleSubmit}>
//               {loading ? 'Logging in...' : 'Login'}
//             </Button>
//           </div>

//           <div className="mt-6">
//             <hr className="border-t-2 border-gray-300" />
//             <p className="my-4 text-gray-600">Or continue with</p>
//             <button className="w-full p-3 bg-black text-white rounded-full text-lg hover:bg-[#c1351d] transition-all duration-300">
//               Login with Google
//             </button>
//           </div>

//           <p className="mt-4 text-sm text-gray-600">
//             By logging in, you agree to our <a href="#" className="text-[#EC744A] hover:underline">Terms and Conditions</a>.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import { login } from "../action/Auth";
import { useLocation, useNavigate } from "react-router-dom";

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setError('');
  //   setEmailError('');
  //   setPasswordError('');

  //   const validationErrors = validate();
  //   setEmailError(validationErrors.emailError);
  //   setPasswordError(validationErrors.passwordError);

  //   if (Object.keys(validationErrors).length > 0) {
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     console.log('Making API call...');

  //     const response = await fetch(
  //       `http://192.168.1.180/Hospital/api/hospital/Login?Email=${formData.Email}&Password=${formData.Password}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       const textResponse = await response.text();

  //       try {
  //         const data = JSON.parse(textResponse);
  //         console.log('API response received:', data);

  //         if (data.success) {
  //           navigate('/');
  //           localStorage.setItem('userData', JSON.stringify(data.user));
  //         } else {
  //           if (data.message === 'Invalid email or password.') {
  //             setPasswordError('Invalid password');
  //           } else if (data.message === 'Invalid email address.') {
  //             setEmailError('Invalid email address');
  //           } else {
  //             setError('Invalid email address. Please try again.');
  //           }
  //         }
  //       } catch (jsonError) {
  //         console.log('Response is plain text:', textResponse);
  //         if (textResponse.includes('Login successfully')) {
  //           navigate('/');
  //           localStorage.setItem('userData', textResponse);
  //         } else {
  //           setError('Invalid password.');
  //         }
  //       }
  //     } else {
  //       setError('Login failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('API call failed:', error);
  //     setError('Network error. Please try again later.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setEmailError("");
  //   setPasswordError("");

  //   const validationErrors = validate();
  //   setEmailError(validationErrors.emailError);
  //   setPasswordError(validationErrors.passwordError);

  //   if (Object.keys(validationErrors).length > 0) return;

  //   setLoading(true);

  //   try {
  //     const data = await login(formData.Email, formData.Password);
  //     console.log("API response received:", data);

  //     if (data.message === "Login successfully" && data.users) {
  //       localStorage.setItem("userData", JSON.stringify(data.users));
  //       // setLoading(false);
  //       navigate("/");
  //     } else if (data.message === "Password not found") {
  //       setPasswordError("Password not found");
  //     } else {
  //       setError("Invalid credentials. Please try again.");
  //     }
  //   } catch (error) {
  //     // setError("Network error. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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

  console.log("===============317=====================");

  return (
    <div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center bg-[#FCF8F4] px-4">
        <div className="text-center mb-6">
          <img
            src="src/assets/login2.png"
            alt="Login Illustration"
            className="mb-4"
          />
        </div>
        <div className="w-full max-w-xl rounded-xl">
          <div className="mt-4 py-10">
            <a
              href="/login"
              className="text-black text-xl mr-20 font-semibold hover:underline"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-black text-xl font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>

          <h2 className="text-5xl font-bold mb-8">LOGIN</h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          {emailError && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {emailError}
            </p>
          )}
          {passwordError && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {passwordError}
            </p>
          )}

          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-[#EC744A] text-white rounded-full text-lg cursor-pointer hover:bg-[#d36b3c] transition-all duration-300"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

            <div className="mt-6">
              <hr className="border-t-2 border-gray-300" />
              <p className="my-4 text-gray-600">Or continue with</p>
              <button className="w-full p-3 bg-black text-white rounded-full text-lg hover:bg-[#c1351d] transition-all duration-300">
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
