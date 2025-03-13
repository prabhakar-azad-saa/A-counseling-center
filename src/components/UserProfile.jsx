import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';

import userImg from "../img/userImg.png";
import Usermail from '../img/Usermail';
import Usercall from '../img/Usercall';
import Userlocation from '../img/Userlocation';
import Uservideo from '../img/Uservideo';

import Editlogo from "../img/Editlogo";
import Schedule from "../img/Schedule";
import Button from '../components/Button';




const UserProfile = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken"); 
    navigate("/login"); 
  };
 

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [profileImage, setProfileImage] = useState(userImg);
  


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
    setPreviewOpen(true);
  };

  
  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const base64Image = await getBase64(newFileList[0].originFileObj);
      setProfileImage(base64Image);  // Set the uploaded image as profile picture
    }
  };

  // Upload button design
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  // useEffect(() => {
   
  //   const storedUser = localStorage.getItem("userData");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  

  // const getUserInitials = () => {
  //   if (!user) return "";
  //   const { firstName = "", lastName = "" } = user;
  //   return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  // };

  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-10 mt-24 mx-5 lg:mx-24">
   
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 mb-7">
          <div className="flex flex-col lg:flex-row items-center mb-6">
          <Upload
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              showUploadList={false}
              beforeUpload={() => false} // Prevent auto upload
            >
              <img
                src={profileImage}
                alt="User"
                className="w-24 h-24 rounded-full border-2 border-gray-300 cursor-pointer"
              />
            </Upload>
            {/* <img src={userImg} alt="User" className="w-24 h-24 rounded-full mb-4 lg:mb-0"/> */}
            <div className='lg:ml-6'>
              <h1 className="text-2xl font-bold">Sarah Johnson</h1>
              <p className="text-lg text-black font-semibold">Member since October 2023</p>
            </div>
          </div>

          <div className="mb-4">
            <div className='flex mt-5'>
              <Usermail />
              <p className="text-base text-black font-semibold ml-3">sarah.johnson@email.com</p>
            </div>
            <div className='flex mt-5'>
              <Usercall />
              <p className="text-lg text-black font-semibold ml-3">(555) 123-4567</p>
            </div>
            <div className='flex mt-5'>
              <Userlocation />
              <p className="text-lg text-black font-semibold ml-3">San Francisco, CA</p>
            </div>
          </div>

          <div className='bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2'>
            <Editlogo/>
            <button className='font-semibold pl-2 text-white'>Edit Profile</button>
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row p-5 lg:p-10 mt-24 mx-5 lg:mx-24">
    
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 mb-7">
          <div className="flex flex-col lg:flex-row items-center mb-6">
           
            {user?.profileImage ? (
              <img src={user.profileImage} alt="User" className="w-24 h-24 rounded-full" />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-500 text-white text-3xl font-bold">
                {getUserInitials()}
              </div>
            )}
            <div className="lg:ml-6 text-center lg:text-left">
              <h1 className="text-2xl font-bold">{user?.firstName} {user?.lastName}</h1>
              <p className="text-lg text-gray-600">Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center mt-5">
              <Usermail />
              <p className="text-base text-gray-800 ml-3">{user?.email || "N/A"}</p>
            </div>
            <div className="flex items-center mt-5">
              <Usercall />
              <p className="text-lg text-gray-800 ml-3">{user?.phone || "N/A"}</p>
            </div>
            <div className="flex items-center mt-5">
              <Userlocation />
              <p className="text-lg text-gray-800 ml-3">{user?.location || "N/A"}</p>
            </div>
          </div>

          <div className="bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2 cursor-pointer" onClick={() => navigate("/edit-profile")}>
            <Editlogo />
            <span className="font-semibold text-white">Edit Profile</span>
          </div>
        </div> */}

        <div className="bg-white shadow-lg rounded-lg p-5 mb-10">
          <h1 className="text-3xl mt-5 font-semibold mb-4">Upcoming Appointment</h1>
          <div className="mb-4">
            <p className="text-lg text-black">Next session</p>
            <h2 className="text-xl font-semibold">Tuesday, March</h2>
            <p className="text-lg text-black">2:00pm</p>
            <p className="text-lg text-black">with Dr. Michael Brown</p>
          </div>
          <div className='bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2'>
            <Schedule/>
            <button className='font-semibold pl-2 text-sm sm:text-lg text-white'>Schedule New Session</button>
          </div>
         
        </div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      <div className="flex flex-col lg:w-2/3 mt-10 lg:ml-10">
        {/* Session History */}
        <div className="bg-white shadow-lg rounded-lg mb-6">
          <h1 className="text-2xl font-bold mb-4">Session History</h1>

          {/* First Session */}
          <div className="flex items-center mb-6">
            <Uservideo className="w-16 h-16 rounded-full mr-4"/>
            <div>
              <h2 className="text-lg font-semibold">Video Session with Dr. Brown</h2>
              <p className="text-sm text-gray-600">March</p>
              <p className="text-sm text-gray-600">Discussed progress on stress management techniques and sleep hygiene practices.</p>
            </div>
          </div>

          {/* Second Session */}
          <div className="flex items-center mb-6">
            <Uservideo className="w-16 h-16 rounded-full mr-4"/>
            <div>
              <h2 className="text-lg font-semibold">Chat Session with Dr. Brown</h2>
              <p className="text-sm text-gray-600">March</p>
              <p className="text-sm text-gray-600">Quick check-on anxiety management strategies and medication review.</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default UserProfile;





