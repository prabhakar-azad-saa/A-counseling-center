import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Spin } from "antd";
import { useNavigate } from "react-router-dom";

import userImg from "../img/userImg.png";
import Usermail from "../img/Usermail";
import Usercall from "../img/Usercall";
import Userlocation from "../img/Userlocation";
import Uservideo from "../img/Uservideo";

import Editlogo from "../img/Editlogo";
import Schedule from "../img/Schedule";
import Button from "../components/Button";
import Userchat from "../img/Userchat";
import {
  upcomingAppointment,
  getUserDetail,
  sessionHistory,
} from "../action/Auth";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [profileImage, setProfileImage] = useState(userImg);
  const [upcommingAppointment, setUpcommingAppointment] = useState([]);
  const [user, setUser] = useState([]);
  const [sessionhistory, setSessionhistory] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setProfileImage(base64Image);
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
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

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const parsedUser = JSON.parse(storedUser);
    const upcomingAppointmentData = upcomingAppointment(parsedUser.userId);
    upcomingAppointmentData
      .then((res) => {
        setUpcommingAppointment(res);
      })
      .catch((err) => {
        console.log("=====154===", err);
      });

    //Userdetail
    getUserDetail(parsedUser.userId)
      .then((res) => {
        setUser(res?.data);
      })
      .catch((err) => {
        console.log("====getUserDetailes Err====", err);
      });

    //sessionHistory
    sessionHistory(parsedUser.userId)
      .then((res) => {
        setSessionhistory(res?.data);
      })
      .catch((err) => {
        console.log("====sessionHistory Err====", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Spin spinning={loading}>
      <div
        className="flex flex-col lg:flex-row   max-w-[1500px] mx-auto"
        style={{ backgroundColor: "#e3e8e9" }}
      >
        <div className="w-full lg:w-1/3 mb-10 p-5 lg:p-10 mt-24 mx-5 lg:mx-24 lg:mb-0">
          <div
            className="flex flex-col bg-white rounded-lg p-5 mb-7"
            style={{ boxShadow: `rgba(99, 99, 99, 0.1) 0px 2px 8px 0px` }}
          >
            <div className="flex flex-col lg:flex-row items-center mb-6">
              <Upload
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                showUploadList={false}
                beforeUpload={() => false}
              >
                <img
                  src={profileImage}
                  alt="User"
                  className="w-24 h-24 rounded-full border-2 border-gray-300 cursor-pointer"
                />
              </Upload>
              {/* <img src={userImg} alt="User" className="w-24 h-24 rounded-full mb-4 lg:mb-0"/> */}
              <div className="lg:ml-6">
                <h1 className="text-2xl font-bold">{user.username}</h1>
                <p className="text-lg text-black font-semibold">
                  Member since{" "}
                  {new Date(user.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex mt-5">
                <Usermail />
                <p className="text-base text-black font-semibold ml-3">
                  {user.email}
                </p>
              </div>
              <div className="flex mt-5">
                <Usercall />
                <p className="text-lg text-black font-semibold ml-3">
                  (555) 123-4567
                </p>
              </div>
              <div className="flex mt-5">
                <Userlocation />
                <p className="text-lg text-black font-semibold ml-3">
                  San Francisco, CA
                </p>
              </div>
            </div>
            <Button onClick={handleLogout} className="text-sm">
              Logout
            </Button>

            {/* <div className='bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2'>
         <Editlogo/>
         <button className='font-semibold pl-2 text-white'>Edit Profile</button>
       </div> */}
          </div>

          <div className="bg-white shadow-lg rounded-lg p-5 mb-10">
            <h1 className="text-3xl mt-5 font-semibold mb-4">
              Upcoming Appointment
            </h1>

            {upcommingAppointment?.map((item) => (
              <>
                <div className="mb-4 bor flex flex-row">
                  <div className="border-l-4 h-32 p-5 border-black"></div>

                  <div>
                    <p className="text-lg text-black">Next session</p>
                    <h2 className="text-xl font-semibold">
                      {item.sessionDate}
                    </h2>
                    <p className="text-lg text-black">{item.sessionSlotTime}</p>
                  </div>
                  {/* <p className="text-lg text-black">with Dr. Michael Brown</p> */}
                </div>
              </>
            ))}

            <div className="bg-[#EC744A] flex justify-center items-center p-4 rounded-3xl space-x-2">
              <Schedule />
              <button className="font-semibold pl-2 text-sm sm:text-lg text-white">
                Schedule New Session
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-2/3  p-5 lg:p-10 mt-24 mx-5 lg:mx-20 lg:ml-8">
          {/* Session History */}
          <div className="bg-white shadow-lg rounded-lg mb-6 p-5">
            <h1 className="text-2xl font-bold mb-4">Session History</h1>

            {/* First Session */}
            <div className="flex flex-col  mb-6 p-5">
              {/* <Uservideo className="w-16 h-16 rounded-full mr-4"/> */}

              {sessionhistory?.map((chat) => (
                <>
                  <div className="flex p-3">
                    <Uservideo className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h2 className="text-lg font-semibold">
                        Video Session with {chat.doctorName}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {chat.sessionDate}
                      </p>
                      <p className="text-sm text-gray-600">
                        {chat.sessionDescription}
                      </p>
                    </div>
                  </div>
                </>
              ))}

              {/* <Uservideo className="w-16 h-16 rounded-full mr-4"/>
         <div>
           <h2 className="text-lg font-semibold">Video Session with Dr. Brown</h2>
           <p className="text-sm text-gray-600">March</p>
           <p className="text-sm text-gray-600">Discussed progress on stress management techniques and sleep hygiene practices.</p>
         </div> */}
            </div>

            {/* Second Session */}
            {/* <div className="flex items-center mb-6 p-5">
         <Userchat className="w-16 h-16 rounded-full mr-4"/>
         <div>
           <h2 className="text-lg font-semibold">Chat Session with Dr. Brown</h2>
           <p className="text-sm text-gray-600">March</p>
           <p className="text-sm text-gray-600">Quick check-on anxiety management strategies and medication review.</p>
         </div>
       </div> */}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default UserProfile;
