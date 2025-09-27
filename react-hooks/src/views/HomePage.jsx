function HomePage() {

    let isLight = true;

    // const handleModeChange = () => {

    //     let body = document.getElementById("body")

    //     if (isLight) {

    //         body.style.backgroundColor = "black"
    //         body.style.color = "white"
    //         isLight=false
    //     }
    //     else {

    //         body.style.backgroundColor = "white"
    //         body.style.color = "black"
    //         isLight=true
    //     }

    // }


    const handleModeChange = () => {

        let body = document.getElementById("body")

        body.style.backgroundColor = isLight ? "black" : "white"
        body.style.color = isLight ? "white" : "black"
        isLight = !isLight


    }


    return (<>
        <div id="body" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Hello 2309C1</h1>
            <button onClick={handleModeChange}>
                Dark Mode
            </button>
        </div>
    </>);
}

export default HomePage;