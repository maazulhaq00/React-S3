import { useState } from "react";
import { useEffect } from "react";

function CounterPage() {

    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter(counter+1)
    }
    const dec = () => {
        setCounter(counter-1)
    }
    
    useEffect(()=> {

        console.log("use effect callback callled....  " + counter);


    }, [counter])

    return ( 
        <>

        <h1>Counter: {counter}</h1>

        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        </>
     );
}

export default CounterPage;