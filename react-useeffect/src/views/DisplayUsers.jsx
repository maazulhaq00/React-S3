import axios from "axios";
import { useEffect, useState } from "react";

function DisplayUsers() {
    const [users, setUser] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");

            console.log(res.data);
            setUser(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }




    return (
        <>
            <h3>Users</h3>

            <table border={1}>
                <tr>
                    <th>User Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                    })
                }


            </table>
        </>
    );
}

export default DisplayUsers;