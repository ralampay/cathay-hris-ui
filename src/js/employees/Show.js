import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
import { EMPLOYEE } from "../models/employee";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faArrowLeft, faPrint, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { buildDocDefinition } from "./Print";

/**
 * FINAL TEST
 * 1. Display rates of given employee in a table
 * 2. On click of Add Rate, show a modal that contains the rate form
 * 3. On save of rate, refresh the rates of the employee
 * 4. (CHALLENGE) On print of employee, print all rates
 */
export default Show = () => {
    const [employee, setEmployee] = useState(EMPLOYEE);
    const [isDeleteShow, setIsDeleteShow] = useState(false);

    const [rates, setRates] = useState([]);

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
            <button
                className="btn btn-primary ms-2"
                onClick={() => {
                    pdfMake.createPdf(buildDocDefinition(employee)).open();
                }}
            >
                <FontAwesomeIcon icon={faPrint} />
            </button>

            <button
                className="btn btn-success"
            >
                <FontAwesomeIcon icon={faAdd}/>
                <span className="ms-2">
                    Add Rate
                </span>
            </button>
        </div>
    )
}