import axios from "axios";
import baseURL from "../utils/base";

const userApi = {
  getUserMessage: async (userId) => {
    const response = await axios.get(`${baseURL}/users/${userId}`);
    return response.data;
  },
  createUser: async (user) => {
    await axios.post(`${baseURL}/users`, user);
  },
};

export default userApi;
