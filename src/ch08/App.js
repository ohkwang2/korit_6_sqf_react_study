import { useRef } from "react";

function App() {
    // use가 붙은 함수(Hook 함수)들은 해당 function의 최상단에 위치해야 함.
    
    // 객체로 사용할 경우
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    // 개별 변수로 사용할 경우
    // const aRef = useRef();
    // const bRef = useRef();
    // const cRef = useRef();

    console.log(inputRef.a);
    console.log(inputRef.b);
    console.log(inputRef.c);
    
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>    
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>    
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>    
    </>
}

export default App;