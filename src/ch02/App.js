import { useState } from "react";

// 같은 패키지 내에서 쓰려면 index.js의 App.js 폴더 바꿔줄 것
function App() {
    const [ test, testPrint ] = [ 100, function () {console.log("테스트 함수 호출");}];
    testPrint();
    // const numberState = useState(110);    // 매개변수 숫자 자료형을 가진 배열
    // console.log(numberState)

    const [ number, setNumber ] = useState(100);    // 배열이기 때문에 비구조 할당 가능
    const [ name, setName ] = useState(null);

    console.log(number);
    if(number === 100) {
        // 비동기 처리 (2초 뒤에 실행되는 함수이기 때문에 다른거 먼저 처리하고 2초 뒤에 해당 함수 실행)
        setTimeout(() => setNumber(200), 2000);
        ; // 상태변화 > 상태 변화 때 함수 재호출 (재렌더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다.
        // 일반 변수, 일반 함수들만 재 렌더링 됨.
        // userState의 setter는 비동기
    }

    if(number === 200) {
        setNumber(300); // number에 300 넣고나면 알려줘 명령 내리고 숫자는 재 렌더링 된 후에 입력됨.
        console.log(number);    // 비동기 처리로 setNumber보다 더 빨리 호출됨
    }

    if(name === null) {
        setName("김준일")   // 비동기로 이름을 처리 하고나서 돌아 왔을 때는 name이 null이 아니기 때문에 바뀐 이름이 안 찍힘
        console.log(name);  // console.log(name)이 안에 있으면 null 출력 후 바뀐 값을 출력해주지 않음.
    }
    console.log(name);

    // setName("김준일");  //set되면 재렌더링 되기 떄문에 이렇게 처리하면 무한루프
    // console.log(name);

    return <>
        <h1>number 상태 확인</h1>
        <h2>{number}</h2>
    </>
}

export default App;