import { useParams } from "react-router-dom";

function User() {

    let { id,name } = useParams();


    return (
        <>
        <h1>User</h1>
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        </>
    );
}

export default User;