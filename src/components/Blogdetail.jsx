import React, { useEffect, useState } from 'react';
import frameImage from "../img/svgvieweroutput.png";
import Ready from './Ready';
import blogDetail3 from "../img/blogDetail3.png";
import blogDetail6 from "../img/blogDetail6.png";
import { IoHeartSharp } from "react-icons/io5";

import { IoHeartDislikeSharp, IoHeartDislikeOutline } from "react-icons/io5";
import { message } from 'antd';
import { BlogReaction, getBlogdetails } from '../action/Auth';
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const Blogdetail = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const [status, setStatus] = useState(1);
  const [blog, setBlog] = useState(null);
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshBlogs, setRefreshBlogs] = useState(false);

  const location = useLocation();
  const { blogId, initialStatus, userid } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    getBlogdetails()
      .then((res) => setBlogDetails(res || []))
      .catch((err) => console.error("==getBlogDetails Err===", err));
  }, []);

  useEffect(() => {
    if (blogId) {
      getBlogdetails(blogId).then((data) => {
        const found = data?.find((b) => b.blogId === blogId || b.id === blogId);
        setBlog(found);
        setStatus(initialStatus || found?.like || 0);
      });
    }
  }, [blogId]);

  const handleAction = async (blogId, status) => {
    try {
      const userString = localStorage.getItem("userData");
  
      if (!userString) {
        message.error("User not logged in (user not found in localStorage)!");
        return;
      }
  
      const user = JSON.parse(userString);
      const userId = user?.userId || user?.id;
  
      console.log("User ID:", userId);
  
      if (!userId) {
        message.error("User ID missing from user data!");
        return;
      }
  
      await BlogReaction(blogId, status, userId);
  
      let actionMessage = "";
      if (status === 1) actionMessage = "liked";
      else if (status === 0) actionMessage = "disliked";
  
      message.success(`Blog ${actionMessage} successfully!`);
    } catch (err) {
      console.error("Error updating blog reaction:", err);
      message.error("Failed to update blog reaction.");
    }
  };
  
 
  
  
  
  if (!blog) return <p>Loading...</p>;

  return (
    <div>
       <Loader isLoading={loading} />
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden" style={{
        backgroundImage: `url(${frameImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 w-full max-w-[2300px] mx-auto px-5">
          <div className="grid mt-12 grid-cols-1 md:grid-cols-1 items-center gap-1 min-h-[500px]">
            <div className="flex flex-row ml-8 items-center md:justify-start space-x-8">
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
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-lg text-white"
                >
                  Professional guidance and support for your mental wellbeing journey.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-screen-xl mx-auto px-4 pt-40 sm:px-8">
        <div>
          <img src={blog.imagePath} alt={blog.name} className="w-full h-80 object-cover rounded-lg"
          />
          <div className="flex flex-col md:flex-row gap-8 mt-24">
            <div className="md:w-2/3">
              {/* <h1 className="text-3xl font-semibold text-black">How Mental Health Consultants Can Help...</h1> */}
              <p className="mt-4 text-black leading-relaxed font-semibold text-3xl font-poppins">
                {blog.name}
              </p>
              <p className="mt-4 text-black leading-relaxed font-poppins text-justify">
                {blog.description}
              </p>
              <div className="flex gap-4 mt-4">
              <button
  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
    ${status === 1 ? "bg-red-100 text-red-500" : "bg-blue-100 text-blue-500"}`}
  onClick={() => {
    const newStatus = status === 1 ? 0 : 1; 
    setStatus(newStatus);
    handleAction(blog.blogId, newStatus); 
  }}
>
  {status === 1 ? (
    <>
      <IoHeartSharp size={20} />
      <span>Liked</span>
    </>
  ) : (
    <>
      <IoHeartDislikeSharp size={20} />
      <span>Disliked</span>
    </>
  )}
</button>

</div>

            </div>

            {/* Recommended Blogs */}
            <div className="md:w-1/3 mt-12 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800">Recommended Blog</h2>
              <div className="flex flex-col gap-6 mt-10">
                {blogDetails
                  .filter((b) => blog?.type && b.type === blog.type && b.blogId !== blog.blogId)
                  .slice(0, 3)
                  .map((b, index) => (
                    <div key={index} className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
                      <img
                        src={b.imagePath}
                        alt={b.name}
                        className="w-full h-auto mb-4 rounded-lg"
                        style={{ width: '75px', height: '75px' }}
                      />
                      <div className="pl-5">
                        <h3 className="text-lg font-semibold text-black">{b.name}</h3>
                        <p className="text-black">
                          {b.description.length > 70 && expandedBlogId !== b.blogId
                            ? `${b.description.slice(0, 70).trim()}...`
                            : b.description}
                          {b.description.length > 70 && (
                            <button
                            onClick={() => {
                              setBlog(b); // Show selected blog at top
                              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
                            }}
                              className="text-blue-500 hover:text-blue-700 font-medium text-lg ml-2"
                            >
                              Read More
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className='px-5'>
        <div className="text-center mb-12 mt-16">
          <h1 className="text-3xl font-semibold text-black">Latest Blog Posts</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 justify-center">
  {blogDetails.slice(0, 3).map((b, index) => (
    <div key={index} className="bg-white rounded-lg border shadow p-6 w-full">
      <img src={b.imagePath} alt="Blog Post"  className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold text-black mb-4">{b.name}</h2>
      <p className="text-gray-600 mb-6 font-poppins">
        {b.description.length > 70 && expandedBlogId !== b.blogId
          ? `${b.description.slice(0, 70).trim()}...`
          : b.description}
        {b.description.length > 70 && (
          <button
            onClick={() => {
              setBlog(b); // Show selected blog at top
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            }}
            className="text-blue-500 hover:text-blue-700 font-medium text-lg ml-2"
          >
            Read More
          </button>
        )}
      </p>
    </div>
  ))}
</div>

      </div>

      {/* Ready Section */}
      <Ready />

      {/* Testimonials */}
      <div className="flex flex-col lg:flex-row justify-between max-w-[2300px] mx-auto pt-24 px-4 sm:px-8 lg:px-20">
        <div className="font-semibold mb-10 lg:mb-0">
          <h3 className="text-2xl text-center lg:text-left px-4 sm:px-10 lg:px-0">Testimonials</h3>
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-[54px] font-bold text-center lg:text-left px-4 sm:px-10 lg:px-0">
            Healing Words Testimonials from a Mental Health Consultant
          </h1>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl bg-[#007D6E] shadow-lg w-full sm:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
          <img src={blogDetail3} className="w-16 h-16 mb-4" alt="Client 1" />
          <p className="text-sm text-center text-white mb-4 font-poppins">
            "The guidance and support I received has been transformative. The personalized approach helped me develop effective strategies for managing my anxiety and stress."
          </p>
          <h1 className="text-xl text-white font-semibold mb-2">George J - Client</h1>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl shadow-lg w-full sm:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
          <img src={blogDetail6} className="w-16 h-16 mb-4" alt="Client 2" />
          <p className="text-sm text-center text-gray-600 mb-4 font-poppins">
            "Working with my consultant has been life-changing. They provided me with practical tools and insights that helped me overcome my challenges."
          </p>
          <h1 className="text-xl font-semibold mb-2">George J - Client</h1>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
