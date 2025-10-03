import { useLocation } from "react-router-dom";

function StudentDetails() {

    const location = useLocation();

    let student = location.state


    return ( 
        <>
        <h3>Student Details</h3>
        <p>
            <b>Full Name</b> {student.fullname}
        </p>
        <p>
            <b>Email</b> {student.email}
        </p>
        <p>
            <b>Phone Number</b> {student.phone}
        </p>
        <p>
            <b>Grade</b> {student.grade}
        </p>
        </>
     );
}

export default StudentDetails;