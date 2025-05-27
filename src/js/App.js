import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmployeeIndex from "./employees/Index";

export default App = () => {
    return (
        <div className="container">
            <Header/>
            Cathay HRIS UI
            <EmployeeIndex/>
            <Footer/>
        </div>
    )
}