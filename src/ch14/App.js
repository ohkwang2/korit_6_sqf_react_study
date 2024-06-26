import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.setAttribute("multiple", true); // multiple을 주면 파일을 여러개 불러올 수 있음. default 값은 false
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }
            // DataURL을 읽는 이벤트가 발생하면 위의 onload 함수가 실행
            fileReader.readAsDataURL(file);
        }
    }

    return ( 
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <div>
                <img src={imgSrc} alt="안보임" />
            </div>
        </>
     );
}

export default App;