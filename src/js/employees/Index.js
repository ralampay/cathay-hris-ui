import React, { useState, useEffect } from "react";
import Table from "./Table";
import { getEmployees } from "../services/EmployeeService";

export default Index = () => {
    const [employees, setEmployees] = useState([]);
    const [args, setArgs] = useState({ q: '', gender: '' });

    useEffect(() => {
        getEmployees(args).then((response) => {
            console.log(response.data);
            setEmployees(response.data);
        })
    }, [args])

    return (
        <div>
            <input
                className="form-control"
                value={args.q}
                onChange={(event) => {
                    setArgs({...args,
                        q: event.target.value
                    })
                }}
            />

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

            <Table employees={employees}/>
        </div>
    )
}