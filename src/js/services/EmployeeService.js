import axios from "axios";

export const getEmployees = (args = {}) => {
    return axios.get(`${API_BASE_URL}/employees`, { params: args });
}