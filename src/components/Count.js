import React, {useState} from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="count">
            <div>
                <p> Count: {count}</p>
                <button onClick={() => setCount(count+1)}> + </button>
            </div>

            <h2> Expensive Calculation </h2>
            <p> 1000000000 </p>
            <hr />
        </div>

    )
}

export default Count;