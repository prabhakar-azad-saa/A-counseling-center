import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogdetails,deleteBlog } from "../action/Auth";
import { MdOutlineDelete } from "react-icons/md";
import Loader from "./Loader";

const Blogsection = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(false);
    const [refreshBlogs, setRefreshBlogs] = useState(false);
    // const [userData, setUserData] = useState("");
    
  
  const navigate = useNavigate();

  useEffect(() => {
    getBlogdetails()
      .then((res) => {
        const sortedBlogs = (res || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogDetails(sortedBlogs);
        setPopularPosts(sortedBlogs.slice(0, 3));
      })
      .catch((err) => {
        console.error("Error fetching blog details:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshBlogs]);
  

  const handleClick = (route, blogId, initialStatus, userid) => {
    navigate(`/${route}`, {
      state: { blogId, initialStatus, userid },
    });
  };

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

  return (
    <>
     <Loader isLoading={loading} />
      <div className="p-8 bg-[#FCF8F4]  mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-black">Latest Blog Posts</h1>
        </div>
      </div>

      <div className="p-8 max-w-[1800px] mx-auto">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogDetails.slice(0,3).map((blog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-2xl p-6 mb-8">
                <img
                  src={blog.imagePath || "https://via.placeholder.com/300"}
                  alt={blog.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <button className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-3xl w-[50%] px-4 py-2 text-white mb-3">
                  {blog.type}
                </button>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.name}</h2>
                <p className="text-gray-600 font-poppins text-justify">
                  {blog.description.length > 70
                    ? `${blog.description.slice(0, 70).trim()}...`
                    : blog.description}{" "}
                  <span
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
                  </span>
                </p>
                <div
                  className="cursor-pointer mt-2"
                  style={{ float: "right" }}
                  onClick={() => handledeleteBlog(blog?.blogId || blog?.id)}
                >
                  {/* <MdOutlineDelete size={24} color="red" /> */}
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default Blogsection;
