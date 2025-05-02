// import React, { useEffect, useState } from "react";
// import { PlusOutlined } from "@ant-design/icons";
// import { Image, Upload, Spin } from "antd";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineSaveAs } from "react-icons/md";
// import { GoPencil } from "react-icons/go";

// import userImg from "../img/userImg.png";
// import Usermail from "../img/Usermail";
// import Usercall from "../img/Usercall";
// import Userlocation from "../img/Userlocation";
// import Uservideo from "../img/Uservideo";

// import Editlogo from "../img/Editlogo";
// import Schedule from "../img/Schedule";
// import Button from "../components/Button";
// import Userchat from "../img/Userchat";

// import Loader from "./Loader";

// import {
//   upcomingAppointment,
//   getUserDetail,
//   sessionHistory,
//   putUpdatePatientDetails,
// } from "../action/Auth";


// const UserProfile = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     sessionStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   const handleclick = () => {
//     navigate("/booksession");
//   };
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");
//   const [fileList, setFileList] = useState([]);
//   const [profileImage, setProfileImage] = useState(userImg);
//   const [upcommingAppointment, setUpcommingAppointment] = useState([]);
//   const [user, setUser] = useState([]);
//   const [sessionhistory, setSessionhistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [address, setAddress] = useState("");
//   const [showInput, setShowInput] = useState(false);
//   const [savedAddress, setSavedAddress] = useState("Enter Address");
  

//   const handleSaveAddress = () => {
//     setSavedAddress(address);
//     setShowInput(false);
//     message.success("Address saved successfully!");
//   };

//   const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };

//   const handleChange = async ({ fileList: newFileList }) => {
//     setFileList(newFileList);

//     if (newFileList.length > 0 && newFileList[0].originFileObj) {
//       const base64Image = await getBase64(newFileList[0].originFileObj);
//       setProfileImage(base64Image);
//     }
//   };

//   const uploadButton = (
//     <button
//       style={{
//         border: 0,
//         background: "none",
//       }}
//       type="button"
//     >
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </button>
//   );

//   useEffect(() => {
//     const storedUser = localStorage.getItem("userData");
//     const parsedUser = JSON.parse(storedUser);
//     const upcomingAppointmentData = upcomingAppointment(parsedUser?.userId);
//     upcomingAppointmentData
//       .then((res) => {
//         setUpcommingAppointment(res);
        
//       })
//       .catch((err) => {
//         console.log("=====154===", err);
//       });

//     //Userdetail
//     getUserDetail(parsedUser?.userId)
//       .then((res) => {
//         // console.log('===000===',res)
//         setUser(res?.data);
//       })
//       .catch((err) => {
//         console.log("====getUserDetailes Err====", err);
//       });

//     //sessionHistory
//     sessionHistory(parsedUser?.userId)
//       .then((res) => {
//         setSessionhistory(res?.data);
//       })
//       .catch((err) => {
//         console.log("====sessionHistory Err====", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//    <>
//     <Loader isLoading={loading} />
//       <div
//         className="flex flex-col lg:flex-row w-full  gap-6 px-4 sm:px-6 md:px-8   max-w-[2000px] mx-auto"
//         style={{ backgroundColor: "#FCF8F4" }}
//       >
//         {/* Left Side - Profile and Appointment */}
//         <div className="w-full lg:w-1/2 xl:w-1/3 p-4 sm:p-6 lg:p-10 mt-10 ">
//           <div
//             className="flex flex-col bg-white rounded-lg p-5 mb-8"
//             style={{ boxShadow: `rgba(99, 99, 99, 0.1) 0px 2px 8px 0px` }}
//           >
//             {/* Profile Info */}
//             <div className="flex flex-col lg:flex-row items-center mb-6">
//               <Upload
//                 listType="picture-circle"
//                 fileList={fileList}
//                 onPreview={handlePreview}
//                 onChange={handleChange}
//                 showUploadList={false}
//                 beforeUpload={() => false}
//               >
//                 <img
//                   src={profileImage}
//                   alt="User"
//                   className="w-24 h-24 rounded-full border-2 border-gray-300 cursor-pointer"
//                 />
//               </Upload>

//               <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
//                 <h1 className="text-2xl font-bold">{user?.username}</h1>
//                 <p className="text-lg text-black font-semibold">
//                   Member since{" "}
//                   {new Date(user?.createdAt).toLocaleString("en-US", {
//                     year: "numeric",
//                     month: "long",
//                   })}
//                 </p>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-5">
//               {/* Email */}
//               <div className="flex flex-col sm:flex-row items-start sm:items-center">
//                 <Usermail />
//                 <p className="text-base text-black font-semibold sm:ml-3 mt-2 sm:mt-0">
//                   {user?.email}
//                 </p>
//               </div>

