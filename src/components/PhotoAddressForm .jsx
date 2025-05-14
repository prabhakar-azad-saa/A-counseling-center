


import React, { useState, useEffect } from "react";
import { Upload, Image, message, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { putUpdatePatientDetails, getUserDetail } from "../action/Auth";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const PhotoAddressForm = ({ userId, onClose, onSave }) => {
  const [user, setUser] = useState({});
  const [newAddress, setNewAddress] = useState(localStorage.getItem("userAddress") || "");
  const [newPhoto, setNewPhoto] = useState("");
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const parsedUser = JSON.parse(storedUser);
    const idToUse = userId || parsedUser?.userId;

    if (idToUse) {
      getUserDetail(idToUse)
        .then((res) => {
          const userData = res?.data;
          setUser(userData);
          if (userData?.Address) setNewAddress(userData.Address);
          if (userData?.profilePhotoPath) {
            const photoUrl = userData.profilePhotoPath.startsWith("data:image")
              ? userData.profilePhotoPath
              : userData.profilePhotoPath;
            setNewPhoto(photoUrl);
            setFileList([
              {
                uid: "-1",
                name: "profile.jpg",
                status: "done",
                url: photoUrl,
              },
            ]);
          }
        })
        .catch((err) => console.error("User Detail Error:", err));
    }
  }, [userId]);

  const validateForm = () => {
    const newErrors = {};
    // if (!newAddress.trim()) newErrors.address = "Address is required.";
    if (fileList.length === 0) newErrors.image = "Profile image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      const base64 = await getBase64(newFileList[0].originFileObj);
      setNewPhoto(base64);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("UserId", user?.userId || userId);
      formData.append("Name", user?.username || "");
      formData.append("Gender", user?.gender || "Other");
      formData.append("DateOfBirth", user?.dateOfBirth || "");
      formData.append("Address", newAddress);
      if (fileList[0]?.originFileObj) {
        formData.append("ProfilePhoto", fileList[0].originFileObj);
      }

      await putUpdatePatientDetails(formData);

      // ✅ Update localStorage with new address
      const storedUser = localStorage.getItem("userData");
      const parsedUser = JSON.parse(storedUser);
      const updatedUser = { ...parsedUser, Address: newAddress };
      localStorage.setItem("userData", JSON.stringify(updatedUser));

      message.success("Profile updated successfully!");
      if (onSave) onSave(newPhoto, newAddress);
      if (onClose) onClose();
    } catch (error) {
      message.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-10">
        <h1 className="text-3xl font-extrabold text-center text-[#EC744A] mb-10 font-manrope">
          🧾 Update Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-xl font-semibold mb-2 text-gray-700">
              Profile Photo
            </label>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false}
              className="w-full"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
          </div>

          {/* <div>
            <label className="block text-xl font-semibold mb-2 text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className={`w-full px-4 py-3 rounded-2xl border-2 ${
                errors.address ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#EC744A]`}
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div> */}

          <div className="text-center mt-10">
            <button
              type="submit"
              className={`bg-gradient-to-r from-[#EC744A] to-[#ff9d4d] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition transform duration-300 ease-in-out ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? <Spin size="small" className="mr-2" /> : "💾 Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhotoAddressForm;
