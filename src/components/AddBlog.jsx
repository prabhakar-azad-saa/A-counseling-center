// import React, { useEffect, useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Image, Upload } from 'antd';
// import { insertBlog } from '../action/Auth';


// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });


// const AddBlog = () => {
//   const [title, setTitle] = useState("");
//   const [heading, setHeading] = useState("");
//   const [content, setContent] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Image upload handler
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState([ ]);


//   // handel preview
//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };
//   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
//   const uploadButton = (
//     <button
//       style={{
//         border: 0,
//         background: 'none',
//       }}
//       type="button"
//     >
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </button>
//   );


//  const [addBlog, setAddBlog] = useState({
//   blogId: "",
//   type: "",
//   name: "",
//   description: "",
//   imagePath: "",
//   like: "",
//   unLike: "",
//   viewUserIds: "",
//   additionalInfo:'',
//   createdAt:'',
//   createdBy:'',

//   });
  
//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!title.trim()) newErrors.title = "Title is required.";
//     if (!heading.trim()) newErrors.heading = "Heading is required.";
//     if (!content.trim()) newErrors.content = "Content is required.";
//     if (!imageUrl || imageUrl.trim() === "") newErrors.image = "Image is required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

  
//   const handleSubmit = (e) => {
//     // console.log("===========================")
//     e.preventDefault();
//     console.log(title,heading,content)
//     if (validateForm()) {
//       console.log("=============",title,heading,content)
//     }
//   };

   


//   return (
//     <div className="p-4  lg:p-28 max-w-4xl mx-auto bg-white border border-black">
//       <h1 className="text-3xl font-bold mb-6 text-center ">Add Blog</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Title Field */}
//         <div>
//           <label htmlFor="title" className="block font-bold text-xl mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className={`w-full p-3 border rounded-full ${
//               errors.title ? "border-red-500" : "border-gray-300"
//             }`}
//             placeholder="Enter blog title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm mt-1">{errors.title}</p>
//           )}
//         </div>

//         {/* Heading Field */}
//         <div>
//           <label htmlFor="heading" className="block font-bold text-xl mb-2">
//             Heading
//           </label>
//           <input
//             type="text"
//             id="heading"
//             className={`w-full p-3 border rounded-full ${
//               errors.heading ? "border-red-500" : "border-gray-300"
//             }`}
//             placeholder="Enter blog heading"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//           />
//           {errors.heading && (
//             <p className="text-red-500 text-sm mt-1">{errors.heading}</p>
//           )}
//         </div>

//         {/* Content Field */}
//         <div>
//           <label htmlFor="content" className="block font-bold text-xl mb-2">
//             Content
//           </label>
//           <textarea
//             id="content"
//             className={`w-full p-3 border rounded-xl ${
//               errors.content ? "border-red-500" : "border-gray-300"
//             }`}
//             placeholder="Enter blog content"
//             rows="6"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//           {errors.content && (
//             <p className="text-red-500 text-sm mt-1">{errors.content}</p>
//           )}
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block font-bold text-xl mb-2">Image</label>
//           <Upload
//         action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//         listType="picture-circle"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>
//       {previewImage && (
//         <Image
//           wrapperStyle={{
//             display: 'none',
//           }}
//           preview={{
//             visible: previewOpen,
//             onVisibleChange: (visible) => setPreviewOpen(visible),
//             afterOpenChange: (visible) => !visible && setPreviewImage(''),
//           }}
//           src={previewImage}
//         />
       
//       )}
//       </div>
//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-[#EC744A] text-white px-20 py-4 rounded-full hover:bg-[#EC744A] transition duration-300"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBlog;


import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, message } from "antd";
import { insertBlog, uploadBlogImage } from "../action/Auth";

// Function to convert file to Base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileList, setFileList] = useState([]);

  // Image preview handlers
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  // Handle image preview
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  // Handle image change
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // Upload button UI
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!heading.trim()) newErrors.heading = "Heading is required.";
    if (!content.trim()) newErrors.content = "Content is required.";
    if (fileList.length === 0) newErrors.image = "Image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Step 1: Prepare blog data
      const blogData = {
        userId: 0, // Change this to the actual user ID if needed
        type: "Blog",
        name: title,
        description: content,
        additionalInfo: heading,
      };

      // Step 2: Insert Blog
      const blogResponse = await insertBlog(blogData);
      console.log("=====123====",blogResponse)
      if (!blogResponse) {
        message.error("Failed to create blog.");
        return;
      }

      message.success("Blog created successfully!");

      // Step 3: Upload Image
      if (fileList.length > 0) {
        const file = fileList[0].originFileObj;
        const uploadResponse = await uploadBlogImage(blogResponse.userId, file);

        if (uploadResponse && uploadResponse.url) {
          setImageUrl(uploadResponse.url);
          message.success("Image uploaded successfully!");
        } else {
          message.error("Image upload failed.");
        }
      }

      // Reset form
      setTitle("");
      setHeading("");
      setContent("");
      setFileList([]);
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred while adding the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 lg:p-28 max-w-4xl mx-auto bg-white border border-black">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block font-bold text-xl mb-2">Title</label>
          <input
            type="text"
            id="title"
            className={`w-full p-3 border rounded-full ${errors.title ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Heading Field */}
        <div>
          <label htmlFor="heading" className="block font-bold text-xl mb-2">Heading</label>
          <input
            type="text"
            id="heading"
            className={`w-full p-3 border rounded-full ${errors.heading ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter blog heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
          {errors.heading && <p className="text-red-500 text-sm mt-1">{errors.heading}</p>}
        </div>

        {/* Content Field */}
        <div>
          <label htmlFor="content" className="block font-bold text-xl mb-2">Content</label>
          <textarea
            id="content"
            className={`w-full p-3 border rounded-xl ${errors.content ? "border-red-500" : "border-gray-300"}`}
            placeholder="Enter blog content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-bold text-xl mb-2">Image</label>
          <Upload
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={() => false} 
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

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="bg-[#EC744A] text-white px-20 py-4 rounded-full hover:bg-[#EC744A] transition duration-300" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
