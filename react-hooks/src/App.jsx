import NavBar from "./components/NavBar";
import AddStudent from "./views/AddStudent";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import State1 from "./views/State1";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import StudentDetails from "./views/StudentDetails";
import User from "./views/User";

function App() {
  return ( 
    <>
    {/* <HomePage />
    <State1 />
    <AddStudent /> */}

    <Router>

      <NavBar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state1" element={<State1 />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student" element={<StudentDetails />} />
        <Route path="/user/:id/:name" element={<User />} /> 


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>


    </>
   );
}

export default App;