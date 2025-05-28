import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default Table = ({ employees }) => {

    const navigate = useNavigate();

    return (
        <table className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Mobile Number
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => {
                    return (
                        <tr key={`employee-row-${employee.id}`}>
                            <td>
                                {employee.firstName} {employee.lastName}
                            </td>
                            <td>
                                {employee.gender}
                            </td>
                            <td>
                                {employee.mobileNumber}
                            </td>
                            <td>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => {
                                        navigate(`/employees/${employee.id}`)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    <span className="ms-2">
                                        Show
                                    </span>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}