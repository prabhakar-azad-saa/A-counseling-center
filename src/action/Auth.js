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


import axios from "axios";

const API_BASE_URL = "https://api.apluscounselling.com:8443/api/Hospital";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Auto-login function
const autoLogin = async () => {
  const email = localStorage.getItem("loginEmail");
  const password = localStorage.getItem("loginPassword");

  if (!email || !password) return null;

  try {
    const response = await axios.get(
      `${API_BASE_URL}/Login?Email=${email}&Password=${password}`
    );
    const newToken = response.data.token;
    if (newToken) {
      localStorage.setItem("token", newToken);
      return newToken;
    }
  } catch (error) {
    console.error("Auto-login failed:", error);
    return null;
  }
};

// 🛠 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ⚠️ Response Interceptor for 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newToken = await autoLogin();

      if (newToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

// ✅ Save email & password on login
export const login = async (email, password) => {
  localStorage.setItem("loginEmail", email);
  localStorage.setItem("loginPassword", password);

  const response = await axiosInstance.get("/Login", {
    params: { Email: email, Password: password },
  });

  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const register = async (formData) => {
  const response = await axiosInstance.post("/Register", formData);
  return response.data;
};

export const submitContactForm = async (contactData) => {
  const response = await axiosInstance.post("/Contact", contactData);
  return response.data;
};

export const selecetSlot = async (selectedDate, selectedTime) => {
  const response = await axiosInstance.get(
    `/GetSlot?Date=${selectedDate}&Time=${selectedTime}`
  );
  return response.data;
};

export const sessionBook = async (sessionData) => {
  const response = await axiosInstance.post("/BookSession", sessionData);
  return response.data;
};

export const patientTable = async () => {
  return axiosInstance.get("/GetPatients");
};

export const bookingTable = async () => {
  return axiosInstance.get("/GetBookSessions");
};

export const userCantact = async () => {
  return axiosInstance.get("/GetContacts");
};

export const getImage = async () => {
  const response = await axiosInstance.get("/GetImage");
  return response.data;
};

export const upcomingAppointment = async (Id) => {
  const response = await axiosInstance.get(`/UpcommingAppointments?userId=${Id}`);
  return response.data;
};

export const sessionHistory = async (Id) => {
  return axiosInstance.get(`/SessionHistory?userId=${Id}`);
};

export const insertBlog = async (blog) => {
  const response = await axiosInstance.post("/InsertBlog", blog);
  return response.data;
};

export const uploadBlogImage = async (formData, blogId) => {
  const response = await axiosInstance.post(
    `/UploadBlogImage?blogId=${blogId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const getBlogdetails = async () => {
  const response = await axiosInstance.get("/GetBlogDetails");
  return response.data;
};

export const getUserDetail = async (Id) => {
  return axiosInstance.get(`/GetUserDetails?userId=${Id}`);
};

export const registerAdmin = async () => {
  const response = await axiosInstance.post("/RegisterAdmin");
  return response.data;
};

export const changeAppointment = async (sessionId, status, fullName) => {
  const response = await axiosInstance.put(
    `/ChangeAppointmentStatus?sessionId=${sessionId}&status=${status}&userName=${fullName}`
  );
  return response.data;
};

export const getAllUpAppointments = async () => {
  return axiosInstance.get("/GetAllUpAppointments");
};

export const BlogReaction = async (blogId, status, userId) => {
  const response = await axiosInstance.put(
    `/setBlogReaction?Blogid=${blogId}&status=${status}&userid=${userId}`
  );
  return response.data;
};

export const deleteBlog = async (blogId) => {
  const response = await axiosInstance.delete(`/DeleteBlog?blogId=${blogId}`);
  return response.data;
};
