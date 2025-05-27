import axios from "axios";

export const getEmployees = (args = {}) => {
    return axios.get(
        `${API_BASE_URL}/employees`, 
        { 
            params: args 
        }
    );
}

export const getEmployee = (id) => {
    return axios.get(
        `${API_BASE_URL}/employees/${id}`
    )
}

export const deleteEmployee = (id) => {
    return axios.delete(
        `${API_BASE_URL}/employees/${id}`
    )
}