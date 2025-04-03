import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogdetails } from "../action/Auth";


import blog111 from "../img/blog111.png"
import blog222 from "../img/blog222.png"
import blog333 from "../img/blog333.png"

const Blogsection = () => {

   const [blogDetails, setBlogDetails] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
     const [loading, setLoading] = useState(false);
  
    // const navigate = useNavigate();
  
    // const handleClick = (page, blogId, initialStatus, userid) => {
    //   navigate(`/${page}`, {
    //     state: { blogId, initialStatus, userid },
    //   });
    // };
  
   
  
    useEffect(() => {
          getBlogdetails()
            .then((res) => {
              setBlogDetails(res || []);
              setPopularPosts(res?.slice(0, 3) || []); 
            })
            .catch((err) => {
              console.error("Error fetching blog details:", err);
            })
            .finally(() => {
              setLoading(false); // Hide loader after API response
            });
        }, []);

  
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/blogs");
    };
  
  return (
    <div className="p-8 bg-[#FCF8F4]">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-black">Latest Blog Posts</h1>
      </div>

      {/* Blog Post Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
         {popularPosts.map((post, index) => (
        <div className="bg-white rounded-lg border p-6 w-full">
          <img
            src={post?.imagePath}
            alt={post.title}
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {post.name} 
          </h2>
          <p className="text-gray-600 mb-6 font-poppins">
          {post.description.length > 70
          ? `${post.description.slice(0, 70).trim()}...`
          : post.description} <a onClick={handleClick} className="text-blue-500 hover:text-blue-700 font-medium text-lg">
          Read More
        </a>
          </p>
          
        </div>
         ))}
        {/* <div className="bg-white rounded-lg border p-6 w-full">
          <img
            src={ blog222}
            alt="Blog Post 2"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          5 Daily Habits for Better Mental Health
          </h2>
          <p className="text-gray-600 mb-6">
          Discover simple yet effective daily practices that can improve your mental wellbeing...
          </p>
          <a onClick={handleClick} className="text-blue-500 hover:text-blue-700 font-medium text-lg">
            Read More
          </a>
        </div> */}
{/* 
        <div className="bg-white rounded-lg border p-6 w-full">
          <img
            src={ blog333}
            alt="Blog Post 3"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          The Power of Mindfulness Meditation
          </h2>
          <p className="text-gray-600 mb-6">
          Explore how mindfulness meditation can transform your mental state...
          </p>
          <a onClick={handleClick} className="text-blue-500 hover:text-blue-700 font-medium text-lg">
            Read More
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Blogsection;
