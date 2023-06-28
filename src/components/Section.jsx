import { useState } from "react";

function Section () {
    const [counter, setCounter] = useState(0); // put hook right after function declaration

    return (
        <section>
            <h2>Counter</h2>
            <p>{counter}</p>
            <button onClick={ () => {setCounter(counter + 1)}}>+</button>
            <button onClick={ () => {setCounter(counter - 1)}}>-</button>
        </section>
    )
}

export default Section;