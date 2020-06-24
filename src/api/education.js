import axios from "axios";
import baseURL from "../utils/base";

const educationApi = {
  getEducationMessage: async (userId) => {
    const response = await axios.get(`${baseURL}/users/${userId}/educations`);
    return response.data;
  },
  createEducation: async (userId, education) => {
    await axios.post(`${baseURL}/users/${userId}/educations`, education);
  },
};

export default educationApi;
