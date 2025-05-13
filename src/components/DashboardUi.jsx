import React, { useEffect, useState } from "react";
import { Table, Calendar, Modal, Button, message, Spin } from "antd";
import { Pie } from "react-chartjs-2";
import { FaUserInjured, FaUsers, FaCalendarCheck } from "react-icons/fa";
import "chart.js/auto";
import userImg from "../img/userImg.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  patientTable,
  bookingTable,
  changeAppointment,
  getAllUpAppointments,
} from "../action/Auth";
import moment from "moment";
import Loader from "./Loader";

const DashboardUi = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPatients, setTotalPatients] = useState(0);
  const [todayPatients, setTodayPatients] = useState(0);
  const [booking, setBooking] = useState([]);
  const [todayAppointments, setTodayAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    setLoading(true);
    patientTable()
      .then((res) => {
        if (res?.data) {
          setTotalPatients(res.data.length);
          const todayPatientsList = res.data.filter(
            (patient) => patient.visitedToday === true
          );
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
          let filteredData = res?.data
            ?.filter((item) => item?.status === 0)
            ?.map((item) => ({ ...item, status: "Pending" }));
          setBooking(filteredData);
        }
      })
      .catch((err) => {
        console.error("Error fetching booking data:", err);
      });

    //getAllUpAppointments
   getAllUpAppointments()
  .then((res) => {
    if (res?.data) {
      const todayDate = moment().format("YYYY-MM-DD");

      // Filter only accepted appointments
      const acceptedAppointments = res.data.filter(
        (appointment) => appointment.status === 1
      );

      // Today's accepted appointments
      const todayAppointments = acceptedAppointments.filter(
        (appointment) =>
          moment(appointment.bookSessionDate).format("YYYY-MM-DD") === todayDate
      );
      setTodayAppointments(todayAppointments);

      // Upcoming accepted appointments
      const upcomingAppointments = acceptedAppointments.filter(
        (appointment) =>
          moment(appointment.bookSessionDate).isAfter(todayDate)
      );
      setUpcomingAppointments(upcomingAppointments);
    }
  })
  .catch((err) => {
    console.error("====getAllUpAppointments Error====", err);
  })
  .finally(() => {
    setLoading(false);
  });
  }, [refresh]);

  const handleJoin = (data) => {
    console.log("Join data:", data);
    if (data?.joinURL) {
      window.open(data?.joinURL, '_blank');
    } else {
      console.error('Join URL not found');
      alert('Join link is unavailable.');
    }
  };

  const handleAction = async (sessionId, status, fullName) => {
    try {
      changeAppointment(sessionId, status, fullName)
        .then((res) => {
          // console.log("----------- Accept Request resp -------",res)
          setRefresh(res.data);
        })
        .catch((err) => {
          console.log("---------Rej====", err);
        });

      const statusText =
        status === 1 ? "Accepted" : status === 2 ? "Rejected" : "Pending";
      message.success(`Appointment ${statusText.toLowerCase()} successfully!`);
    } catch (err) {
      console.error("Error updating appointment:", err);
      message.error("Failed to update appointment status.");
    }
  };

  const todayAppointmentsCount = todayAppointments.length;

  const cardData = [
    {
      label: "Today's Patients",
      value: todayPatients,
      color: "bg-teal-600",
      icon: <FaUserInjured size={30} />,
    },
    {
      label: "Total Patients",
      value: totalPatients,
      color: "bg-green-600",
      icon: <FaUsers size={30} />,
    },
    {
      label: "Today's Appointments",
      value: todayAppointmentsCount,
      color: "bg-orange-600",
      icon: <FaCalendarCheck size={30} />,
    },
  ];

  const showPatientDetails = (record) => {
    setSelectedPatient(record);
    setIsModalVisible(true);
  };

  const columns = [
   {
  title: 'Profile',
  dataIndex: 'profilePhotoPath',
  key: 'profilePhotoPath',
  render: (_, record) => (
    <img
      src={record.profilePhotoPath || userImg} // Fallback to placeholder
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />
  ),
},

    {
      title: "Patient",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Date",
      dataIndex: "bookSessionDate",
      key: "bookSessionDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const statusText =
          status === 1 ? "Accepted" : status === 2 ? "Rejected" : "Pending";

        return (
          <span
            className={`px-2 py-1 rounded ${
              statusText === "Accepted"
                ? "bg-green-200 text-green-800"
                : statusText === "Rejected"
                ? "bg-red-200 text-red-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {statusText}
          </span>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            onClick={() => handleAction(record.sessionId, 1, record.fullName)}
          >
            Accept
          </Button>
          <Button
            danger
            onClick={() => handleAction(record.sessionId, 2, record.fullName)}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];



  const columnss = [
    {
      title: "Profile",
      dataIndex: "profilePhotoPath",
      key: "profilePhotoPath",
      render: (text, record) => (
        <img
          src={userImg}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => showPatientDetails(record)}
        />
      ),
    },
    { title: "Patient", dataIndex: "fullName", key: "fullName" },
    { title: "Time", dataIndex: "bookSessionDate", key: "bookSessionDate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status === 1 ? "Accepted" : 'Rejected'),
    },
  
   {
  title: "Action",
  key: "action",
  render: (text, data) => {
    const today = new Date().toISOString().split('T')[0];
 console.log("Session Date:",  today,data);
    let isToday = false;
    if (data.
bookSessionDate
) {
      const parsedDate = new Date(data.
bookSessionDate
);
      if (!isNaN(parsedDate)) {
        const sessionDate = parsedDate.toISOString().split('T')[0];
        console.log("Session Date:", sessionDate,today);
        isToday = sessionDate === today;
      }
      
    }

    return (
      <div className="flex gap-2">
        <button
          onClick={() => handleJoin(data)}
          disabled={!isToday}
          className={`px-3 py-1 rounded text-sm ${
            isToday
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Join
        </button>
      </div>
    );
  }
}

    
  ];

  const data = [
    { rating: "Excellent", count: 120 },
    { rating: "Great", count: 90 },
    { rating: "Good", count: 70 },
    { rating: "Average", count: 50 },
    { rating: "Poor", count: 20 },
  ];

  const [chartData, setChartData] = useState({
    labels: ["Pending", "Accept", "Reject"],
    datasets: [
      {
        data: [0, 0, 0], // Default values
        backgroundColor: ["#FFA500", "#00BFFF", "#28A745"],
        hoverOffset: 4,
      },
    ],
  });

  const [bookings, setBookings] = useState([]);

  const fetchBookingData = async () => {
    try {
      const res = await bookingTable();
      if (res?.data) {
        setBookings(res?.data);
        updateChartData(res?.data);
      }
    } catch (err) {
      console.error("Error fetching booking data:", err);
    }
  };

  const updateChartData = (data) => {
    const pendingCount = data.filter((item) => item.status === 0).length;
    const acceptCount = data.filter((item) => item.status === 1).length;
    const rejectCount = data.filter((item) => item.status === 2).length;

    setChartData({
      labels: ["Pending", "Accept", "Reject"],
      datasets: [
        {
          data: [pendingCount, acceptCount, rejectCount],
          backgroundColor: ["#FFA500", "#00BFFF", "#28A745"],
          hoverOffset: 4,
        },
      ],
    });
  };


 

  useEffect(() => {
    fetchBookingData();
  }, []);

  return (
    <>
      {/* <Spin spinning={loading} size="large" className="" /> */}
      <Loader isLoading={loading} />
      <div className="p-2 bg-gray-100 min-h-screen flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`p-4 text-white rounded-lg ${card.color} flex flex-col items-center gap-2 w-full shadow-2xl`}
            >
              {card.icon}
              <h3 className="text-lg font-bold text-center">{card.label}</h3>
              <p className="text-2xl font-semibold">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
          {/* <div className="bg-white rounded-lg p-10 shadow-2xl overflow-auto ">
            <h3 className="text-xl font-bold text-center mb-4 ">
              Appointment Status
            </h3>
            <Pie data={chartData} /> */}
          <div className="bg-white rounded-lg pt-10  shadow-2xl overflow-auto">
            <h3 className="text-xl font-bold text-center mb-4">
              Appointment Status
            </h3>
            <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
              <Pie
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
            <h3 className="text-xl font-bold text-center mb-4">
              Today's Appointments
            </h3>

            <Table
              columns={columnss}
              dataSource={todayAppointments}
               rowKey="id"
            />
          </div>
          <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
            <h3 className="text-xl font-bold text-center mb-4">
              Next Appointments
            </h3>
            <Table
              columns={columnss}
              dataSource={upcomingAppointments}
              pagination={{ pageSize: 3 }}
            />
          </div>

          <div className="bg-white rounded-lg p-5 shadow-2xl overflow-auto">
            <h3 className="text-xl font-bold text-center mb-4">
              Appointment Requests
            </h3>
            <Table
              columns={columns}
              dataSource={booking}
              pagination={{ pageSize: 3 }}
            />
          </div>
          <div className="bg-white rounded-lg p-5 shadow-2xl ">
            <h3 className="text-xl font-bold text-center mb-4">
              Customer Ratings
            </h3>
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
          <div className="bg-white rounded-lg p-5 shadow-2xl ">
            <h3 className="text-xl font-bold text-center">
              Appointment Calendar
            </h3>
            <Calendar fullscreen={false} className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3"></div>

        <Modal
          title="Patient Summary"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          {selectedPatient && (
            <div className="text-center">
              <img
                src={selectedPatient.profile}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{selectedPatient.patient}</h3>
              <p className="text-gray-600">{selectedPatient.details}</p>
            </div>
          )}
        </Modal>
      </div>
      {/* </Spin> */}
    </>
  );
};

export default DashboardUi;
