import { useState } from "react";

function State1() {

    // let name = "Maaz Ul Haq";
    // let email = "maaz@gmail.com";
    // let isDark = true


    // const [name, setName] = useState("Maaz Ul Haq");
    // const [email, setEmail] = useState("maaz@gmail.com");

    const [person, setPerson] = useState({
        name: "Maaz Ul Haq",
        email: "maaz@gmail.com"
    })

    const [isDark, setIsDark] = useState(true);

    // const changeValues = () => {

    //     console.log("clickkeeddd");

    //     name = "Hunain"
    //     email = "hunain@gmail.com";
    //     isDark = !isDark

    //     console.log(name);
    //     console.log(email);
    //     console.log(isDark);

    // }


    const changeValues = () => {

        // setName("Hunain")
        // setEmail("hunain@gmail.com")

        setPerson({
            ...person,
            name: "Maaz"
        })
        setIsDark(!isDark)
        // setIsDark((prev) => !prev)

    }
    return (
        <>
            <div style={{
                background: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
                height: "100vh"
            }}>

                <h3>Name: {person.name}</h3>
                <h3>Email: {person.email}</h3>

                <button onClick={changeValues}>Heyyyy</button>
            </div>
        </>
    )

}

export default State1;