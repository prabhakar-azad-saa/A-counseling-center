import React, { useEffect, useState } from 'react';
import frameImage from "../img/svgvieweroutput.png";
import Ready from './Ready';
import blogDetail1 from "../img/blogDetail1.png";
import blogDetail2 from "../img/blogDetail2.png";
import blogDetail3 from "../img/blogDetail3.png";
import blog111 from "../img/blog111.png";
import blog222 from "../img/blog222.png";
import blog333 from "../img/blog333.png";
import blogDetail5 from "../img/blogDetail5.png";
import blogDetail6 from "../img/blogDetail6.png";
import { IoHeartSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { message } from 'antd';
import { BlogReaction,getBlogdetails } from '../action/Auth';
import { useNavigate } from "react-router-dom";


import { motion } from "framer-motion";





const Blogdetail = () => {
 const [blogDetails, setBlogDetails] = useState([]);
  const { blogId, initialStatus, userid } = location.state || {}; 
  const [status, setStatus] = useState(initialStatus); 


  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const navigate = useNavigate();


 
  
  const toggleExpand = (blogId) => {
    // console.log("Clicked blogId:", blogId); 
    setExpandedBlogId((prevId) => {
      // console.log("Previous expandedBlogId:", prevId); 
      return prevId === blogId ? null : blogId;
    });
  };

  useEffect(() => {
    getBlogdetails().then((res)=>{
      // console.log("====333===",res)
      setBlogDetails(res || []);
      // console.log("====5555===",res)
      }).catch((err)=>{
        console.log("==getBlogDetails Err===",err)
      })
  
    },[])
  

  const handleAction = async (blogId, status, userid) => {
    // console.log("=== Blog ID, Status, User ID ===", blogId, status, userid);
    try {
      await BlogReaction(blogId, status, userid);
      // console.log("=== Reaction Updated Successfully ===", blogId, status, userid);
      message.success(`Blog ${status === 1 ? "liked" : "disliked"} successfully!`);
    } catch (err) {
      console.error("Error updating blog reaction:", err);
      message.error("Failed to update blog reaction.");
    }
  };

 
  return (
    <div  className=" ">
      {/* Navbar Section */}
      <div>
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
            Professional guidance and support for your mental wellbeing journey. Our experienced consultants provide personalized strategies to help you overcome challenges and achieve emotional balance.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Blog Detail Content */}
    
      <div className="max-w-screen-xl mx-auto px-4 pt-40 sm:px-8 md:px-">
      
        <div>
          <img
          //  key={index}
            src={blogDetails[0]?.imagePath || blogDetail1}
            alt={blogDetails[0]?.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex flex-col md:flex-row gap-8 mt-24">
            {/* Blog Text */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-semibold text-black"> How Mental Health Consultants Can Help...</h1>
              {/* <p className="mt-4 text-black leading-relaxed font-poppins">
              {blog?.name} Mental health consultants play a crucial role in helping individuals navigate their emotional and psychological well-being. Through professional guidance and evidence-based approaches, these experts provide valuable support for those facing various mental health challenges.
              </p> */}
              <p className="mt-4 text-black leading-relaxed font-semibold text-xl font-poppins">
              {blogDetails[0]?.name}

              </p>
              <p className="mt-4 text-black leading-relaxed font-poppins">
              {blogDetails[0]?.description} 
                {/* <li>Professional assessment and personalized treatment plans</li>
                <li>Safe space to explore emotions and experiences</li>
                <li>Development of coping strategies and resilience</li>
                <li>Support in managing stress, anxiety, and depression</li>
                <li>Guidance in improving relationships and communication</li> */}
              </p>
              {/* <p className="mt-4 text-black leading-relaxed font-poppins">
                Our experienced consultants utilize various therapeutic approaches, including cognitive behavioral therapy, mindfulness practices, and solution-focused techniques. These methods have proven effective in helping clients achieve better mental health outcomes and improved quality of life.
              </p> */}
              {/* <p className="mt-4 text-black leading-relaxed font-poppins">The Consultation Process</p>
              <p className="mt-4 text-black leading-relaxed font-poppins">
                During your journey with a mental health consultant, you can expect:
                <ol>
                  <li>1. Initial assessment to understand your needs</li>
                  <li>2. Development of a tailored treatment plan</li>
                  <li>3. Regular sessions focused on your goals</li>
                  <li>4. Progress monitoring and plan adjustments</li>
                  <li>5. Support in maintaining long-term well-being</li>
                </ol>
              </p> */}
              <div className="pt-5">
                <button
                  className="w-6"
                  onClick={() => {
                    const newStatus =blogDetails[0]?.like === 1 ? 0 : 1;
                    setStatus(newStatus); // Update UI immediately
                    handleAction(blogDetails[0]?.blogId, newStatus, blogDetails[0]?.viewUserIds);
                  }}
                >
                  {status === 1 ? <IoHeartSharp className="text-red-500" size={28} /> : <AiOutlineHeart size={28}/>}
                </button>
              </div>
            </div>

          
            <div className="md:w-1/3 mt-12 md:mt-0 ">
           
           <h2 className="text-2xl font-semibold text-gray-800">Recommendation Blog</h2>
              <div className="flex flex-col gap-6 mt-10">
                {/* Recommended Blog 1 */}
                {/* .filter((blog) => blog.likes > 0) */}
                {blogDetails.slice(0, 3).map((blog, index) => (
     
          <div key={index} className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
            
            <img
              src={blog.imagePath}
              alt={blog.name}
              className="w-full h-auto mb-4 rounded-lg"
              style={{width:'75px',height:'75px'}}
            />
          
            <div className="pl-5">
              <h3 className="text-lg font-semibold text-black">{blog.name}</h3>
              <p className="text-black">
              {blog.description.length > 70 && expandedBlogId !== blog.blogId
          ? `${blog.description.slice(0, 70).trim()}...` // Show the first 70 characters
          : blog.description}

        {/* Only show "Read More" if the description is longer than 70 characters */}
        {blog.description.length > 70 && (
               <button
               onClick={() => navigate("/blogshow", { state: { blog } })}
               className="text-blue-500 hover:text-blue-700 font-medium text-lg ml-2"
             >
               Read More
             </button>
             
                 )}
              </p>
       
            </div>
          </div>
        ))}
                {/* Recommended Blog 2 */}
                {/* <div className="flex flex-col sm:flex-row w-full sm:w-1/2 lg:w-full">
                  <img
                    src={blogDetail5}
                    alt="Recommended Blog 2"
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <div className='pl-5'>
                    <h3 className="text-lg font-semibold text-black">Mindfulness Techniques.</h3>
                    <p className="text-black">Essential mindfulness practices for mental wellness See more</p>
                  </div>
                </div> */}
              </div>
            </div>
 
          </div>
        </div>
      
      </div>
      
      {/* Latest Blog Posts Section */}
      <div className='px-5'>
        <div className="text-center mb-12 mt-16">
          <h1 className="text-3xl font-semibold text-black">Latest Blog Posts</h1>
        </div>
       
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 justify-center">
        {blogDetails.length > 0 && blogDetails.slice(0, 3).map((blog, index) => (
  blog.blogId ? (
          <div className="bg-white rounded-lg border shadow p-6 w-full">
            <img
              src={blog.imagePath || blog111}
              alt="Blog Post 1"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-black mb-4">{blog.name}</h2>
            <p className="text-gray-600 mb-6 font-poppins">
            {blog.description.length > 70 && expandedBlogId !== blog.blogId
          ? `${blog.description.slice(0, 70).trim()}...` 
          : blog.description}

        {/* Only show "Read More" if the description is longer than 70 characters */}
        {blog.description.length > 70 && (
                 <button
                 onClick={() => navigate("/blogshow", { state: { blog } })}
                 className="text-blue-500 hover:text-blue-700 font-medium text-lg ml-2"
               >
                 Read More
               </button>
        )}
            </p>
           
          </div>):null
 ))}
        
          {/* <div className="bg-white rounded-lg border shadow p-6 w-full">
            <img
              src={blogDetails[2]?.imagePath || blog222}
              alt="Blog Post 2"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-black mb-4">{blogDetails[2]?.name}</h2>
            <p className="text-gray-600 mb-6">
            {expandedBlogId === blogDetails[2]?.id ? blogDetails[2]?.description : 
                  `${blogDetails[2]?.description.slice(0, 70).trim()}...`}
                <button
                  onClick={() => toggleExpand(blogDetails[2]?.id)}
                  className="text-blue-500 hover:text-blue-700 font-medium text-lg ml-2"
                >
                  {expandedBlogId === blogDetails[2]?.id ? "Show Less" : "Read More"}
                </button>
            </p>
           
          </div> */}

          {/* <div className="bg-white rounded-lg border shadow p-6 w-full">
            <img
              src={blogDetails[3]?.imagePath || blog333}
              alt="Blog Post 3"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{blogDetails[3]?.name}</h2>
            <p className="text-black mb-6">
            {expandedBlogId === blogDetails[3]?.id ? blogDetails[3]?.description : 
                  `${blogDetails[3]?.description.slice(0, 70).trim()}...`}
                <button
                  onClick={() => toggleExpand(blogDetails[3]?.id)}
                  className="text-blue-500 hover:text-blue-700 font-medium text-lg ml-2"
                >
                  {expandedBlogId === blogDetails[3]?.id ? "Show Less" : "Read More"}
                </button>
            </p>
          
          </div> */}
        </div>

      
      </div>

      <Ready />
      <div className="flex flex-col lg:flex-row justify-between pt-24 px-4 sm:px-8 lg:px-20">
        <div className="font-semibold mb-10 lg:mb-0">
          <h3 className="text-2xl text-center lg:text-left px-4 sm:px-10 lg:px-0">Testimonials</h3>
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-[54px] font-bold text-center lg:text-left px-4 sm:px-10 lg:px-0">
            Healing Words Testimonials from a Mental Health Consultant
          </h1>
        </div>

        {/* Testimonial 1 */}
        <div className="flex flex-col items-center p-6 rounded-xl bg-[#007D6E] shadow-lg w-full sm:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
          <img src={blogDetail3} className="w-16 h-16 mb-4" alt="Client 1" />
          <p className="text-sm text-center text-white mb-4 font-poppins">
            "The guidance and support I received has been transformative. The personalized approach helped me develop effective strategies for managing my anxiety and stress."
          </p>
          <h1 className="text-xl text-white font-semibold mb-2">George J - Client</h1>
        </div>

        {/* Testimonial 2 */}
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