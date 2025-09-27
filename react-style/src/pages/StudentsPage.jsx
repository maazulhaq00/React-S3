function StudentsPage() {
    let studentsList = [
        { name: "Ammar", age: 16, attendance: 87.3, percent: 76.8 },
        { name: "Nousheen", age: 21, attendance: 80, percent: 96.8 },
        { name: "Hassan", age: 12, attendance: 45.3, percent: 65 },
        { name: "Hunain", age: 18, attendance: 70, percent: 33.7 },
        { name: "Ramish", age: 40, attendance: 90, percent: 48 },
        { name: "Anas", age: 33, attendance: 20, percent: 85 }
    ]
    return (
        <>
            <h3>Students Details</h3>

            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Attendance</th>
                    <th>Percentage</th>
                </tr>
                {
                    studentsList.map(
                        (student) => {
                            return (
                                <tr>
                                    <td>{student.name}</td>
                                    <td style={{ backgroundColor: student.age < 18 ? "rgb(145, 203, 247)" : "rgb(177, 248, 165)" }} >
                                        {student.age}
                                    </td>
                                    <td>{student.attendance}</td>
                                    <td style={{
                                        backgroundColor: student.percent < 40 ?
                                            "rgba(252, 137, 137, 1)" :
                                            (student.percent < 80 ? "rgba(244, 234, 125, 1)" : "rgba(151, 237, 175, 1)")
                                    }}>{student.percent}</td>
                                </tr>
                            )
                        }
                    )
                }
            </table>
        </>
    );
}

export default StudentsPage;