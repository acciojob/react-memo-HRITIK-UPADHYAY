import React, {useState, useEffect} from "react";

const Memo = () => {
    const [text, setText] = useState("");
    const [arr, setArr] = useState([]);

    function handle() {
        if(text.length >= 5) {
            setArr([...arr, text]);
            setText("");
        }
        else alert("Word should be 5 character long");
    }

    return (
        <div className="memo">
            <h2> React.Memo </h2>

            <div>
                <input type="text" placeholder="Enter text"  onChange={(e) => setText(e.target.value)} value={text}/>
                <button type="submit" onClick={handle}> Add Skill </button>
            </div>
            
            
            {
               arr.length > 0 && 
               <ul>
                    {
                        arr.map(item => (
                            <li> {item} </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Memo;