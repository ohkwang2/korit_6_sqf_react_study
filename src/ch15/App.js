import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    // 화면 정 중앙에 원을 그리고
    // 원 영역을 선택했을 때 이미지를 불러올 수 있어야 하고
    // 불러온 이미지가 해당 영역 안에 들어와야 함.

    const [ imgSrc, setImgSrc ] = useState("");

    const handlecircleClick = () => {
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
                fileElement.setAttribute("mulitple", false);
                fileElement.click();
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.onload = (e) => {
                        setImgSrc(e.target.result);
                    }
                    fileReader.readAsDataURL(file);
                }
            }
        });
    }

    return (
        <>
        <div className="container">
            <div onClick={handlecircleClick} className="img-frame">
                <img src={imgSrc} alt="안보이지롱" />
            </div>
        </div>
        </>
    );
}

export default App;