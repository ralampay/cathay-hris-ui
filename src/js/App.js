import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmployeeIndex from "./employees/Index";
import EmployeeShow from "./employees/Show";
import {
    Routes,
    Route
} from "react-router-dom";

export default App = () => {
    // Exercise 1:
    // - Create a new component called Dashboard
    // - Map the path "/" to Dashboard
    // - Create a button in dashboard that will navigate to EmployeeIndex
    // - Map the path "/employees" to EmployeeIndex
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element={<EmployeeIndex/>}
                />
                <Route
                    path="/employees/:id"
                    element={<EmployeeShow/>}
                />
            </Routes>
            <Footer/>
        </div>
    )
}