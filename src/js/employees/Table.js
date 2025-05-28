import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { EMPLOYEE } from "../models/employee";
import { deleteEmployee } from "../services/EmployeeService";

export default Table = ({ employees, refresh }) => {

    const [showDelete, setShowDelete] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(EMPLOYEE);

    const navigate = useNavigate();

    const handleDelete = () => {
        deleteEmployee(employeeToDelete.id).then(() => {
            setShowDelete(false);
            refresh();
        }).catch(() => {
            console.log("Error in deleting");
        })
    }

    return (
        <div>
            <Modal show={showDelete}>
                <Modal.Header>
                    Confirmation
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {employeeToDelete.firstName} {employeeToDelete.lastName}?
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-success"
                        onClick={handleDelete}
                    >
                        Confirm
                    </button>
                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                            setShowDelete(false);
                        }}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
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
                                    <button
                                        className="btn btn-danger ms-2"
                                        onClick={() =>{
                                            setShowDelete(true);
                                            setEmployeeToDelete({...employee});
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}