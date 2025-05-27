import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
import { EMPLOYEE } from "../models/employee";
import { useNavigate } from "react-router-dom";

export default Show = () => {

    // Exercise 2: Create a button to go back to /employees

    const [employee, setEmployee] = useState(EMPLOYEE);

    const navigate = useNavigate();

    const {
        id
    } = useParams();

    useEffect(() => {
        getEmployee(id).then((response) => {
            setEmployee(response.data)
        })
    }, []);

    return (
        <div>
            <h1>
                {employee.firstName} {employee.lastName}
            </h1>
            <hr/>
            <button
                className="btn btn-secondary"
                onClick={() => {
                    navigate('/employees')
                }}
            >
                Back to Employees
            </button>
        </div>
    )
}