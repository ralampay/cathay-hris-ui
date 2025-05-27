import React from "react";

export default Table = ({ employees }) => {
    return (
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
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}