import { useEffect, useState } from "react";

// userEffect()를 안 쓰면 순서가 달라짐
function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    // console.log("test");
    
    // useEffect => 함수, 배열 형태로 들어감
    // 첫 호출 때 무조건 한 번 실행 됨.
    // 그 뒤로는 number의 상태가 변할 때만 실행 됨.
    // 여기서 배열은 최초 실행될 때 무조건 실행되어야 하는 상태값
    useEffect(() => {
        // number가 변했을 때 실행될 함수
        // 마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    }, [number, number2]);
    
    // number가 변하고 나면 바로 number2에 변화된 값을 사용할 수 있도록 하는 방법
    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }
    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    );
}

export default App;