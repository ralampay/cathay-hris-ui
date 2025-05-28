import axios from "axios";
import { camelToSnake } from "../utils";

export const getEmployees = (args = {}) => {
    return axios.get(
        `${API_BASE_URL}/employees`, 
        { 
            params: args 
        }
    );
}

export const saveEmployee = (employee) => {
    if (!employee.id) {
        // Create
        return axios.post(
            `${API_BASE_URL}/employees`,
            camelToSnake(employee)
        )
    } else {
        // Update
        return axios.put(
            `${API_BASE_URL}/employees/${employee.id}`,
            camelToSnake(employee)
        )
    }
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