import React, { useState } from "react";
import { Upload, message, Flex } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Image upload handler
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG files!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleImageChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!heading.trim()) newErrors.heading = "Heading is required.";
    if (!content.trim()) newErrors.content = "Content is required.";
    if (!imageUrl) newErrors.image = "Image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const blogData = { title, heading, content, imageUrl };
      console.log("Blog Data Submitted:", blogData);
      message.success("Blog submitted successfully!");
      // Reset form
      setTitle("");
      setHeading("");
      setContent("");
      setImageUrl("");
      setErrors({});
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block font-bold text-xl mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full p-3 border rounded-full ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Heading Field */}
        <div>
          <label htmlFor="heading" className="block font-bold text-xl mb-2">
            Heading
          </label>
          <input
            type="text"
            id="heading"
            className={`w-full p-3 border rounded-full ${
              errors.heading ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter blog heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
          {errors.heading && (
            <p className="text-red-500 text-sm mt-1">{errors.heading}</p>
          )}
        </div>

        {/* Content Field */}
        <div>
          <label htmlFor="content" className="block font-bold text-xl mb-2">
            Content
          </label>
          <textarea
            id="content"
            className={`w-full p-3 border rounded-xl ${
              errors.content ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter blog content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-bold text-xl mb-2">Image</label>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleImageChange}
            style={{width:'100%'}}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: "100%",height:"auto", borderRadius: "8px" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#EC744A] text-white px-20 py-4 rounded-full hover:bg-[#EC744A] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;