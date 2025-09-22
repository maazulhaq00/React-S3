function ReactJSX() {
    let name = "Maaz Ul Haq"
    let age = 17;
    let address = {
        city: "Karachi",
        contact: "0311-1111111",
        email: "maaz@gmail.com"
    }
    let skills = ["JS", "React", "Node js", "Python"]
    return (
        <>
            <h4>Name: {name}</h4>
            <p><b>Age:</b> {age} </p>

            {
                age < 18 ? <p>I am young</p> : <p>I am adult</p>
            }

            <p>
                <b>City: </b> {address.city}
            </p>
            <p>
                <b>Contact: </b> {address.contact}
            </p>
            <p>
                <b>Email: </b> {address.email}
            </p>

            {/* <p>
                {
                skills.map((skill) => {
                    return("skill is " + skill + ". ")
                }
                )}
            </p> */}
            <h4>Skills</h4>

            <ul>
                {
                    skills.map((skill) => {
                        return(
                            <li> {skill} </li>
                        )
                    })
                }
            </ul>

        </>
    );
}

export default ReactJSX;