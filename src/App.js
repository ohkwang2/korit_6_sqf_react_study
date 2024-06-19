/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  컴포넌트는 대문자로 만들어야 함.
 */

import { Fragment } from "react";
import Hello from "./components/Hello";


function App() {
  return <>
    <div>
      <Hello />
    </div>
    <div>
      <Hello />
    </div>
  </>
    {/* 직접 태그를 만들 경우 구분하기 위해 컴포넌트를 대문자로 설정 */}
    {/* <Hello /> */}
    {/* Fragment 태그 <- JSX에서 여러개의 div를 묶어서 처리하기 위한 태그 */}
    {/* 리액트에서 import 해서 사용해야 함 */}
    {/* 이거 그냥 빈 태그로 감싸면 됨 */}
    // <Fragment>
    //   <div><Hello /></div>
    //   <div><Hello /></div>
    // </Fragment>
}

export default App;
