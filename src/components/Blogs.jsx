import React, { useState, useEffect } from "react";

import frameImage from "../img/svgvieweroutput.png";
import { useNavigate } from "react-router-dom";
import blogDetail3 from "../img/blogDetail3.png";
import blogDetail4 from "../img/blogDetail4.png";
import blogImg1 from "../img/blogImg1.png";
import blogImg2 from "../img/blogImg2.png";
import blogDetail6 from "../img/blogDetail6.png";
import { getBlogdetails } from "../action/Auth";

const Blogs = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate("/" + page);
  };

 

  useEffect(() => {
        getBlogdetails()
          .then((res) => {
            setBlogDetails(res || []);
            setPopularPosts(res?.slice(0, 3) || []); 
          })
          .catch((err) => {
            console.error("Error fetching blog details:", err);
          });
      }, []);
    
  return (
    <div className="bg-[#FCF8F4]">
      <nav
        className="flex w-full p-8 sm:p-16 lg:p-28 bg-cover"
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        <div className="flex max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="flex flex-col sm:flex-row items-center w-full">
            {/* Left side: Vertical Border */}
            <div className="hidden lg:block">
              <div className="border-l-4 h-64 p-5"></div>
            </div>

            {/* Right side: Text */}
            <div className="text-center sm:text-left sm:flex-grow">
              <h1 className="text-white text-[40px] sm:text-5xl lg:text-[68px] font-extrabold p-4">
                Blog
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl p-4 font-poppins">
                Explore transformative insights and expert guidance on your
                journey to mental wellness.
              </p>
            </div>
          </div>
        </div>
      </nav>
     
      <div className="flex flex-col mt-20 sm:flex-row justify-evenly sm:gap-12 p-8 ">
        
      {blogDetails.map((blog, index) => (
        <div
         key={index}
          className="flex flex-col sm:w-1/2 rounded-lg shadow-lg p-6 mb-8 bg-white"
          onClick={() => handleClick("blogdetail")}
        >
          <img
                src={blog.imagePath || blogImg1}
                alt={blog.title}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
          <button
            className="text-xs sm:text-sm md:text-lg font-bold bg-[#7AC258] rounded-3xl 
  w-[50%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto px-4 py-2 
  text-white mb-3 text-center"
          >
           {blog?.type}
          </button>

          <h1 className="text-3xl font-semibold mb-4">
          {blog.name}
          </h1>
          <p className="text-base text-gray-700 mb-6 font-poppins">
          {blog.description.length > 70
          ? `${blog.description.slice(0, 70).trim()}...`
          : blog.description}<a>see more</a>
          </p>
        </div>
      ))}
        

        <div className="sm:w-1/2 rounded-lg shadow-lg p-6  mb-8 bg-white">
          <h1 className="text-3xl font-semibold mb-4">Popular Posts</h1>
          <div className="space-y-6">
          {popularPosts.map((post, index) => (
            <div
             key={index}
              className="flex items-center gap-4"
              onClick={() => handleClick("blogdetail")}
            >
              <img
                src={post?.imagePath}
                alt={post.title}
                className="object-cover rounded-lg mb-4"
                style={{width:'75px',height:'75px'}}
              />
             <div className="flex flex-col">
             <p className="text-lg font-poppins">
             {post.name} 
              </p>
              <p className="text-sm">4.2K views</p>
             </div>

            </div>
            ))}
            {/* <div
              className="flex items-center gap-4"
              onClick={() => handleClick("blogdetail")}
            >
              <img
                src={blogDetail6}
                alt="Work-Life Balance Tips"
                className="w-20 h-20 object-cover"
              />
             <div className="flex flex-col">
             <p className="text-base font-poppins">Work-Life Balance Tips</p>
             <p className="text-sm">4.2K views</p>
             </div>
            </div> */}
            {/* <div
              className="flex items-center gap-4"
              onClick={() => handleClick("blogdetail")}
            >
              <img
                src={blogImg1}
                alt="10 Minutes to Better Mental Health"
                className="w-20 h-20 object-cover"
              />
             <div className="flex flex-col">
             <p className="text-base font-poppins">
                10 Minutes to Better Mental Health
              </p>
              <p className="text-sm">4.2K views</p>
             </div>
            </div> */}
          </div>
        </div>
      </div>

       <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            onClick={() => handleClick("blogdetail")}
          >
            <img
              src={blogDetail4}
              alt="Understanding Different Types of Therapy: Finding What Works for You"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <button
              className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-3xl 
  w-[50%] sm:w-[40%] md:w-[50%]  h-auto px-4 py-2 
  text-white mb-3 text-center"
            >
              Mindfulness
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Understanding Different Types of Therapy: Finding What Works for
              You
            </h2>
            <p className="text-gray-600 font-poppins">
              Explore various therapeutic approaches and learn how to choose the
              right one for your mental health journey.
            </p>
          </div>

          
          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            onClick={() => handleClick("blogdetail")}
          >
            <img
              src={blogDetail3}
              alt="Natural Anxiety Relief: Simple Techniques for Daily Calm"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <button
              className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-3xl 
  w-[50%] sm:w-[40%]  md:w-[50%]  h-auto px-4 py-2 
  text-white mb-3 text-center"
            >
              Mindfulness
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Natural Anxiety Relief: Simple Techniques for Daily Calm
            </h2>
            <p className="text-gray-600 font-poppins">
              Discover practical methods to manage anxiety naturally and create
              more peace in your daily life.
            </p>
          </div>

         
          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            onClick={() => handleClick("blogdetail")}
          >
            <img
              src={blogDetail4}
              alt="Understanding Different Types of Therapy: Finding What Works for You"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <button
              className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-3xl 
  w-[50%] sm:w-[40%] md:w-[50%]  h-auto px-4 py-2 
  text-white mb-3 text-center"
            >
              Mindfulness
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Understanding Different Types of Therapy: Finding What Works for
              You
            </h2>
            <p className="text-gray-600 font-poppins">
              Explore various therapeutic approaches and learn how to choose the
              right one for your mental health journey.
            </p>
          </div>
        </div>
      </div> 
      {/* <div className="max-w-3xl mx-auto p-6">
      <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-lg shadow-md" />
      <h1 className="text-3xl font-semibold mt-6 text-gray-900">{post.title}</h1>
      <p className="text-lg mt-4 text-gray-700 leading-relaxed">{post.content}</p>
    </div> */}

      {/* <div className="flex items-center p-4 border-b border-gray-300 space-x-4">
      
      <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover rounded-md" />

    
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
      </div>
    </div> */}
    </div>
  );
};

