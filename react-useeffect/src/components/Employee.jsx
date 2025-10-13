function Employee(props) {
    return (
        <>


        <h1>Employee Details</h1>

        <h3>Name: {props.name}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Contact: {props.contact}</h3>
        {props.remarks}
        {props.children}


        </>
    );
}

export default Employee;