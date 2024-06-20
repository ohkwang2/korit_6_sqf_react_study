// 같은 패키지 내에서 쓰려면 index.js의 App.js 폴더 바꿔줄 것

import { useState } from "react";

function App() {
    
    const [ grade, setGrade ] = useState("");
    const [ group, setGroup ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ name, setName ] = useState("");
    
    const emptyStudent = {
        grade: "",
        group: "",
        number: "",
        name: ""
    }

    // useState(student) <- 요렇게 들어갈 경우 주소 자체를 복사하기 때문에 비구조 할당으로 새로운 객체의 값을 넣어주어야 함.
    const [ student, setStudent ] = useState({...emptyStudent});

    const handleInputChange = (e) => {
        switch(e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            default:
        }
    }

    const handleInputChange2 = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;   // 비구조 할당으로 key값을 변수로 사용
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent);

        // 줄여서 쓸 경우
        // setStudent(student => {
        //     return {
        //         ...student,
        //         [e.target.name]: e.target.value
        //     }
        // });
    }

    return <>
        <h1>개별 value 활용</h1>
        {/* input에 value값이 없을 경우 초기화 되지 않음. */}
        <input name="grade" placeholder="학년" onChange={handleInputChange} value={grade}/>
        <input name="group" placeholder="반" onChange={handleInputChange} value={group}/>
        <input name="number" placeholder="번호" onChange={handleInputChange} value={number}/>
        <input name="name" placeholder="이름" onChange={handleInputChange} value={name}/>
        
        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>

        <h1>객체 value 활용</h1>
        <input name="grade" placeholder="학년" onChange={handleInputChange2} value={student.grade}/>
        <input name="group" placeholder="반" onChange={handleInputChange2} value={student.group}/>
        <input name="number" placeholder="번호" onChange={handleInputChange2} value={student.number}/>
        <input name="name" placeholder="이름" onChange={handleInputChange2} value={student.name}/>
        
        <ul>
            <li>학년: {student.grade}</li>
            <li>반: {student.group}</li>
            <li>번호: {student.number}</li>
            <li>이름: {student.name}</li>
        </ul>
    
    </>
}

export default App;