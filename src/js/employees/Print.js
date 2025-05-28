export const buildDocDefinition = (employee) => {
    let dd = {
        pageSize: 'LEGAL',
        pageMargins: [40, 40, 40, 40],
        content: [
            `${employee.firstName} ${employee.lastName}`,
            {
                columns: [
                    employee.firstName,
                    employee.lastName
                ]
            },
            {
                table: {
                    body: [
                        ['First Name', employee.firstName],
                        ['Last Name', employee.lastName]
                    ]
                }
            }
        ]
    }

    return dd;
}