import React, { useEffect, useState } from 'react';
import { userCantact, patientTable, bookingTable } from '../action/Auth';
import { Table } from 'antd';
import DashboardUi from './DashboardUi';

import AddBlog from './AddBlog';

const DashboardTable = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTable, setActiveTable] = useState('dashboard'); 
 

  const bookingData = [
    { firstName: 'Rajesh', email: 'rajmewada18110@gmai.com', phone: '9876543210', date: '2025-03-01', payment: 'Pending' },
    { firstName: 'Test 4', email: 'rajmewada18110@gmail.com', phone: '9876543210', date: '2025-03-01', payment: 'Pending' }
  ];
  
  const submittedData = [
    { firstName: 'Test', lastName: '3', email: 'rajmewada18110@gmail.com', phone: '9876543210', message: 'This is my message' },
    { firstName: 'Abhishek', lastName: 'Gehlot', email: 'abhishek@gmail.com', phone: '9876543210', message: 'Test_02' }
  ];
  
  const submituserData = [
    { firstName: 'Prabhakar', lastName: 'Azad', email: 'prabhakarazad903@gmail.com', phone: '8118829017' },
    { firstName: 'Tester', lastName: '2', email: 'rajmewada18110@gmail.com', phone: '+91 9876543210' }
  ];

 
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-80 bg-gray-800 text-white p-5 md:h-screen">
        <h2 className="text-2xl font-bold mb-5 text-center md:text-left">Dashboard Section</h2>
        <ul className="flex flex-col space-y-3">
          {[{ name: 'Dashboard', value: 'dashboard' },
            { name: 'Booking Sessions', value: 'booking' },
            { name: 'User Information', value: 'users' },
            { name: 'Contact Us', value: 'contacts' },
            { name: 'Add Blog', value: 'addblog' }
          ].map((item) => (
            <li key={item.value}>
              <button
                className={`w-full px-4 py-2 text-center rounded-lg transition duration-300 ${activeTable === item.value ? 'bg-[#007D6E] text-white' : ''}`}
                onClick={() => setActiveTable(item.value)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col flex-1 items-center p-5 bg-gray-100 w-full">
        {error && <div className="text-red-500">{error}</div>}
        <div className="bg-white  rounded-lg p-5 w-full overflow-auto">
          {activeTable === 'dashboard' ? (
            <DashboardUi />
          ) : activeTable === 'addblog' ? (
            <div>
             
            
            <AddBlog/>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">
                {activeTable === 'booking' ? 'Booking Sessions' : activeTable === 'users' ? 'User Information' : 'Contact Us'}
              </h2>
              <Table
                columns={
                  activeTable === 'booking' ? [
                    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
                    { title: 'Email', dataIndex: 'email', key: 'email' },
                    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
                    { title: 'Date', dataIndex: 'date', key: 'date' },
                    { title: 'Payment Status', dataIndex: 'payment', key: 'payment' }
                  ] : activeTable === 'users' ? [
                    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
                    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
                    { title: 'Email', dataIndex: 'email', key: 'email' },
                    { title: 'Phone', dataIndex: 'phone', key: 'phone' }
                  ] : [
                    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
                    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
                    { title: 'Email', dataIndex: 'email', key: 'email' },
                    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
                    { title: 'Message', dataIndex: 'message', key: 'message' }
                  ]
                }
                dataSource={activeTable === 'booking' ? bookingData : activeTable === 'users' ? submituserData : submittedData}
                loading={loading}
                scroll={{ x: true }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;