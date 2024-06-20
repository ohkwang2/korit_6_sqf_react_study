// 같은 패키지 내에서 쓰려면 index.js의 App.js 폴더 바꿔줄 것

import { useState } from "react";

// 확인을 누르면 li에 값이 렌더링 되도록
function App() {
    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [ user, setUser ] = useState({ ...emptyUser });
    const [ inputData, setInputData ] = useState({ ...emptyUser });



    const handleInputChange = (e) => {
        // 실시간 input 값이 virtual dom과 실시간 동기화 될 수 있도록 상태를 하나 더 추가
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]:e.target.value
            }
        });
    }

    const handleOkClick = (e) => {
        setUser(inputData);
    }

    return<>
        <input name="username" type="text" placeholder="usename" onChange={handleInputChange} value={inputData.username}/>
        <input name="password" type="password" placeholder="password" onChange={handleInputChange} value={inputData.password}/>
        <input name="email" type="text" placeholder="email" onChange={handleInputChange} value={inputData.email}/>
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자 이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul> 
    </>
}

export default App;