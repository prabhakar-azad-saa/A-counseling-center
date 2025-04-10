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
    <div className="p-4 lg:p-28 max-w-4xl mx-auto bg-white border border-black">
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
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`bg-[#EC744A] text-white px-20 py-4 rounded-full hover:bg-[#EC744A] transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? <Spin size="small" className="mr-2" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
