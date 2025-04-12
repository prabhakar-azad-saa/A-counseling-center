import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, message, Spin } from "antd";
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
  const [userData, setUserData] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const newBlog = {
        userId: userData.userId,
        type: title,
        name: heading,
        description: content,
        additionalInfo: "",
      };

      const blogResponse = await insertBlog(newBlog);
      const blogId = blogResponse.blogId;

      if (fileList.length > 0 && fileList[0].originFileObj) {
        const file = fileList[0].originFileObj;
        const formData = new FormData();
        formData.append("blogImage", file);

        try {
          const uploadResponse = await uploadBlogImage(formData, blogId);
          console.log("Image Upload Response:", uploadResponse);
          setImageUrl(uploadResponse.url);
        } catch (uploadError) {
          console.error("Image upload failed:", uploadError);
          message.error("Image upload failed.");
        }
      }

      message.success("Blog added successfully!");
      setTitle("");
      setHeading("");
      setContent("");
      setImageUrl("");
      setFileList([]);
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred while adding the blog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
   <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-10">
    <h1 className="text-4xl font-extrabold text-center text-[#EC744A] mb-10 font-manrope">
      ✍️ Create a New Blog
    </h1>
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block text-xl font-semibold mb-2 text-gray-700">
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-[#EC744A] ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter a catchy title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Heading Field */}
      <div>
        <label htmlFor="heading" className="block text-xl font-semibold mb-2 text-gray-700">
          Blog Heading
        </label>
        <input
          type="text"
          id="heading"
          className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-[#EC744A] ${
            errors.heading ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter a strong headline"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        {errors.heading && <p className="text-red-500 text-sm mt-1">{errors.heading}</p>}
      </div>

      {/* Content Field */}
      <div>
        <label htmlFor="content" className="block text-xl font-semibold mb-2 text-gray-700">
          Blog Content
        </label>
        <textarea
          id="content"
          className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#EC744A] ${
            errors.content ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Write your content here..."
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-xl font-semibold mb-2 text-gray-700">Upload Blog Image</label>
        {/* <Upload
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload> */}
   <div className="w-full">
  <Upload
    listType="picture-card" // or keep as "picture-circle" if you're customizing the style
    fileList={fileList}
    onPreview={handlePreview}
    onChange={handleChange}
    beforeUpload={() => false}
    className="w-full"
  >
    {fileList.length >= 1 ? null : (
      <div className="w-full h-full flex items-center justify-center">
        {uploadButton}
      </div>
    )}
  </Upload>
</div>

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
      <div className="text-center mt-10">
        <button
          type="submit"
          className={`bg-gradient-to-r from-[#EC744A] to-[#ff9d4d] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition transform duration-300 ease-in-out ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? <Spin size="small" className="mr-2" /> : "🚀 Publish Blog"}
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AddBlog;
