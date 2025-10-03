import { Link } from "react-router-dom";

function NavBar() {
    return ( <>

    <ul>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
            <Link to="/state1" >Use State</Link>
        </li>
        <li>
            <Link to="/add-student" >Add Student</Link>
        </li>
    </ul>
    
    
    
    </> );
}

export default NavBar;