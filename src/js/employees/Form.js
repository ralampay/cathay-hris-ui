import React, { useRef, useState } from "react";
import { EMPLOYEE } from "../models/employee";
import { EMPLOYEE_RATE } from "../models/employeeRate";
import { formatMobileNumber, getInputClassName, renderInputErrors } from "../utils";
import { useParams, useNavigate } from "react-router-dom";
import { saveEmployee, getEmployee } from "../services/EmployeeService";
import Loader from "../Loader";
import { snakeToCamel } from "../utils";

export default Form = () => {
    const [employee, setEmployee]   = useState(EMPLOYEE);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors]       = useState({});

    const navigate = useNavigate();

    const {
        id
    } = useParams();

    if (id) {
        getEmployee(id).then((response) => {
            setEmployee(response.data);
        })
    }

    const handleSave = () => {
        setIsLoading(true);
        saveEmployee({...employee}).then((response) => {
            navigate(`/employees/${response.data.id}`)
        }).catch((payload) => {
            let newErrors = snakeToCamel(payload.response.data);
            console.log(newErrors);
            setErrors(newErrors);
            setIsLoading(false);
        })
    }

    return (
        <div>
            <div className="form-group">
                <label>
                    First Name
                </label>
                <input
                    value={employee.firstName}
                    disabled={isLoading}
                    onChange={(event) => {
                        setEmployee({...employee, 
                            firstName: event.target.value
                        })
                    }}
                    className={getInputClassName(errors, 'firstName')}
                />
                {renderInputErrors(errors, 'firstName')}
            </div>
            <div className="mt-2"/>
            <div className="form-group">
                <label>
                    Last Name
                </label>
                <input
                    value={employee.lastName}
                    disabled={isLoading}
                    onChange={(event) => {
                        setEmployee({...employee, 
                            lastName: event.target.value
                        })
                    }}
                    className="form-control"
                />
            </div>
            <div className="mt-2"/>
            <div className="form-group">
                <label>
                    Gender
                </label>
                <select
                    value={employee.gender}
                    disabled={isLoading}
                    onChange={(event) => {
                        setEmployee({...employee, 
                            gender: event.target.value
                        })
                    }}
                    className="form-control"
                >
                    <option value="">-- SELECT --</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                </select>
            </div>
            <div className="form-group">
                <label>
                    Mobile Number
                </label>
                <input
                    value={employee.mobileNumber}
                    disabled={isLoading}
                    onChange={(event) => {
                        setEmployee({...employee,
                            mobileNumber: event.target.value
                        })
                    }}
                    className="form-control"
                />
            </div>
            <hr/>
            {isLoading &&
                <Loader/>
            }
            <button
                className="btn btn-primary"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    )
}