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