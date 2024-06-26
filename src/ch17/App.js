/** @jsxImportSource @emotion/react */
// 위는 jsx 문법에 emotion 라이브러리 적용 (해당 주석 무조건 있어야 함)

// 해당 파일에서 export하는 모든 변수들을 s라는 변수명을 통해 참조할 수 있도록 설정
import * as s from "./style";
import './App.css'

function App() {
    return (
        <div css={s.wrap}>
            <div css={s.container}>
                <div css={s.main}>
                    <button css={s.mainButton}>box</button>
                </div>
            </div>
        </div>
    );
}

export default App;