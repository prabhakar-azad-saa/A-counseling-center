// import axios from "axios";

// const API_BASE_URL = "https://api.apluscounselling.com:8443/api/Hospital";

// const token = localStorage.getItem("token");

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };
// const config = {
//   headers: headers,
// };

// export const login = async (email, password) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/Login`, {
//       params: { Email: email, Password: password },
//       headers: { "Content-Type": "application/json" },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("API call failed:", error);
//   }
// };

// export const register = async (formData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/Register`, formData, {
//       headers: { "Content-Type": "application/json" },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Signup failed:", error);
//   }
// };

// export const submitContactForm = async (contactData) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/Contact`,
//       contactData,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting contact form:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

// export const selecetSlot = async (selectedDate, selectedTime) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/GetSlot?Date=${selectedDate}&Time=${selectedTime}`,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting contact form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const sessionBook = async (sessionData) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/BookSession`,
//       sessionData,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting contact form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const patientTable = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/GetPatients`, config);
//     return response;
//   } catch (error) {
//     console.error(
//       "Error submitting patient form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const bookingTable = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/GetBookSessions`, config);
//     return response;
//   } catch (error) {
//     console.error(
//       "Error submitting booking form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const userCantact = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/GetContacts`, config);
//     return response;
//   } catch (error) {
//     console.error(
//       "Error submitting contact form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const getImage = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/GetImage`, config);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting GetImage:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const upcomingAppointment = async (Id) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/UpcommingAppointments?userId=${Id}`,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting upcoming appointments:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const sessionHistory = async (Id) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/SessionHistory?userId=${Id}`,
//       config
//     );
//     return response;
//   } catch (error) {
//     console.error(
//       "Error submitting SessionHistory:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const insertBlog = async (blog) => {
//   try {
//     console.log("blog", blog);
//     const response = await axios.post(
//       `${API_BASE_URL}/InsertBlog`,
//       blog,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting InsertBlog form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const uploadBlogImage = async (formData, blogId) => {
//   try {
//     const token = localStorage.getItem("token");

//     const response = await axios.post(
//       `${API_BASE_URL}/UploadBlogImage?blogId=${blogId}`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting UploadBlogImage form:",
//       error.response?.data || error.message
//     );
//   }
// };
// export const getBlogdetails = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/GetBlogDetails`, config);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting GetBlogDetails:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const getUserDetail = async (Id) => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/GetUserDetails?userId=${Id}`,
//       config
//     );
//     return response;
//   } catch (error) {
//     console.error(
//       "Error submitting GetUserDetails:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const registerAdmin = async () => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/RegisterAdmin`,
//       {},
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error submitting RegisterAdmin form:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const changeAppointment = async (sessionId, status, fullName) => {
//   try {
//     const response = await axios.put(
//       `${API_BASE_URL}/ChangeAppointmentStatus?sessionId=${sessionId}&status=${status}&userName=${fullName}`,
//       {},
//       config
//     );

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error updating appointment status:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

// export const getAllUpAppointments = async () => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}/GetAllUpAppointments`,
//       config
//     );
//     return response;
//   } catch (error) {
//     console.error(
//       "Error submitting GetAllUpAppointments:",
//       error.response?.data || error.message
//     );
//   }
// };

// export const BlogReaction = async (blogId, status, userId) => {
//   try {
//     const response = await axios.put(
//       `${API_BASE_URL}/setBlogReaction?Blogid=${blogId}&status=${status}&userid=${userId}`,
//       {},
//       config
//     );

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error updating BlogReaction status:",
//       error.response?.data || error.message
//     )
//     throw error;
//   }
// };

// export const deleteBlog = async (blogId) => {
//   try {
//     const response = await axios.delete(
//       `${API_BASE_URL}/DeleteBlog?blogId=${blogId}`,
//       config
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error deleting blog:",
//       error.response?.data || error.message
//     );
//   }
// };


// Auth.js
import axios from "axios";
import axiosInstance from "./axiosInstance";

const API_BASE_URL = "https://api.apluscounselling.com:8443/api/Hospital";

export const login = async (email, password) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Login`, {
      params: { Email: email, Password: password },
    });

    const token = response.data.token;

    // Store credentials and token
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// All remaining APIs use axiosInstance (same as before)
export const register = async (formData) => {
  try {
    const response = await axiosInstance.post("/Register", formData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
  }
};

export const submitContactForm = async (contactData) => {
  try {
    const response = await axiosInstance.post("/Contact", contactData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error.response?.data || error.message);
    throw error;
  }
};

export const selecetSlot = async (selectedDate, selectedTime) => {
  try {
    const response = await axiosInstance.get(`/GetSlot?Date=${selectedDate}&Time=${selectedTime}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching slot:", error.response?.data || error.message);
  }
};

