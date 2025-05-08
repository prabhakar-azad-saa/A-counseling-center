// import React, { useState, useEffect } from "react";
// import { Upload, message } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import { putUpdatePatientDetails, getUserDetail } from "../action/Auth";

// // Backend base URL for image path (update to your actual backend domain)
// const BASE_IMAGE_URL = "https://your-backend-domain.com/";

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

// const PhotoAddressForm = ({ userId, onClose, onSave }) => {
//   const [user, setUser] = useState({});
//   const [newAddress, setNewAddress] = useState("");
//   const [newPhoto, setNewPhoto] = useState("");
//   const [fileList, setFileList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("userData");
//     const parsedUser = JSON.parse(storedUser);
//     const idToUse = userId || parsedUser?.userId;

//     if (idToUse) {
//       getUserDetail(idToUse)
//         .then((res) => {
//           const userData = res?.data;
//           setUser(userData);
//           if (userData?.Address) setNewAddress(userData.Address);

//           if (userData?.ProfilePhoto) {
//             const isBase64 = userData.ProfilePhoto.startsWith("data:image");
//             const photoUrl = isBase64
//               ? userData.ProfilePhoto
//               : BASE_IMAGE_URL + userData.ProfilePhoto;
//             setNewPhoto(photoUrl);
//           }
//         })
//         .catch((err) => console.error("User Detail Error:", err));
//     }
//   }, [userId]);

//   const handleImageChange = async ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//     if (newFileList.length > 0 && newFileList[0].originFileObj) {
//       const base64 = await getBase64(newFileList[0].originFileObj);
//       setNewPhoto(base64);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!newAddress.trim()) {
//       return message.error("Please enter an address.");
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append("UserId", user?.userId || userId);
//     formData.append("Name", user?.username || "");
//     formData.append("Gender", user?.gender || "Other");
//     formData.append("DateOfBirth", user?.dateOfBirth || "");
//     formData.append("Address", newAddress);

//     if (fileList[0]?.originFileObj) {
//       formData.append("ProfilePhoto", fileList[0].originFileObj);
//     }

//     try {
//       await putUpdatePatientDetails(formData);
//       if (onSave) onSave(newPhoto, newAddress);
//       onClose();
//     } catch (error) {
//       message.error("Failed to update profile.");
//       console.error("Error updating profile:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-center"> 🧾 Update Profile</h2>

//       {/* Image Upload with Preview */}
//       <div className="flex flex-col items-center">
//         <Upload
//           listType="picture-circle"
//           fileList={fileList}
//           showUploadList={false}
//           beforeUpload={() => false}
//           onChange={handleImageChange}
//         >
//           {newPhoto ? (
//             <img
//               src={newPhoto}
//               alt="avatar"
//               className="w-24 h-24 rounded-full object-cover"
//             />
//           ) : (
//             <div>
//               <PlusOutlined />
//               <div style={{ marginTop: 8 }}>Upload</div>
//             </div>
//           )}
//         </Upload>
//         <p className="text-sm text-gray-500 mt-2">Click to change photo</p>
//       </div>

//       {/* Address Input */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//         <input
//           type="text"
//           value={newAddress}
//           onChange={(e) => setNewAddress(e.target.value)}
//           placeholder="Enter your address"
//           className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-end space-x-4">
//         <button
//           onClick={onClose}
//           className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PhotoAddressForm;




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
  const [newAddress, setNewAddress] = useState("");
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
          if (userData?.ProfilePhoto) {
            const photoUrl = userData.ProfilePhoto.startsWith("data:image")
              ? userData.ProfilePhoto
              : userData.ProfilePhoto;
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
    if (!newAddress.trim()) newErrors.address = "Address is required.";
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
            <label className="block text-xl font-semibold mb-2 text-gray-700">Profile Photo</label>
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
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>

          <div>
            <label className="block text-xl font-semibold mb-2 text-gray-700">Address</label>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className={`w-full px-4 py-3 rounded-2xl border-2 ${
                errors.address ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#EC744A]`}
              placeholder="Enter your address"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

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
