import React, { useState, useEffect } from "react";
import Table from "./Table";
import { getEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default Index = () => {
    const [employees, setEmployees] = useState([]);
    const [args, setArgs] = useState({ q: '', gender: '' });

    const navigate = useNavigate();

    const refreshEmployees = () => {
        getEmployees(args).then((response) => {
            console.log(response.data);
            setEmployees(response.data);
        })
    }

    useEffect(() => {
        refreshEmployees();
    }, [args])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>
                            Query by Name
                        </label>
                        <input
                            className="form-control"
                            value={args.q}
                            onChange={(event) => {
                                setArgs({...args,
                                    q: event.target.value
                                })
                            }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>
                            Gender
                        </label>
                        <select
                            className="form-control"
                            value={args.gender}
                            onChange={(event) => {
                                setArgs({...args,
                                    gender: event.target.value
                                })
                            }}
                        >
                            <option value="">-- SELECT --</option>
                            <option value="F">Female</option>
                            <option value="M">Male</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr/>
            <button
                className="btn btn-success"
                onClick={() => {
                    navigate(`/employees/new`)
                }}
            >
                <FontAwesomeIcon icon={faPlus}/>
                <span className="ms-2">
                    New Employee
                </span>
            </button>
            <hr/>
            <div className="mt-2"/>
            <Table 
                employees={employees}
                refresh={refreshEmployees}
            />
            <hr/>
            <button
                className="btn btn-secondary"
                onClick={() => {
                    navigate('/');
                }}
            >
                Back to Dashboard
            </button>
        </div>
    )
}