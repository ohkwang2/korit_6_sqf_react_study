import { useRef, useState } from "react"
import './App.css';

function App() {

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    
    // 각 input에서 enter 입력시 다음 input으로 포커스 이동
    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    // userList에 input에서 입력된 데이터를 userList에 넣음
                    setUserList(userList => [ ...userList, inputData]);
                    setInputData({ ...emptyUser});
                    username.current.focus();
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });

    }

    return <>
        <input type="text"name="username" placeholder="사용자명"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            ref={inputRef.username}
            value={inputData.username}/>
        <input type="password" name="password" placeholder="비밀번호"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            ref={inputRef.password}
            value={inputData.password}/>
        <input type="text" name="name" placeholder="이름"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            ref={inputRef.name}
            value={inputData.name}/>

        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({username, password, name}, index) => {
                        return ( // return 바로 옆에 태그를 입력하지 않을 경우 '()'로 묶어서 줄바꿈 해주어야 함.
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{password}</td>
                                <td>{name}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;