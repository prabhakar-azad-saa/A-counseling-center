// import React, { useEffect, useState } from "react";
// import { ZoomMtg } from "@zoomus/websdk";

// const ZoomMeeting = () => {
//   const [meetingId, setMeetingId] = useState("");
//   const [userName, setUserName] = useState("React User");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Replace these with actual values from your Zoom Developer Account
//   const API_KEY = "YOUR_ZOOM_API_KEY";
//   const API_SECRET = "YOUR_ZOOM_API_SECRET";
//   const LEAVE_URL = "https://your-app.com"; // Redirect URL after leaving meeting

//   useEffect(() => {
//     ZoomMtg.setZoomJSLib("https://source.zoom.us/2.17.0/lib", "/av");
//     ZoomMtg.preLoadWasm();
//     ZoomMtg.prepareJssdk();
//   }, []);

//   const generateSignature = (meetingNumber, role) => {
//     return new Promise((resolve, reject) => {
//       fetch("https://your-backend.com/generateSignature", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ meetingNumber, role }),
//       })
//         .then((res) => res.json())
//         .then((data) => resolve(data.signature))
//         .catch((err) => reject(err));
//     });
//   };

//   const joinMeeting = async () => {
//     setLoading(true);
//     try {
//       const signature = await generateSignature(meetingId, 0); // 0 for attendees, 1 for host

//       ZoomMtg.init({
//         leaveUrl: LEAVE_URL,
//         isSupportAV: true,
//         success: () => {
//           ZoomMtg.join({
//             meetingNumber: meetingId,
//             userName,
//             signature,
//             apiKey: API_KEY,
//             passWord: password,
//             success: () => {
//               console.log("Joined Zoom Meeting!");
//               setLoading(false);
//             },
//             error: (err) => {
//               console.error("Error joining meeting:", err);
//               setLoading(false);
//             },
//           });
//         },
//       });
//     } catch (error) {
//       console.error("Error generating signature:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2>Join Zoom Meeting</h2>
//       <input
//         type="text"
//         placeholder="Enter Meeting ID"
//         value={meetingId}
//         onChange={(e) => setMeetingId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter Meeting Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={joinMeeting} disabled={loading}>
//         {loading ? "Joining..." : "Join Meeting"}
//       </button>
//       <div id="zoom-meeting-container" style={{ marginTop: "20px", height: "500px" }}></div>
//     </div>
//   );
// };

// export default ZoomMeeting;
