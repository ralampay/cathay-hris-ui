import React, { useState } from "react";

export default Index = ({ employees, handleDelete }) => {
    return (
        <div>
            <table>
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
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>
                                    {employee.lastName}, {employee.firstName}
                                </td>
                                <td>
                                    {employee.gender}
                                </td>
                                <td>
                                    {employee.mobileNumber}
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleDelete(employee);
                                            // console.log("Deleting employee " + employee.id);
                                        }}
                                    >
                                        Delete
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