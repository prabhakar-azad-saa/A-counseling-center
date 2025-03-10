import React, { useEffect, useState } from 'react';
import { userCantact, patientTable, bookingTable } from '../action/Auth';
import { Table } from 'antd';

const DashboardTable = () => {
  // const [bookingData, setBookingData] = useState([]);
  // const [submittedData, setSubmittedData] = useState([]);
  // const [submituserData, setSubmituserData] = useState([]);
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



  // useEffect(() => {
  //   setLoading(true);
  //   bookingTable()
  //     .then((res) => setBookingData(res))
  //     .catch(() => setError('Failed to fetch booking data'))
  //     .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   userCantact()
  //     .then((res) => setSubmituserData(res))
  //     .catch(() => setError('Failed to fetch user data'))
  //     .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   patientTable()
  //     .then((res) => setSubmittedData(res))
  //     .catch(() => setError('Failed to fetch contact data'))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-gray-800 text-white p-5 md:h-screen">
        <h2 className="text-2xl font-bold mb-5 text-center md:text-left">
          Dashboard Section
        </h2>
        <ul className="flex flex-col space-y-3">
          {[
            { name: 'Dashboard', value: 'dashboard' },
            { name: 'Booking Sessions', value: 'booking' },
            { name: 'User Information', value: 'users' },
            { name: 'Contact Us', value: 'contacts' }
          ].map((item) => (
            <li key={item.value}>
              <button
                className={`w-full px-4 py-2 text-center rounded-lg transition duration-300 
                  ${
                    activeTable === item.value
                      ? 'bg-[#007D6E] text-white'
                      : ''
                  }`}
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

        {activeTable && (
          <div className="bg-white shadow-lg rounded-lg p-5 w-full overflow-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {activeTable === 'booking'
                ? 'Booking Sessions'
                : activeTable === 'users'
                ? 'User Information'
                : activeTable === 'contacts'
                ? 'Contact Us'
                : 'Dashboard'}
            </h2>
            {activeTable !== 'dashboard' ? (
              <Table
                columns={
                  activeTable === 'booking'
                    ? [
                        { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
                        { title: 'Email', dataIndex: 'email', key: 'email' },
                        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
                        { title: 'Date', dataIndex: 'date', key: 'date' },
                        { title: 'Payment Status', dataIndex: 'payment', key: 'payment' }
                      ]
                    : activeTable === 'users'
                    ? [
                        { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
                        { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
                        { title: 'Email', dataIndex: 'email', key: 'email' },
                        { title: 'Phone', dataIndex: 'phone', key: 'phone' }
                      ]
                    : [
                        { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
                        { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
                        { title: 'Email', dataIndex: 'email', key: 'email' },
                        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
                        { title: 'Message', dataIndex: 'message', key: 'message' }
                      ]
                }
                dataSource={
                  activeTable === 'booking'
                    ? bookingData
                    : activeTable === 'users'
                    ? submituserData
                    : submittedData
                }
                loading={loading}
                scroll={{ x: true }}
              />
            ) : (
              <div className="text-center text-lg font-semibold text-gray-600">
                Welcome to the Dashboard! Select a section from the sidebar.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTable;
