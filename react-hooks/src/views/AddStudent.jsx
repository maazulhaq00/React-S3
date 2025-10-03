// import { useState } from "react";

// function AddStudent() {

//     const [fullname, setFullname] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     const [grade, setGrade] = useState("")

//     const handleNameChange = (e) => {
//         setFullname(e.target.value)
//     }
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value)
//     }
//     const handlePhoneChange = (e) => {
//         setPhone(e.target.value)
//     }
//     const handleGradeChange = (e) => {
//         setGrade(e.target.value)
//     }


//     return (
//     <>
//     <h1>Add Student</h1>
//     <label>
//         Student Name <br />
//         <input type="text" name="fullname" value={fullname} onChange={handleNameChange} />
//     </label> <br /><br />
//     <label>
//         Email Address <br />
//         <input type="text" name="email" value={email} onChange={handleEmailChange} />
//     </label> <br /><br />
//     <label>
//         Phone Number <br />
//         <input type="text" name="phone" value={phone} onChange={handlePhoneChange}/>
//     </label> <br /><br />
//     <label>
//         Grade <br />
//         <input type="text" name="grade" value={grade} onChange={handleGradeChange} />
//     </label> <br /><br />

//     <button>Add Student</button>
//     </>
//     );
// }

// export default AddStudent;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        fullname: "",
        email: "",
        phone: "",
        grade: ""
    })

    const handleInputChange = (e) => {

        let { name, value } = e.target;

        // if (name == "fullname") {

        //     setStudent({
        //         ...student,
        //         fullname: value,

        //     })
        // }
        // else if (name == "email") {

        //     setStudent({
        //         ...student,
        //         email: value,

        //     })
        // }
        // else if (name == "phone") {

        //     setStudent({
        //         ...student,
        //         phone: value,

        //     })
        // }
        // else if (name == "grade") {

        //     setStudent({
        //         ...student,
        //         grade: value,

        //     })
        // }
        setStudent({
            ...student,
            [name]: value,

        })
    }

    const handleButtonClick = () => {
        navigate("/student", {
            state: student
        } )
    }


    return (
        <>
            <h1>Add Student</h1>
            <label>
                Student Name <br />
                <input type="text" name="fullname" value={student.fullname} onChange={handleInputChange} />
            </label> <br /><br />
            <label>
                Email Address <br />
                <input type="text" name="email" value={student.email} onChange={handleInputChange} />
            </label> <br /><br />
            <label>
                Phone Number <br />
                <input type="text" name="phone" value={student.phone} onChange={handleInputChange} />
            </label> <br /><br />
            <label>
                Grade <br />
                <input type="text" name="grade" value={student.grade} onChange={handleInputChange} />
            </label> <br /><br />

            <button onClick={handleButtonClick}>Add Student</button>
        </>
    );
}

export default AddStudent;