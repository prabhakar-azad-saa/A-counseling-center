import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import frameImage from "../img/svgvieweroutput.png";
import { IoHeartSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { message } from "antd";
import { BlogReaction, getBlogdetails } from "../action/Auth";
import { motion } from "framer-motion"; // Re-enabled for animation support

const BlogShow = () => {
  const location = useLocation();
  const blog = location.state?.blog;
  const { blogId, initialStatus, userid } = location.state || {};

  const [status, setStatus] = useState(initialStatus);
  const [blogDetails, setBlogDetails] = useState([]);

  const userId = "USER_ID_PLACEHOLDER";

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await getBlogdetails();
        setBlogDetails(res);

        const currentBlog = res.find(
          (b) => b.blogId === blog.id && b.viewUserIds === userId
        );
        if (currentBlog) {
          setStatus(currentBlog.like);
        }
      } catch (err) {
        console.error("Failed to fetch blog details:", err);
      }
    };

    if (blog) fetchBlogDetails();
  }, [blog, userId]);

  const handleAction = async (blogId, status, userId) => {
    try {
      await BlogReaction(blogId, status, userId);
      message.success(
        `Blog ${status === 1 ? "liked" : "disliked"} successfully!`
      );
      console.log(
        "=== Reaction Updated Successfully ===",
        blogId,
        status,
        userid
      );
    } catch (err) {
      console.error("Error updating blog reaction:", err);
      message.error("Failed to update blog reaction.");
    }
  };

  if (!blog) return <div>No blog data found</div>;

  return (
    <div className="max-w-[1500px] mx-auto">
      {/* Header Section */}
      <div
        className="relative w-full h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${frameImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5">
          <div className="grid mt-12 grid-cols-1 md:grid-cols-1 items-center gap-1 min-h-[500px]">
            <div className="flex flex-row justify-center items-center md:justify-start space-x-8">
              <div className="h-60 border-l-2 border-white"></div>
              <div className="flex flex-col text-center md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-5xl font-bold text-white mb-4"
                >
                  Blog Detail
                </motion.h2>
                <br />
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-lg text-white"
                >
                  Professional guidance and support for your mental wellbeing
                  journey. Our experienced consultants provide personalized
                  strategies to help you overcome challenges and achieve
                  emotional balance.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">{blog.name}</h1>
        <img
          src={blog.imagePath}
          alt={blog.name}
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-lg text-gray-800">{blog.description}</p>

        {/* Like Button */}
        <div className="pt-5">
          <button
           
            onClick={() => {
              const newStatus = blogDetails[0]?.like === 1 ? 0 : 1;
              setStatus(newStatus); 
              handleAction(
                blogDetails[0]?.blogId,
                newStatus,
                blogDetails[0]?.viewUserIds
              );
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white transition-all ${
              status === 1 ? "bg-green-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {status === 1 ? (
              <IoHeartSharp className="text-red-500" size={28} />
            ) : (
              <AiOutlineHeart size={28} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