export default Blogs;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import frameImage from "../img/svgvieweroutput.png";
// import blogImg1 from "../img/blogImg1.png";
// import blogImg2 from "../img/blogImg2.png";
// import blogDetail3 from "../img/blogDetail3.png";
// import blogDetail4 from "../img/blogDetail4.png";
// import blogDetail6 from "../img/blogDetail6.png";
// import { getBlogdetails } from "../action/Auth";

// const Blogs = () => {
//   const [blogDetails, setBlogDetails] = useState([]);
//   const [popularPosts, setPopularPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getBlogdetails()
//       .then((res) => {
//         setBlogDetails(res || []);
//         setPopularPosts(res?.slice(0, 3) || []); 
//       })
//       .catch((err) => {
//         console.error("Error fetching blog details:", err);
//       });
//   }, []);

//   const handleClick = (page) => {
//     navigate("/" + page);
//   };
// console.log('=============================290===================================',blogDetails)
//   return (
//     <div className="bg-[#FCF8F4]">
//       <nav
//         className="flex w-full p-8 sm:p-16 lg:p-28 bg-cover"
//         style={{ backgroundImage: `url(${frameImage})` }}
//       >
//         <div className="flex max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
//           <div className="flex flex-col sm:flex-row items-center w-full">
//             <div className="hidden lg:block">
//               <div className="border-l-4 h-64 p-5"></div>
//             </div>
//             <div className="text-center sm:text-left sm:flex-grow">
//               <h1 className="text-white text-[40px] sm:text-5xl lg:text-[68px] font-extrabold p-4">
//                 Blog
//               </h1>
//               <p className="text-white text-base sm:text-lg md:text-xl p-4 font-poppins">
//                 Explore transformative insights and expert guidance on your journey to mental wellness.
//               </p>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
//         <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogDetails.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg p-6 mb-8 cursor-pointer"
//               onClick={() => handleClick("blogdetail")}
//             >
//               <img
//                 src={blog.imagePath || blogDetail4}
//                 alt={blog.title}
//                 className="w-full h-auto object-cover rounded-lg mb-4"
//               />
//               <button className="text-sm sm:text-lg font-bold bg-[#7AC258] rounded-2xl px-4 py-2 text-white mb-3">
//                 {blog?.type}
//               </button>
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.name}</h2>
//               <p className="text-gray-600 font-poppins">{blog.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="sm:col-span-1 bg-white rounded-lg shadow-lg p-6">
//           <h1 className="text-3xl font-semibold mb-4">Popular Posts</h1>
//           <div className="space-y-6">
//             {popularPosts.map((post, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 cursor-pointer"
//                 onClick={() => handleClick("blogdetail")}
//               >
//                 <img
//                   src={post.image || blogImg2}
//                   alt={post.title}
//                   className="w-20 h-20 object-cover rounded-lg"
//                 />
//                 <p className="font-bold text-xl font-poppins">{post.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
