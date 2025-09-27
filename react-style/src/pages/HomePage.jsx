import "./HomePage.css"

function HomePage() {

    let cardStyle = { 
        backgroundColor: "rgb(186, 211, 255)", 
        textAlign: "center", 
        padding: "3px", 
        border: "1px solid black" 
    }
    return (
        <>
            <div>
                <h1 id="title">Vegitable Mart</h1>
                <div className="veg-row">
                    <div className="col" style={cardStyle} >
                        <h1>Tomato</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Suscipit iure nisi ipsa accusantium praesentium repudiandae repellat
                            earum cum vel, illum maiores quod? Voluptates exercitationem, fuga vero
                            molestias optio consequatur expedita.</p>
                    </div>
                    <div className="col" style={cardStyle} >
                        <h1>Pea</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Suscipit iure nisi ipsa accusantium praesentium repudiandae repellat
                            earum cum vel, illum maiores quod? Voluptates exercitationem, fuga vero
                            molestias optio consequatur expedita.</p>
                    </div>
                    <div className="col" style={cardStyle} >
                        <h1>Carrot</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Suscipit iure nisi ipsa accusantium praesentium repudiandae repellat
                            earum cum vel, illum maiores quod? Voluptates exercitationem, fuga vero
                            molestias optio consequatur expedita.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;