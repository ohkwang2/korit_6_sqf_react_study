
/*
    네모 박스 안에 원을 만들기
    원 아래에 인풋 박스 2 개
    인풋 박스 아래 저장 버튼 1개
    페이지가 열리면 로컬 스토리지에서 사진을 가져와서 출력 되게끔
*/

import { useEffect, useRef, useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';

function App() {

    const emptyUser = {
        name: "",
        email: "",
        imgSrc: ""
    }

    const inputRefs = {
        name: useRef(),
        email: useRef()
    }

    const [ user, setUser ] = useState({...emptyUser});

    useEffect(() => {
        const lsUser = localStorage.getItem("user");
        setUser(!lsUser ? {...emptyUser} : JSON.parse(lsUser));
    }, []);

    const handleInputChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        });

    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { name, email} = inputRefs;
            switch(e.target.name) {
                case "name":
                    email.current.focus();
                    break;
                case "email":
                    handleSubmitClick();
                    name.current.focus();
                    break;
                default:                
            }
        }
    }

    const handleSubmitClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
    }

    const handleCircleClick = () => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type", "file");
                fileElement.click();
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.onload = (e) => {
                        setUser(user => ({ ... user, imgSrc: e.target.result }));
                    }
                    fileReader.readAsDataURL(file);
                }
            }
        })
    }

    return (
    <>
        <div className='wrap'>
            <div className='container'>
                <h1>프로필</h1>
                <div className='profile' onClick={handleCircleClick}>
                    <img src={user.imgSrc} alt="사진" />
                </div>
                <div className='inputs'>
                    <h2>이름</h2>
                    <input
                        name="name"
                        type="text"
                        placeholder="이름을 입력하세요."
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        value={user.name}
                        ref={inputRefs.name}
                        />
                </div>
                <div className='inputs'>
                    <h2>이메일</h2>
                    <input
                        name="email"
                        type="text"
                        placeholder="이메일을 입력하세요."
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        value={user.email}
                        ref={inputRefs.email}/>
                </div>
                <button className='submit' onClick={handleSubmitClick}>저장</button>
            </div>
        </div>

    </> );
}

export default App;