import React from 'react';
import Button from './Button';
import userImg from "../img/userImg.png";
import Usermail from '../img/Usermail';
import Usercall from '../img/Usercall';
import Userlocation from '../img/Userlocation';
import Uservideo from '../img/Uservideo';


const UserProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10 p-5 mt-24 mx-24">
      {/* Left Section - User Information */}
     <div>
     <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 mb-7 ">
        {/* Profile Image and User Details */}
        <div className="flex flex-row items-center mb-6">
          <img src={userImg} alt="User" className="w-24 h-24 rounded-full mb-4"/>
         <div className='ml-6'>
         <h1 className="text-2xl font-bold">Sarah Johnson</h1>
         <p className="text-lg text-black font-semibold">Member since October 2023</p>
         </div>
        </div>

        <div className="mb-4">
         <div className='flex mt-5'>
          <Usermail/>
         <p className="text-base  text-black font-semibold ml-3">sarah.johnson@email.com</p>
         </div>
         <div className='flex mt-5'>
          <Usercall/>
         <p className="text-lg  text-black font-semibold ml-3">(555) 123-4567</p>
         </div>
          <div className='flex mt-5'>
            <Userlocation/>
          <p className="text-lg  text-black font-semibold ml-3">San Francisco, CA</p>
          </div>
        </div>

        <Button  >Edit Profile</Button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5  mb-10">
          <h1 className="text-3xl mt-5 font-semibold mb-4">Upcoming Appointment</h1>
          <div className="mb-4">
            <p className="text-lg text-black">Next session</p>
            <h2 className="text-xl font-semibold">Tuesday, March</h2>
            <p className="text-lg text-black">2:00pm</p>
            <p className="text-lg text-black">with Dr. Michael Brown</p>
          </div>
          <Button>Schedule New Session</Button>
        </div>


     </div>

      {/* Right Section - Appointment and Session History */}
      <div className="flex flex-col lg:w-2/3">
        
       

        {/* Session History */}
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h1 className="text-2xl font-semibold mb-4">Session History</h1>
          
          {/* First Session */}
          <div className="flex items-center mb-6">
          <Uservideo className="w-16 h-16 rounded-full mr-4"/>
            {/* <img src={userImg} alt="Session" className="w-16 h-16 rounded-full mr-4"/> */}
            <div>
              <h2 className="text-lg font-semibold">Video Session with Dr. Brown</h2>
              <p className="text-sm text-gray-600">March</p>
              <p className="text-sm text-gray-600">Discussed progress on stress management techniques and sleep hygiene practices.</p>
            </div>
          </div>

          {/* Second Session */}
          <div className="flex items-center mb-6">
            <Uservideo className="w-16 h-16 rounded-full mr-4"/>
            {/* <img src={userImg} alt="Session" className="w-16 h-16 rounded-full mr-4"/> */}
            <div>
              <h2 className="text-lg font-semibold">Chat Session with Dr. Brown</h2>
              <p className="text-sm text-gray-600">March</p>
              <p className="text-sm text-gray-600">Discussed progress on stress management techniques and sleep hygiene practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
