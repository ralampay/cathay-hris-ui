import React from "react";
import { useNavigate } from "react-router-dom";

export default Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                Dashboard
            </h1>

            <hr/>

            <button
                className="btn btn-secondary"
                onClick={() => {
                    navigate('/employees');
                }}
            >
                Go to Employees
            </button>
        </div>
    )
}