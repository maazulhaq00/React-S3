// import StudentDetail from "./components/StudentDetail";

// function App() {

//   let studentsData = [
//     { name: "Ammar", title: "PHP Developer", email: "ammar@gmail.com", contact: "1234561" },
//     { name: "Hammad", title: "JS Developer", email: "hammad@gmail.com", contact: "1234562" },
//     { name: "Ayyan", title: "React Developer", email: "ayyan@gmail.com", contact: "1234563" },
//     { name: "Nausheen", title: "ASP.NET Developer", email: "nausheen@gmail.com", contact: "1234564" },
//     { name: "Saba", title: "Python Developer", email: "saba@gmail.com", contact: "1234565" },
//     { name: "Ramish", title: "Backend Developer", email: "ramish@gmail.com", contact: "1234565" }
//   ]


//   return (<>
//     <div className="container mt-4">
//       <div className="row">
//         {
//           studentsData.map((student) => {
//             return (
//               <StudentDetail name={student.name} title={student.title} email={student.email} contact={student.contact} />

//             )
//           })
//         }

//       </div>
//     </div>

//   </>);
// }

// export default App;


import StudentDetail from "./components/StudentDetail";

function App() {

  let studentsData = [
    { name: "Ammar", title: "PHP Developer", email: "ammar@gmail.com", contact: "1234561" },
    { name: "Hammad", title: "JS Developer", email: "hammad@gmail.com", contact: "1234562" },
    { name: "Ayyan", title: "React Developer", email: "ayyan@gmail.com", contact: "1234563" },
    { name: "Nausheen", title: "ASP.NET Developer", email: "nausheen@gmail.com", contact: "1234564" },
    { name: "Saba", title: "Python Developer", email: "saba@gmail.com", contact: "1234565" },
    { name: "Ramish", title: "Backend Developer", email: "ramish@gmail.com", contact: "1234565" }
  ]


  return (<>
    <div className="container mt-4">
      <div className="row">
        {
          studentsData.map((student) => {
            return (
              <StudentDetail student={student}/>

            )
          })
        }

      </div>
    </div>

  </>);
}

export default App;