import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmployeeForm from "./employee_masters/Form";
import EmployeeIndex from "./employee_masters/Index";

export default App = () => {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Lloyd",
            gender: "M",
            mobileNumber: "+63971111111"
        },
        {
            id: 2,
            firstName: "Bea",
            lastName: "Alonzo",
            gender: "F",
            mobileNumber: "+63971111112"
        }
    ]);

    const deleteEmployee = (employee) => {
        console.log(`Deleting employee ${employee.id}`);
    }

    return (
        <div>
            <Header/>
            Cathay HRIS UI
            <EmployeeForm/>
            <EmployeeIndex
                employees={employees}
                handleDelete={deleteEmployee}
            />
            <Footer/>
        </div>
    )
}