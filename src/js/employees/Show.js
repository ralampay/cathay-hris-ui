import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
import { EMPLOYEE } from "../models/employee";

export default Show = () => {

    // Exercise 2: Create a button to go back to /employees

    const [employee, setEmployee] = useState(EMPLOYEE);

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
        </div>
    )
}