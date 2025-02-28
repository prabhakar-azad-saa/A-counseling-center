import React, { useState } from 'react';
import Button from './Button'; 
import { useNavigate } from 'react-router-dom';
import frameImage from "../../src/assets/svgvieweroutput.png";

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const submitForm = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError('');
    setSuccessMessage(''); 

    try {
      const response = await fetch('http://192.168.1.180/Hospital/api/hospital/CreateContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        localStorage.setItem('contactData', JSON.stringify(data));

        
        setSuccessMessage('Your message has been sent successfully! Thank you for reaching out.');

       
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('API Call failed:', error);
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#FCF8F4]'>
      <nav
        className="flex w-full p-5 sm:p-10 lg:p-14 bg-cover"
        style={{ backgroundImage: `url(${frameImage})` }}
      >
        <div className="flex max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32">
            <div>
              <div className="border-l-4 h-64 p-5"></div>
            </div>
            <div>
              <h1 className="text-white text-[68px] sm:text-5xl lg:text-[68px] font-extrabold p-4">
              Contact Us
            </h1>
            <p className="text-white text-lg sm:text-xl  p-4 font-poppins">
              We're here to support you on your journey to better mental health. Our experienced counselors are
              ready to help you navigate life's challenges.
            </p>
          </div>
        </div>
      </nav>

      <div className="flex flex-col sm:flex-col lg:flex-row gap-12 py-32 px-8 bg-[#FCF8F4] ">
        <div className="flex flex-col gap-12 p-8 w-full lg:w-1/2">
          <h1 className="text-[54px]   font-bold mb-4 font-monrope w-[616px] h-[222px]">
            Contact Us Today For Personalized Support and Assistance
          </h1>
          <p className="text-lg mb-8 font-poppins w-[528px] h-[54px]">
            We're here to support you on your journey to better mental health. Our experienced counselors are ready
            to help you navigate life's challenges.
          </p>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="src/assets/contact/Call.png" alt="Video Call" className="w-8 h-8" />
              <p className="text-3xl text-bold">+14 54648272</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src="src/assets/contact/Message.png" alt="Email" className="w-8 h-8" />
              <p className="text-3xl text-bold">rona@domain.com</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src="src/assets/contact/Location.png" alt="Location" className="w-8 h-8" />
              <p className="text-3xl text-bold ">Lazyy Tower 192,Burn Swiss </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col gap-10 max-w-xl">
          <div className="flex gap-6 sm:gap-10 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label htmlFor="first-name" className="font-semibold text-2xl sm:text-3xl">First Name</label>
              <input
                type="text"
                id="first-name"
                className="w-full p-4 border rounded-full"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label htmlFor="last-name" className="font-semibold text-2xl sm:text-3xl">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="w-full p-4 border border-gray-300 rounded-full"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-6 sm:gap-10 flex-col sm:flex-row lg:flex-row">
            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="font-semibold text-2xl sm:text-3xl">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-full"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label htmlFor="phone" className="font-semibold text-2xl sm:text-3xl">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-4 border border-gray-300 rounded-full"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-semibold text-2xl sm:text-3xl">Message</label>
            <textarea
              id="message"
              className="w-full p-4 border border-gray-300 rounded-xl min-h-[120px]"
              placeholder="Your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <Button className="mt-4 p-3 bg-[#007D6E] text-white rounded-full hover:bg-[#5EB47C]" onClick={submitForm}>
            {loading ? 'Sending...' : 'Send message'}
          </Button>

          {/* Display success message */}
          {successMessage && (
            <div className="mt-4 text-green-500 font-semibold">
              {successMessage}
            </div>
          )}

          {/* Display error message */}
          {error && (
            <div className="mt-4 text-red-500 font-semibold">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Google Map */}
      <div className="px-8 py-12 sm:px-16 lg:px-32">
        <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl py-10 font-semibold text-gray-800 mb-6">
          Mapping Out Mental Health Consulting Strategies
        </h1>

        <div>
          <iframe
            title="google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473115.9060003995!2d-9.790797163012584!3d31.778265070846214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sma!4v1709282907766!5m2!1sen!2sma"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
