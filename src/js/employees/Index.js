import React, { useState, useEffect } from "react";
import Table from "./Table";
import { getEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export default Index = () => {
    const [employees, setEmployees] = useState([]);
    const [args, setArgs] = useState({ q: '', gender: '' });

    const navigate = useNavigate();

    useEffect(() => {
        getEmployees(args).then((response) => {
            console.log(response.data);
            setEmployees(response.data);
        })
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
            <div className="mt-2"/>
            <Table employees={employees}/>
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