//               {/* Contact */}
//               <div className="flex items-start sm:items-center">
//                 <Usercall />
//                 <p className="text-base text-black font-semibold ml-3">
//                   {user?.contactNumber}
//                 </p>
//               </div>

//               {/* Address */}
//               <div className="flex items-start sm:items-center">
//                 <Userlocation />
//                 {showInput ? (
//                   <div className="ml-3 flex flex-col sm:flex-row gap-3 mt-2 sm:mt-0 w-full">
//                     <input
//                       type="text"
//                       placeholder="Enter address"
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
//                     />
//                     <button
//                       type="button"
//                       className="bg-[#ed754a] text-white px-3 py-2 rounded hover:bg-green-600 transition"
//                       onClick={handleSaveAddress}
//                       title="Save Address"
//                     >
//                       <MdOutlineSaveAs size={20} />
//                     </button>
//                   </div>
//                 ) : (
//                   <>
//                     <p className="text-base text-black font-semibold ml-3">
//                       {savedAddress}
//                     </p>
//                     <button
//                       type="button"
//                       className="ml-3 text-sm text-gray-600 hover:text-black transition mt-2 sm:mt-0"
//                       onClick={() => setShowInput(true)}
//                       title="Edit Address"
//                     >
//                       <GoPencil size={18} />
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>

//             <Button onClick={handleLogout} className="text-sm mt-6">
//               Logout
//             </Button>
//           </div>

//           {/* Upcoming Appointment Section */}
//           <div className="bg-white shadow-lg rounded-lg p-5 mb-8">
//             <h1 className="text-2xl font-semibold mb-4">
//               Upcoming Appointment
//             </h1>
         
//             {upcommingAppointment?.length > 0 ? (
//               upcommingAppointment?.map((item, index) => (
//                 <div key={index} className="mb-4 flex items-start gap-4">
//                   <div className="border-l-4 h-24 p-2 border-black" />
//                   <div>
//                     <p className="text-lg text-black">Next session</p>
//                     <h2 className="text-xl font-semibold">
//                       {item?.sessionDate}
//                     </h2>
//                     <p className="text-lg text-black">
//                       {item?.sessionSlotTime}
//                     </p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No upcoming appointments found.</p>
//             )}

//             <div className="bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2 mt-4">
//               <Schedule />
//               <button onClick={handleclick} className="font-semibold text-sm sm:text-lg text-white">
//                 Schedule New Session
//               </button>
//             </div>
//           </div>
//           {/* <ZoomMeeting/> */}
//         </div>

//         {/* Right Side - Session History */}
//         <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-10 mt-10 ">
//           <div className="bg-white shadow-lg rounded-lg mb-6 p-5">
//             <h1 className="text-2xl font-bold mb-4">Session History</h1>

//             <div className="flex flex-col space-y-4">
//               {sessionhistory?.length > 0 ? (
//                 sessionhistory?.map((chat, index) => (
//                   <div key={index} className="flex p-3 items-start">
//                     <Uservideo className="w-16 h-16 rounded-full mr-4" />
//                     <div>
//                       <h2 className="text-lg font-semibold">
//                         Video Session with {chat?.doctorName}
//                       </h2>
//                       <p className="text-sm text-gray-600">
//                         {chat?.sessionDate}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         {chat?.sessionDescription}
//                       </p>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No session history found.</p>
//               )}
//             </div>
//           </div>
        
//           {/* <FeedbackForm/> */}
      
//         </div>
       
//       </div>
//    </>
    
//   );
// };

// export default UserProfile;



import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, message } from "antd";
import { useNavigate } from "react-router-dom";
import { MdOutlineSaveAs } from "react-icons/md";
import { GoPencil } from "react-icons/go";

import userImg from "../img/userImg.png";
import Usermail from "../img/Usermail";
import Usercall from "../img/Usercall";
import Userlocation from "../img/Userlocation";
import Uservideo from "../img/Uservideo";
import Editlogo from "../img/Editlogo";
import Schedule from "../img/Schedule";
import Button from "../components/Button";
import Userchat from "../img/Userchat";
import Loader from "./Loader";
import PhotoAddressForm from "./PhotoAddressForm ";


import {
  upcomingAppointment,
  getUserDetail,
  sessionHistory,
} from "../action/Auth";

