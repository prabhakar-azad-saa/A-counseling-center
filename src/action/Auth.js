import axios from "axios";

const API_BASE_URL = "https://185.127.17.209/Hospital/api/Hospital";

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

export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Contact`, contactData);
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting contact form:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const selecetSlot = async (selectedDate) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/GetSlot?Date=${selectedDate}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting contact form:",
      error.response?.data || error.message
    );
  }
};

export const sessionBook = async (sessionData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/BookSession`,
      sessionData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting contact form:",
      error.response?.data || error.message
    );
  }
};


export const userCantact = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/GetContacts`
    );
    return response;
  } catch (error) {
    console.error(
      "Error submitting contact form:",
      error.response?.data || error.message
    );
  }
};

export const bookingTable = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/GetBookSessions`
    );
    return response;
  } catch (error) {
    console.error(
      "Error submitting booking form:",
      error.response?.data || error.message
    );
  }
};

export const patientTable = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/GetPatients`
    );
    return response;
  } catch (error) {
    console.error(
      "Error submitting patient form:",
      error.response?.data || error.message
    );
  }
};


export const upcomingAppointment = async (Id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/UpcommingAppointments?userId=${Id}`
    );
    return response.data;

  }catch (error) {console.error(
    "Error submitting upcoming appointments:",
    error.response?.data || error.message
  )}
};
