import React, { useState } from "react";

const ZoomMeeting = () => {
  const [zoomLink, setZoomLink] = useState("");

  const generateZoomLink = () => {
    const meetingId = Math.floor(1000000000 + Math.random() * 9000000000);
    const passcode = Math.random().toString(36).substring(2, 10);
    const link = `https://zoom.us/j/${meetingId}?pwd=${passcode}`;
    setZoomLink(link);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#007D6E]">
        Create a Zoom Meeting
      </h2>
      <button
        onClick={generateZoomLink}
        className="bg-[#007D6E] hover:bg-[#005F56]  text-white font-semibold py-2 px-4 rounded transition"
      >
        Generate Zoom Link
      </button>

      {zoomLink && (
        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-2">Your Zoom Meeting Link:</p>
          <a
            href={zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {zoomLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default ZoomMeeting;
