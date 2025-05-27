import React, { useRef, useState } from "react";
import { EMPLOYEE } from "../models/employee";
import { EMPLOYEE_RATE } from "../models/employeeRate";
import { formatMobileNumber } from "../utils";

export default Form = () => {
    const [employee, setEmployee] = useState(EMPLOYEE);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const renderMobileErrorMessage = () => {
        if (employee.mobileNumber.length != 9) {
            setErrorMessage("Invalid mobile number");
        } else {
            setErrorMessage("Good job");
        }
    }

    return (
        <div>
            {errorMessage}
            <h1>
                Name: {employee.lastName}, {employee.firstName}
            </h1>
            <h2>
                Mobile Number: {formatMobileNumber(employee.mobileNumber)}
            </h2>
            <label>
                First Name:
            </label>
            <input
                value={employee.firstName}
                disabled={isLoading}
                onChange={(event) => {
                    setEmployee({...employee,
                        firstName: event.target.value
                    })
                }}
            />
            <hr/>
            <label>
                Last Name:
            </label>
            <input
                value={employee.lastName}
                onChange={(event) => {
                    setEmployee({...employee,
                        lastName: event.target.value
                    })
                }}
            />
            <hr/>
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
            >
                <option value="">-- SELECT --</option>
                <option value="F">Female</option>
                <option value="M">Male</option>
            </select>
            <hr/>
            <label>
                Mobile Number
            </label>
            <input
                value={employee.mobileNumber}
                disabled={isLoading}
                onChange={(event) => {
                    let newMobileNumber = event.target.value;
                    console.log(`newMobileNumber: ${newMobileNumber}`);

                    renderMobileErrorMessage();
                    setEmployee({...employee,
                        mobileNumber: newMobileNumber
                    })
                }}
            />
            <hr/>
            {employee.employeeRates.map((employeeRateObj, i) => {
                return (
                    <div>
                        <input
                            value={employeeRateObj.effectivityDate}
                            type="date"
                            onChange={(event) => {
                                let newEmployee = {...employee};
                                newEmployee.employeeRates[i].effectivityDate = event.target.value;
                                
                                setEmployee(newEmployee);
                            }}
                        />
                        <input
                            value={employeeRateObj.rate}
                            type="number"
                            onChange={(event) => {
                                let newEmployee = {...employee};
                                newEmployee.employeeRates[i].rate = event.target.value;
                                
                                setEmployee(newEmployee);
                            }}
                        />
                    </div>
                )
            })}
            <hr/>
            <button
                disabled={isLoading}
                onClick={() => {
                    console.log("Saving employee...");
                    setIsLoading(true);
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                    setEmployee({...EMPLOYEE})
                }}
            >
                Clear
            </button>
            <button
                onClick={() => {
                    let newRates = [...employee.employeeRates];
                    newRates.push({...EMPLOYEE_RATE});

                    setEmployee({...employee,
                        employeeRates: newRates
                    })

                    console.log(employee);
                }}
            >
                Add Employee Rate
            </button>
            <hr/>
        </div>
    )
}