const UserProfile = () => {
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [profileImage, setProfileImage] = useState(userImg);
  const [upcommingAppointment, setUpcommingAppointment] = useState([]);
  const [user, setUser] = useState([]);
  const [sessionhistory, setSessionhistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedAddress, setSavedAddress] = useState("Enter Address");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleclick = () => {
    navigate("/booksession");
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
  };

  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const base64Image = await getBase64(newFileList[0].originFileObj);
      setProfileImage(base64Image);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const parsedUser = JSON.parse(storedUser);

    // Fetch upcoming appointments
    upcomingAppointment(parsedUser?.userId)
      .then((res) => setUpcommingAppointment(res))
      .catch((err) => console.error("Appointments Error:", err));

    // Fetch user details
    getUserDetail(parsedUser?.userId)
      .then((res) => {
        setUser(res?.data);
        if (res?.data?.address) {
          setSavedAddress(res.data.address);
        }
        if (res?.data?.profilePhoto) {
          setProfileImage(res.data.profilePhoto);
        }
      })
      .catch((err) => console.error("User Detail Error:", err));

    // Fetch session history
    sessionHistory(parsedUser?.userId)
      .then((res) => setSessionhistory(res?.data))
      .catch((err) => console.error("Session History Error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      <div className="flex flex-col lg:flex-row w-full gap-6 px-4 sm:px-6 md:px-8 max-w-[2000px] mx-auto" style={{ backgroundColor: "#FCF8F4" }}>
        {/* Left Side */}
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4 sm:p-6 lg:p-10 mt-10">
          <div className="flex flex-col bg-white rounded-lg p-5 mb-8 shadow-md">
            {/* Profile Info */}
            <div className="flex flex-col lg:flex-row items-center mb-6">
            <img
  src={profileImage}
  alt="User"
  onClick={() => setIsModalOpen(true)}
  className="w-24 h-24 rounded-full border-2 border-gray-300 cursor-pointer"
  title="Click to update profile photo & address"
/>

              <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
                <h1 className="text-2xl font-bold">{user?.username}</h1>
                <p className="text-lg text-black font-semibold">
                  Member since{" "}
                  {new Date(user?.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center">
                <Usermail />
                <p className="text-base text-black font-semibold ml-3">{user?.email}</p>
              </div>
              <div className="flex items-center">
                <Usercall />
                <p className="text-base text-black font-semibold ml-3">{user?.contactNumber}</p>
              </div>
              <div className="flex items-center">
                <Userlocation />
                <p className="text-base text-black font-semibold ml-3">{savedAddress}</p>
                <button
                  type="button"
                  className="ml-3 text-sm text-gray-600 hover:text-black transition"
                  onClick={() => setIsModalOpen(true)}
                  title="Edit Address"
                >
                  <GoPencil size={18} />
                </button>
              </div>
            </div>

            <Button onClick={handleLogout} className="text-sm mt-6">
              Logout
            </Button>
          </div>

          {/* Appointment */}
          <div className="bg-white shadow-lg rounded-lg p-5 mb-8">
            <h1 className="text-2xl font-semibold mb-4">Upcoming Appointment</h1>
            {upcommingAppointment?.length > 0 ? (
              upcommingAppointment.map((item, index) => (
                <div key={index} className="mb-4 flex items-start gap-4">
                  <div className="border-l-4 h-24 p-2 border-black" />
                  <div>
                    <p className="text-lg text-black">Next session</p>
                    <h2 className="text-xl font-semibold">{item?.sessionDate}</h2>
                    <p className="text-lg text-black">{item?.sessionSlotTime}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No upcoming appointments found.</p>
            )}
            <div className="bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2 mt-4">
              <Schedule />
              <button onClick={handleclick} className="font-semibold text-sm sm:text-lg text-white">
                Schedule New Session
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-10 mt-10">
          <div className="bg-white shadow-lg rounded-lg mb-6 p-5">
            <h1 className="text-2xl font-bold mb-4">Session History</h1>
            <div className="flex flex-col space-y-4">
              {sessionhistory?.length > 0 ? (
                sessionhistory.map((chat, index) => (
                  <div key={index} className="flex p-3 items-start">
                    <Uservideo className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h2 className="text-lg font-semibold">
                        Video Session with {chat?.doctorName}
                      </h2>
                      <p className="text-sm text-gray-600">{chat?.sessionDate}</p>
                      <p className="text-sm text-gray-600">{chat?.sessionDescription}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No session history found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <PhotoAddressForm
              currentAddress={savedAddress}
              currentPhoto={profileImage}
              onClose={() => setIsModalOpen(false)}
              onSave={(newPhoto, newAddress) => {
                setProfileImage(newPhoto);
                setSavedAddress(newAddress);
                setIsModalOpen(false);
                message.success("Profile updated successfully!");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;

