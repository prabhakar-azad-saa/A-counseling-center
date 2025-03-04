import React from 'react';
import Button from './Button';
import userImg from "../img/userImg.png";
import Usermail from '../img/Usermail';
import Usercall from '../img/Usercall';
import Userlocation from '../img/Userlocation';
import Uservideo from '../img/Uservideo';
// import { FaEdit } from "react-icons/fa";

const UserProfile = () => {

  const users = [
    { name: "Sarah Johnson", email: "sarah.johnson@email.com", mobile: "(555) 123-4567", time: "2:00 PM", paymentStatus: "Paid" },
    { name: "John Doe", email: "john.doe@email.com", mobile: "(555) 234-5678", time: "3:00 PM", paymentStatus: "Pending" },
    { name: "Emily Smith", email: "emily.smith@email.com", mobile: "(555) 345-6789", time: "4:00 PM", paymentStatus: "Paid" },
    { name: "Michael Brown", email: "michael.brown@email.com", mobile: "(555) 456-7890", time: "5:00 PM", paymentStatus: "Failed" },
  ];





  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-10 mt-24 mx-5 lg:mx-24">
   
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 mb-7">
       
          <div className="flex flex-col lg:flex-row items-center mb-6">
            <img src={userImg} alt="User" className="w-24 h-24 rounded-full mb-4 lg:mb-0"/>
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

          <Button>Edit Profile</Button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5 mb-10">
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

     
      <div className="flex flex-col lg:w-2/3">
        {/* Session History */}
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h1 className="text-2xl font-semibold mb-4">Session History</h1>

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
              <p className="text-sm text-gray-600">Discussed progress on stress management techniques and sleep hygiene practices.</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-10 p-5">
          <h1 className='text-2xl font-bold'>Booking session table</h1>
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left text-lg text-black font-semibold">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Email</th>
            <th className="py-3 px-4 border-b">Mobile</th>
            <th className="py-3 px-4 border-b">Time</th>
            <th className="py-3 px-4 border-b">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4 text-sm">{user.name}</td>
              <td className="py-3 px-4 text-sm">{user.email}</td>
              <td className="py-3 px-4 text-sm">{user.mobile}</td>
              <td className="py-3 px-4 text-sm">{user.time}</td>
              <td className="py-3 px-4 text-sm">
                <span className={`px-3 py-1 rounded-full text-white ${user.paymentStatus === 'Paid' ? 'bg-[#007D6E]' : user.paymentStatus === 'Pending' ? 'bg-yellow-500' : 'bg-[#EC744A]'}`}>
                  {user.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
      
    </div>
  );
};

export default UserProfile;
