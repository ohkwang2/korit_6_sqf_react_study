import { useState } from "react";

// 같은 패키지 내에서 쓰려면 index.js의 App.js 폴더 바꿔줄 것
function App() {
    const [ num, setNum ] = useState(0);
    let num2 = 0;

    const handleClick = (e) => {
        // console.log(e);
        const value = parseInt(e.target.value);
        // console.log(typeof value);
        // setNum(n => n + value);  //기존의 매개 변수에서 값을 받아와서 대입할 수 있게 함수 안에 함수를 넣을 수도 있음. 
        // setNum(() => 1000);  //기존의 매개 변수에서 값을 받아와서 대입할 수 있게 함수 안에 함수를 넣을 수도 있음. 
        setNum(num + (value));  // 함수가 아닌 값을 넣을 경우 값을 대체해서 바꿔줌.
        num2 += value;  // 재렌더링이 안 되면 이벤트는 동작 하지만, 리턴의 값은 다시 호출되지 않기 때문에 번호에 숫자가 적용되지 않음.
        console.log(num2);
    }

    console.log("num: " + num);   //num의 상태가 바뀔 때 마다 num이 찍힘.
    console.log("num2: " + num2)    // num2는 0으로 초기화 되어 있기 때문에 재렌더링 되면 num2는 계속 0으로 초기화

    return <>
        {/* 재렌더링 되더라도 번호의 num 부분만 바뀜 */}
        <h1>번호: {num}</h1>
        <h1>번호2: {num2}</h1>
        {/* <button onClick={() => {console.log(num2)}} value={-10}>-10</button> */}
        <button onClick={handleClick} value={-10}>-10</button>
        <button onClick={handleClick} value={+10}>+10</button>
        <button onClick={handleClick} value={-100}>-100</button>
        <button onClick={handleClick} value={+100}>+100</button>
    </>
}

export default App;