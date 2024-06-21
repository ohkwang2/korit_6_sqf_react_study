import { useState } from "react";

function App() {
    
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);
    // const liList = [
    //     <li>{"test1"}</li>,
    //     <li>{"test1"}</li>,
    //     <li>{"test1"}</li>,
    //     <li>{"test1"}</li>,
    // ];
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [ ...names, inputValue ]);
            setInputValue("");
        }
    }

    return <>
        <input 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputValue}/>
        <ul>
            {/* map을 돌리면 무조건 key값을 함께 사용해야 함. */}
            {names.map((name, index) => <li key={index}>{name}</li>)}
            {/* {liList} */}
        </ul>
    </>
}

export default App;