import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineDelete } from "react-icons/md";
import frameImage from "../img/svgvieweroutput.png";
import blogImg1 from "../img/blogImg1.png";
import blogDetail4 from "../img/blogDetail4.png";
import { deleteBlog, getBlogdetails } from "../action/Auth";
import Loader from "./Loader";

const Blogs = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshBlogs, setRefreshBlogs] = useState(false);
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  const handleClick = (page, blogId, initialStatus, userid) => {
    navigate(`/${page}`, {
      state: { blogId, initialStatus, userid },
    });
  };




  function formatLikes(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return number.toString();
  }
  

  useEffect(() => {
  
    setUserData(JSON.parse(localStorage.getItem("userData")));

    setLoading(true);
    getBlogdetails()
      .then((res) => {
        if (res && Array.isArray(res)) {
          const sortedBlogs = [...res].sort(
            (a, b) => (b.like || 0)+1 - (a.like || 0)-1
          );
          setBlogDetails(res || []);
          setPopularPosts(sortedBlogs.slice(0, 3)); 
        }
      })
      .catch((err) => {
        console.error("Error fetching blog details:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshBlogs]);

  const handledeleteBlog = (blogId) => {
    setLoading(true);
    deleteBlog(blogId)
      .then((res) => {
        console.log("===deleteBlog===", res);
        setRefreshBlogs((prev) => !prev);
        setLoading(false);
      })
      .catch((err) => {
        console.log("===deleteBlog err===", err);
        setLoading(false);
      });
  };
  console.log("=================62==========", userData?.role);
  return (
    <>
      <Loader isLoading={loading} />
      <div className="bg-[#FCF8F4]">
        {/* Hero Section */}
        {/* <div
          className="relative w-full h-[500px] overflow-hidden"
          style={{
            backgroundImage: `url(${frameImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 opacity-50"></div>
          <div className="relative z-10 w-full max-w-[2300px] mx-auto px-5">
            <div className="grid mt-12 grid-cols-1 md:grid-cols-1 items-center gap-1 min-h-[500px]">
              <div className="flex flex-row ml-8 items-center  space-x-8">
                <div className="h-60 border-l-2 border-white"></div>
                <div className="flex flex-col text-center md:text-left">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="text-5xl font-bold text-white mb-4"
                  >
                    Blog
                  </motion.h2>
                  <br />
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    className="text-lg text-white"
                  >
                    Explore transformative insights and expert guidance on your
                    journey to mental wellness
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

           <div className="flex flex-col items-center justify-center pt-14 px-4">
                      <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4"
                      >
                        Blog
                      </motion.h1>
                
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-base sm:text-lg md:text-base text-center text-gray-700 max-w-2xl"
                      >
                        Explore transformative insights and expert guidance on your
                        journey to mental wellness  
                      </motion.p>
                
                      {/* Optional: Add a subtle glowing underline animation */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-1 w-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-4 origin-left rounded-full"
                      />
                    </div>

        {/* Featured Blog + Popular Posts */}
        <div className="flex flex-col mt-20 sm:flex-row justify-evenly sm:gap-12 p-8">
          {/* Featured Blog */}
          <div className="flex flex-col sm:w-1/2 rounded-lg shadow-2xl p-6 mb-8 bg-white">
            <img
              src={blogDetails[0]?.imagePath || blogImg1}
              alt={blogDetails[0]?.title}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <button className="text-xs sm:text-sm md:text-lg font-bold bg-[#7AC258] rounded-3xl w-[50%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto px-4 py-2 text-white mb-3 text-center">
              {blogDetails[0]?.type}
            </button>

            <h1 className="text-3xl font-semibold mb-4">
              {blogDetails[0]?.name}
            </h1>
            <p className="text-base text-gray-700 mb-6 font-poppins">
              {blogDetails[0]?.description.length > 70
                ? `${blogDetails[0]?.description.slice(0, 70).trim()}...`
                : blogDetails[0]?.description}{" "}
              <a
                className="text-blue-500 hover:text-blue-700 font-medium text-lg cursor-pointer"
                onClick={() =>
                  handleClick(
                    "blogdetail",
                    blogDetails[0]?.blogId || blogDetails[0]?.id,
                    blogDetails[0]?.initialStatus,
                    blogDetails[0]?.userid
                  )
                }
              >
                Read More
              </a>
            </p>
            {userData?.role === "Admin" && (
              <div
                style={{ float: "right" }}
                onClick={() => handledeleteBlog(blogDetails[0]?.id)}
              >
                <MdOutlineDelete size={24} color="red" />
              </div>
            )}
          </div>

          {/* Popular Posts */}
          <div className="sm:w-1/2 rounded-lg shadow-2xl p-6 mb-8 bg-white">
            <h1 className="text-3xl font-semibold mb-4">Popular Posts</h1>
            <div className="space-y-6">
              {popularPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() =>
                    handleClick(
                      "blogdetail",
                      post.blogId || post.id,
                      post.initialStatus,
                      post.userid
                    )
                  }
                >
                  <img
                    src={post?.imagePath || blogImg1}
                    alt={post?.title}
                    className="object-cover rounded-lg mb-4"
                    style={{ width: "75px", height: "75px" }}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-poppins">{post?.name}</p>
                    <p>{formatLikes(post?.like || 0)}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog List */}
        {/* <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogDetails.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-6 mb-8"
              >
                <img
                  src={blog.imagePath || blogDetail4}
                  alt={blog.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-4"
                />
                <button className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-3xl w-[50%] sm:w-[40%] md:w-[50%] h-auto px-4 py-2 text-white mb-3 text-center">
                  {blog.type}
                </button>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.name}
                </h2>
                <p className="text-gray-600 font-poppins">
                  {blog.description.length > 70
                    ? `${blog.description.slice(0, 70).trim()}...`
                    : blog.description}{" "}
                  <a
                    className="text-blue-500 hover:text-blue-700 font-medium text-lg cursor-pointer"
                    onClick={() =>
                      handleClick(
                        "blogdetail",
                        blog.blogId || blog.id,
                        blog.initialStatus,
                        blog.userid
                      )
                    }
                  >
                    Read More
                  </a>
                </p>
                {userData?.role === "Admin" && (
                  <div
                    className="cursor-pointer"
                    style={{ float: "right" }}
                    onClick={() => handledeleteBlog(blog?.blogId || blog?.id)}
                  >
                    <MdOutlineDelete size={24} color="red" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}

<div className="p-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...blogDetails]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by latest first
      .map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-2xl p-6 mb-8"
        >
          <img
            src={blog.imagePath || blogDetail4}
            alt={blog.name}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-4"
          />
          <button className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-3xl w-[50%] sm:w-[40%] md:w-[50%] h-auto px-4 py-2 text-white mb-3 text-center">
            {blog.type}
          </button>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {blog.name}
          </h2>
          <p className="text-gray-600 font-poppins">
            {blog.description.length > 70
              ? `${blog.description.slice(0, 70).trim()}...`
              : blog.description}{" "}
            <a
              className="text-blue-500 hover:text-blue-700 font-medium text-lg cursor-pointer"
              onClick={() =>
                handleClick(
                  "blogdetail",
                  blog.blogId || blog.id,
                  blog.initialStatus,
                  blog.userid
                )
              }
            >
              Read More
            </a>
          </p>
          {userData?.role === "Admin" && (
            <div
              className="cursor-pointer"
              style={{ float: "right" }}
              onClick={() => handledeleteBlog(blog?.blogId || blog?.id)}
            >
              <MdOutlineDelete size={24} color="red" />
            </div>
          )}
        </div>
      ))}
  </div>
</div>

      </div>
    </>
  );
};

export default Blogs;
