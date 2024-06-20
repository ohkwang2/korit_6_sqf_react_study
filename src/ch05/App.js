// 같은 패키지 내에서 쓰려면 index.js의 App.js 폴더 바꿔줄 것

import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: {inputValue}</h3>
        <button onClick={handleResetClick}>초기화</button>
        {/* input value에 있는 데이터는 값이 useState에 값이 들어간 후 해당 값을 받아와 다시 랜더링 됨 */}
        <input type="text" onChange={handleInputChange} value={inputValue} />    
    </>
}

export default App;