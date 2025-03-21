import React, { useEffect, useState } from 'react';
import { Table, Calendar, Modal , Button } from 'antd';
import { Pie } from 'react-chartjs-2';
import { FaUserInjured, FaUsers, FaCalendarCheck } from 'react-icons/fa';
import 'chart.js/auto';
import userImg from "../img/userImg.png";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { patientTable,bookingTable,changeAppointment} from '../action/Auth';

const DashboardUi = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPatients, setTotalPatients] = useState(0);
  const [todayPatients, setTodayPatients] = useState(0);
  const [booking, setBooking] = useState([]);
  const [todayAppointments, setTodayAppointments] = useState([ 
    { patient: 'Rajesh Kumar', time: '10:00 AM', status: 'Pending', profile: userImg, details: 'Age: 45, Condition: Fever' },
    { patient: 'Neha Sharma', time: '11:30 AM', status: 'Confirmed', profile: userImg, details: 'Age: 30, Condition: Diabetes' },
    { patient: 'John Doe', time: '02:00 PM', status: 'Completed', profile: userImg, details: 'Age: 50, Condition: Hypertension' }
  ]);
  const [appointmentRequests, setAppointmentRequests] = useState([ 
    { patient: 'Rahul Gupta', time: '09:00 AM', status: 'Requested', profile: userImg, details: 'Age: 29, Condition: Flu' },
    { patient: 'Priya Mehta', time: '01:00 PM', status: 'Requested', profile: userImg, details: 'Age: 38, Condition: Migraine' }
  ]);

  useEffect(() => {
    patientTable()
      .then((res) => {
        if (res?.data) {
          setTotalPatients(res.data.length);
          const todayPatientsList = res.data.filter(patient => patient.visitedToday === true);
          setTodayPatients(todayPatientsList.length);

          console.log("Total Patients:", res.data.length);
          console.log("Today's Patients:", todayPatientsList.length);
        }
      })
      .catch((err) => {
        console.error("=== patientTable Err ===", err);
      });

//appointment request
      bookingTable()
      .then((res) => {
        if (res?.data) {
          setBooking(res.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching booking data:', err);
      });

//changeapointmenet
     
      
  }, []);

  const handleAction = async (sessionId, status) => {
    try {
      await changeAppointment(sessionId, status, "AdminUser");
      message.success(`Appointment ${status.toLowerCase()} successfully!`);
      fetchAppointments(); // Refresh data after update
    } catch (err) {
      console.error("Error updating appointment:", err);
      message.error("Failed to update appointment status.");
    }
  };

  const todayAppointmentsCount = todayAppointments.length; 

  const cardData = [
    { label: "Today's Patients", value: todayPatients, color: 'bg-teal-600', icon: <FaUserInjured size={30} /> },
    { label: "Total Patients", value: totalPatients, color: 'bg-green-600', icon: <FaUsers size={30} /> },
    { label: "Today's Appointments", value: todayAppointmentsCount, color: 'bg-orange-600', icon: <FaCalendarCheck size={30} /> }
  ];

  const showPatientDetails = (record) => {
    setSelectedPatient(record);
    setIsModalVisible(true);
  };

  const chartData = {
    labels: ['Pending', 'Confirmed', 'Completed'],
    datasets: [
      {
        data: [1, 1, 1], 
        backgroundColor: ['#FFA500', '#00BFFF', '#28A745'],
        hoverOffset: 4
      }
    ]
  };

  const columns = [
    {
      title: 'Profile',
      dataIndex: 'profile',
      key: 'profile',
      render: (profile) => <img src={userImg} alt="Profile" className="w-10 h-10 rounded-full" />,
    },
    {
      title: 'Patient Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Date',
      dataIndex: 'bookSessionDate',
      key: 'bookSessionDate',
    },
    // {
    //   title: 'Details',
    //   dataIndex: 'details',
    //   key: 'details',
    // },
 
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <span
            className={`px-2 py-1 rounded ${
              status === "Accepted"
                ? "bg-green-200 text-green-800"
                : status === "Rejected"
                ? "bg-red-200 text-red-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {status}
          </span>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
          <div className="flex gap-2">
            <Button type="primary" onClick={() => handleAction(record.sessionId, "Accepted")}>
              Accept
            </Button>
            <Button danger onClick={() => handleAction(record.sessionId, "Rejected")}>
              Reject
            </Button>
          </div>
        ),
      },
    ];

  const columnss = [
    { title: 'Profile', dataIndex: 'profile', key: 'profile', render: (text, record) => (<img src={text} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" onClick={() => showPatientDetails(record)} />) },
    { title: 'Patient', dataIndex: 'patient', key: 'patient' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
    { title: 'Status', dataIndex: 'status', key: 'status' }
  ];

  const data = [
    { rating: "Excellent", count: 120 },
    { rating: "Great", count: 90 },
    { rating: "Good", count: 70 },
    { rating: "Average", count: 50 },
    { rating: "Poor", count: 20 }
  ];

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-center">Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div key={index} className={`p-4 text-white rounded-lg ${card.color} flex flex-col items-center gap-2 w-full shadow-2xl`}>
            {card.icon}
            <h3 className="text-lg font-bold text-center">{card.label}</h3>
            <p className="text-2xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
          <h3 className="text-xl font-bold text-center mb-4">Appointment Status</h3>
          <Pie data={chartData} />
        </div>
        <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
          <h3 className="text-xl font-bold mb-4">Today's Appointments</h3>
          <Table columns={columnss} dataSource={todayAppointments} pagination={false} />
        </div>
        <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
          <h3 className="text-xl font-bold mb-4">Next Appointments</h3>
          <Table columns={columnss} dataSource={appointmentRequests} pagination={false} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-5 shadow-2xl ">
          <h3 className="text-xl font-bold mb-4">Customer Ratings</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis dataKey="rating" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
        <h3 className="text-xl font-bold mb-4">Appointment Requests</h3>
        <Table columns={columns} dataSource={booking} pagination={{ pageSize: 4 }} />
        </div>
        <div className="bg-white rounded-lg p-5 shadow-2xl ">
          <h3 className="text-xl font-bold text-center">Appointment Calendar</h3>
          <Calendar fullscreen={false} className="w-full" />
        </div>
      </div>
      
      <Modal title="Patient Summary" open={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
        {selectedPatient && (
          <div className="text-center">
            <img src={selectedPatient.profile} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">{selectedPatient.patient}</h3>
            <p className="text-gray-600">{selectedPatient.details}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DashboardUi;
