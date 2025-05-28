import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
import { EMPLOYEE } from "../models/employee";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
                className="btn btn-warning"
                onClick={() => {
                    navigate(`/employees/${id}/edit`)
                }}
            >
                <FontAwesomeIcon icon={faPencil} />
                <span className="ms-2">
                    Edit
                </span>
            </button>
            <button
                className="btn btn-secondary ms-2"
                onClick={() => {
                    navigate('/employees')
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft}/>
                <span className="ms-2">
                    Back to Employees
                </span>
            </button>
        </div>
    )
}