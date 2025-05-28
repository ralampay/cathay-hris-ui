import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmployeeIndex from "./employees/Index";
import EmployeeShow from "./employees/Show";
import EmployeeForm from "./employees/Form";
import Dashboard from "./Dashboard";
import {
    Routes,
    Route
} from "react-router-dom";

export default App = () => {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element={<Dashboard/>}
                />
                <Route
                    path="/employees"
                    element={<EmployeeIndex/>}
                />
                <Route
                    path="/employees/:id"
                    element={<EmployeeShow/>}
                />
                <Route
                    path="/employees/new"
                    element={<EmployeeForm/>}
                />
                <Route
                    path="/employees/:id/edit"
                    element={<EmployeeForm/>}
                />
            </Routes>
            <Footer/>
        </div>
    )
}