// ZoomCreator.js
import React, { useState } from "react";
import axios from "axios";

const ZoomCreator = () => {
  const [meetingLink, setMeetingLink] = useState("");

  const handleCreateMeeting = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/create-meeting");
      setMeetingLink(response.data.join_url);
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };

  return (
    <div>
      <button onClick={handleCreateMeeting} className="bg-blue-500 px-4 py-2 text-white rounded">
        Create Zoom Meeting
      </button>
      {meetingLink && (
        <p className="mt-4">
          Share this link:{" "}
          <a href={meetingLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {meetingLink}
          </a>
        </p>
      )}
    </div>
  );
};

export default ZoomCreator;
