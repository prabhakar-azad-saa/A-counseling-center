import axios from "axios";

const API_BASE_URL = "https://api.apluscounselling.com:8443/api/Hospital";
const token = localStorage.getItem("token");

const authHeader = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

// LOGIN
export const login = async (email, password) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Login`, {
      params: { Email: email, Password: password },
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
  }
};

// REGISTER
export const register = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Register`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
  }
};

// CONTACT FORM
export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Contact`, contactData, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error.response?.data || error.message);
    throw error;
  }
};

// SELECT SLOT
export const selecetSlot = async (selectedDate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetSlot?Date=${selectedDate}`, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching slots:", error.response?.data || error.message);
  }
};

// SESSION BOOKING
export const sessionBook = async (sessionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/BookSession`, sessionData, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error booking session:", error.response?.data || error.message);
  }
};

// PATIENT TABLE
export const patientTable = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetPatients`, {
      headers: authHeader,
    });
    return response;
  } catch (error) {
    console.error("Error fetching patients:", error.response?.data || error.message);
  }
};

// BOOKING TABLE
export const bookingTable = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetBookSessions`, {
      headers: authHeader,
    });
    return response;
  } catch (error) {
    console.error("Error fetching bookings:", error.response?.data || error.message);
  }
};

// GET CONTACTS
export const userCantact = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetContacts`, {
      headers: authHeader,
    });
    return response;
  } catch (error) {
    console.error("Error fetching contacts:", error.response?.data || error.message);
  }
};

// GET IMAGE
export const getImage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetImage`, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error.response?.data || error.message);
  }
};

// UPCOMING APPOINTMENT
export const upcomingAppointment = async (Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/UpcommingAppointments?userId=${Id}`, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming appointments:", error.response?.data || error.message);
  }
};

// SESSION HISTORY
export const sessionHistory = async (Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/SessionHistory?userId=${Id}`, {
      headers: authHeader,
    });
    return response;
  } catch (error) {
    console.error("Error fetching session history:", error.response?.data || error.message);
  }
};

// INSERT BLOG
export const insertBlog = async (blog) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/InsertBlog`, blog, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error inserting blog:", error.response?.data || error.message);
  }
};

// UPLOAD BLOG IMAGE
export const uploadBlogImage = async (formData, blogId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/UploadBlogImage?blogId=${blogId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading blog image:", error.response?.data || error.message);
  }
};

// GET BLOG DETAILS
export const getBlogdetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetBlogDetails`, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching blog details:", error.response?.data || error.message);
  }
};

// GET USER DETAILS
export const getUserDetail = async (Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetUserDetails?userId=${Id}`, {
      headers: authHeader,
    });
    return response;
  } catch (error) {
    console.error("Error fetching user details:", error.response?.data || error.message);
  }
};

// REGISTER ADMIN
export const registerAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/RegisterAdmin`, adminData, {
      headers: authHeader,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering admin:", error.response?.data || error.message);
  }
};

// CHANGE APPOINTMENT STATUS
export const changeAppointment = async (sessionId, status, fullName) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/ChangeAppointmentStatus?sessionId=${sessionId}&status=${status}&userName=${fullName}`,
      {},
      {
        headers: authHeader,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error changing appointment status:", error.response?.data || error.message);
    throw error;
  }
};

// GET ALL UPCOMING APPOINTMENTS
export const getAllUpAppointments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/GetAllUpAppointments`, {
      headers: authHeader,
    });
    return response;
  } catch (error) {
    console.error("Error fetching all upcoming appointments:", error.response?.data || error.message);
  }
};

// BLOG REACTION
export const BlogReaction = async (blogId, status, userid) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/setBlogReaction?Blogid=${blogId}&status=${status}&userid=${userid}`,
      {},
      {
        headers: authHeader,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error reacting to blog:", error.response?.data || error.message);
    throw error;
  }
};
