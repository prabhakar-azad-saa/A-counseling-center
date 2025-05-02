import React, { useState, useEffect } from "react";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { putUpdatePatientDetails, getUserDetail } from "../action/Auth";

// Utility function to convert image file to base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const PhotoAddressForm = ({ userId, onClose, onSave }) => {
  const [user, setUser] = useState({});
  const [newAddress, setNewAddress] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch user details on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const parsedUser = JSON.parse(storedUser);
    const idToUse = userId || parsedUser?.userId;

    if (idToUse) {
      getUserDetail(idToUse)
        .then((res) => {
          const userData = res?.data;
          setUser(userData);
          if (userData?.address) setNewAddress(userData.address);
          if (userData?.profilePhoto) setNewPhoto(userData.profilePhoto);
        })
        .catch((err) => console.error("User Detail Error:", err));
    }
  }, [userId]);

  const handleImageChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const base64 = await getBase64(newFileList[0].originFileObj);
      setNewPhoto(base64);
    }
  };

  const handleSubmit = async () => {
    if (!newAddress.trim()) {
      return message.error("Please enter an address.");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("UserId", user?.userId || userId);
    formData.append("Name", user?.username || "");
    formData.append("Gender", user?.gender || "Other");
    formData.append("DateOfBirth", user?.dateOfBirth || "");
    formData.append("Address", newAddress);

    if (fileList[0]?.originFileObj) {
      formData.append("profilePhoto", fileList[0].originFileObj);
    } else if (newPhoto) {
      formData.append("profilePhoto", newPhoto);
    }

    try {
      await putUpdatePatientDetails(formData);
      if (onSave) {
        onSave(newPhoto, newAddress);
      }
      onClose();
    } catch (error) {
      message.error("Failed to update profile.");
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Edit Profile</h2>

      {/* Image Upload with Preview */}
      <div className="flex flex-col items-center">
        <Upload
          listType="picture-circle"
          fileList={fileList}
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleImageChange}
        >
          {newPhoto ? (
            <img src={newPhoto} alt="avatar" className="w-24 h-24 rounded-full" />
          ) : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
        <p className="text-sm text-gray-500 mt-2">Click to change photo</p>
      </div>

      {/* Address Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          placeholder="Enter your address"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default PhotoAddressForm;