export const sessionBook = async (sessionData) => {
  try {
    const response = await axiosInstance.post("/BookSession", sessionData);
    return response.data;
  } catch (error) {
    console.error("Error booking session:", error.response?.data || error.message);
  }
};

export const patientTable = async () => {
  try {
    const response = await axiosInstance.get("/GetPatients");
    return response;
  } catch (error) {
    console.error("Error getting patients:", error.response?.data || error.message);
  }
};

export const bookingTable = async () => {
  try {
    const response = await axiosInstance.get("/GetBookSessions");
    return response;
  } catch (error) {
    console.error("Error getting bookings:", error.response?.data || error.message);
  }
};

export const userCantact = async () => {
  try {
    const response = await axiosInstance.get("/GetContacts");
    return response;
  } catch (error) {
    console.error("Error getting contacts:", error.response?.data || error.message);
  }
};

export const getImage = async () => {
  try {
    const response = await axiosInstance.get("/GetImage");
    return response.data;
  } catch (error) {
    console.error("Error getting image:", error.response?.data || error.message);
  }
};

export const upcomingAppointment = async (Id) => {
  try {
    const response = await axiosInstance.get(`/UpcommingAppointments?userId=${Id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting upcoming appointments:", error.response?.data || error.message);
  }
};

export const sessionHistory = async (Id) => {
  try {
    const response = await axiosInstance.get(`/SessionHistory?userId=${Id}`);
    return response;
  } catch (error) {
    console.error("Error getting session history:", error.response?.data || error.message);
  }
};

export const insertBlog = async (blog) => {
  try {
    const response = await axiosInstance.post("/InsertBlog", blog);
    return response.data;
  } catch (error) {
    console.error("Error inserting blog:", error.response?.data || error.message);
  }
};

export const uploadBlogImage = async (formData, blogId) => {
  try {
    const response = await axiosInstance.post(`/UploadBlogImage?blogId=${blogId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading blog image:", error.response?.data || error.message);
  }
};

export const getBlogdetails = async () => {
  try {
    const response = await axiosInstance.get("/GetBlogDetails");
    return response.data;
  } catch (error) {
    console.error("Error getting blog details:", error.response?.data || error.message);
  }
};

export const getUserDetail = async (Id) => {
  try {
    const response = await axiosInstance.get(`/GetUserDetails?userId=${Id}`);
    return response;
  } catch (error) {
    console.error("Error getting user details:", error.response?.data || error.message);
  }
};

export const registerAdmin = async () => {
  try {
    const response = await axiosInstance.post("/RegisterAdmin", {});
    return response.data;
  } catch (error) {
    console.error("Error registering admin:", error.response?.data || error.message);
  }
};

export const changeAppointment = async (sessionId, status, fullName) => {
  try {
    const response = await axiosInstance.put(
      `/ChangeAppointmentStatus?sessionId=${sessionId}&status=${status}&userName=${fullName}`, {}
    );
    return response.data;
  } catch (error) {
    console.error("Error changing appointment status:", error.response?.data || error.message);
    throw error;
  }
};

export const getAllUpAppointments = async () => {
  try {
    const response = await axiosInstance.get("/GetAllUpAppointments");
    return response;
  } catch (error) {
    console.error("Error getting all upcoming appointments:", error.response?.data || error.message);
  }
};

export const BlogReaction = async (blogId, status, userId) => {
  try {
    const response = await axiosInstance.put(`/setBlogReaction?Blogid=${blogId}&status=${status}&userid=${userId}`, {});
    return response.data;
  } catch (error) {
    console.error("Error updating blog reaction:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteBlog = async (blogId) => {
  try {
    const response = await axiosInstance.delete(`/DeleteBlog?blogId=${blogId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting blog:", error.response?.data || error.message);
  }
};


export const blogViewed = async (blogId, userId)  => {
  try {
    const response = await axiosInstance.put(`/BlogViewed?Blogid=${blogId}&userid=${userId}`, {});
    return response.data;
  } catch (error) {
    console.error("Error updating blog view:", error.response?.data || error.message);
    throw error;
  }
};
