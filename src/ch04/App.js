// 같은 패키지 내에서 쓰려면 index.js의 App.js 폴더 바꿔줄 것

import { useState } from "react";
import Button from "./Button";

function App() {
    const [ number, setNumber ] = useState(0);

    return <>
        <h1>번호: {number}</h1>
        <Button text={"증가"} setNumber={setNumber} />
        <Button text={"감소"} setNumber={setNumber}/>
    </>
}

export default App;