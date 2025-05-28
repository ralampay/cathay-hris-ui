import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
import { EMPLOYEE } from "../models/employee";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

export default Show = () => {

    // Exercise:
    // 1. Add a confirm button to the modal
    // 2. When use clicks confirm, setIsLoading to true to disable buttons
    // 3. Integrate with delete API
    // 4. On success of delete, close modal and redirect to /employees
    // 5. (Challenge) Integrate delete with Table of employees
    //      - Message of modal: Are you sure you want to delete [name of employee]

    const [employee, setEmployee] = useState(EMPLOYEE);
    const [isDeleteShow, setIsDeleteShow] = useState(false);

    const navigate = useNavigate();

    const {
        id
    } = useParams();

    const handleClose = () => {
        setIsDeleteShow(false);
    }

    useEffect(() => {
        getEmployee(id).then((response) => {
            setEmployee(response.data)
        })
    }, []);

    return (
        <div>
            <Modal show={isDeleteShow}>
                <Modal.Header>
                    Confirmation
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {employee.firstName} {employee.lastName}?
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-secondary"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
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
                className="btn btn-danger ms-2"
                onClick={() => {
                    setIsDeleteShow(true);
                }}
            >
                Delete
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