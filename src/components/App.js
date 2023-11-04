import React from "react";
import Todo from "./Todo";
import Count from "./Count";
import Memo from "./Memo";


const App = () => {
    return (
        <div>
            <h1> React.useMemo </h1>
            <Todo />
            <Count />
            <Memo />
        </div>
    )
}

export default App;

