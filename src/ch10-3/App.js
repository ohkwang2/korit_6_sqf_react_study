// 삭제 버튼 만들기

import { useRef, useState } from "react"
import './App.css';
import Swal from "sweetalert2";

function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test["a"]);

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
                    // 얕은 복사를 하게 될 경우 기존 userList의 주소에 데이터가 얹어지기(다른데서 사용하면 데이터가 꼬일 수 있음)에 해당 함수 끝나고 초기화 될 수 있도록 재설정
                    // setUserList(userList => userList, inputData);
                    // 깊은 복사 -> 주소가 다른 곳에 데이터 기입
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

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key],    //객체에 [key]값을 넣어주면 value 값을 반환해줌
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => {
                    if(i === index) {
                        return {
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                }) ]);
            }
            // console.log(result);
        });
        // console.log(key);
        // console.log(index);
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            // console.log(result);
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))]);
            }
        });
        // promise <- 비동기 처리


        // if(window.confirm("해당 사용자를 정말 삭제하시겠습니까?")) {    // 자바스크립트에서는 window 생략 가능
        //     // userList의 인덱스 값을 찾아야 함.
        //     // console.log(userList);
        //     setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))]);
        // }
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
                    {/* <th>edit</th> */}
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({id, username, password, name}, index) => {                        
                        return ( // return 바로 옆에 태그를 입력하지 않을 경우 '()'로 묶어서 줄바꿈 해주어야 함.
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {/* 함수 호출로 onClick에 들어가면 렌더링 되자마자 바로 해당 함수가 호출됨 */}
                                {/* 함수 호출이 아닌 아래 처럼 함수 정의가 되어야 함. */}
                                <td onClick={() => handleEditClick("username", index)}>{username}</td>
                                <td onClick={() => handleEditClick("password", index)}>{password}</td>
                                <td onClick={() => handleEditClick("name", index)}>{name}</td>
                                {/* <td><button onClick={handleEditClick} value={index}>수정</button></td> */}
                                <td><button onClick={handleDeleteClick} value={index}>삭제</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;