import { useRef, useState } from "react"

/* 
    1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
    2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 및 input value들 초기화
    3. tbody -> tr 묶음을 userList에서 map통해 렌더링
    4. table 디자인 -> border: 1px solid #dbdbdb;
*/
function App() {
    const tableStyle = {
        marginTop: "20px",
        borderCollapse: "collapse",
        border: "1px solid #dbdbdb"
    }
    const cellStyle = {
        padding: "5px",
        border: "1px solid #dbdbdb",
        width: "50px"
    }
    const emptyUser = {
        id:"",
        username: "",
        password: "",
        name: ""
    }

    const [ inputData, setInputData ] = useState({ ...emptyUser });
    const [ user, setUser ] = useState([{ ...emptyUser }]);

    let userInput = {
        usernameInput: useRef(),
        passwordInput: useRef(),
        nameInput: useRef()
    }

    const handleKeyChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
        
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { name, value } = e.target;
            const newUser = {
                ...user,
                [name]: value
            }
            setUser(newUser);
            setInputData("");
        }

    }

    return <>
        <input type="text"name="username" placeholder="사용자명" onChange={handleKeyChange} value={inputData.username} ref={userInput.usernameInput}/>
        <input type="password" name="password" placeholder="비밀번호" onChange={handleKeyChange} value={inputData.password} ref={userInput.passwordInput}/>
        <input type="text" name="name" placeholder="이름" onKeyDown={handleKeyDown} value={inputData.name} ref={userInput.nameInput}/>

        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={cellStyle}>index</th>
                    <th style={cellStyle}>username</th>
                    <th style={cellStyle}>password</th>
                    <th style={cellStyle}>name</th>
                </tr>
            </thead>
            <tbody>
                {user.map(({id, username, password, name}, index) => {
                    return <>
                        <td style={cellStyle} key={index}>{id}</td>
                        <td style={cellStyle} key={index}>{username}</td>
                        <td style={cellStyle} key={index}>{password}</td>
                        <td style={cellStyle} key={index}>{name}</td>
                    </>
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;