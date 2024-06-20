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

    const handleButtonOnClick = (e) => {
        const username = document.querySelector(".username");
        const password = document.querySelector(".password");
        const email = document.querySelector(".email");

        const newUser = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        username.value = "";
        password.value = "";
        email.value = "";

        setUser(newUser);
    }

    const handleResetButtonOnClick = (e) => {
        const username = document.querySelector(".username");
        const password = document.querySelector(".password");
        const email = document.querySelector(".email");

        username.value = "";
        password.value = "";
        email.value = "";

        setUser(emptyUser);
    }

    return<>
        <input className="username" name="username" type="text" placeholder="usename"/>
        <input className="password" name="password" type="password" placeholder="password"/>
        <input className="email" name="email" type="text" placeholder="email"/>
        <button onClick={handleButtonOnClick}>확인</button>
        <button onClick={handleResetButtonOnClick}>초기화</button>
        <ul>
            <li>사용자 이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul> 
    </>
}

export default App;