/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  컴포넌트는 대문자로 만들어야 함.
  JSX
    1. 태그를 열었으면 닫아야한다. <a></a>, <a />
    2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
      (이 때, 두 개의 div를 묶어서 사용해야 할 경우 <></> <- Fragment를 주로 사용)
    3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다. ({$} <- 요게 아니라 {} <- 요거만 사용해도 됨)
 */

import { Fragment } from "react";
import "./App.css"; //css import시 ""안에 경로만 입력 (src에 있는 App.css)
import Hello from "./components/Hello";
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";

function App() {
  const name = "김준일";
  const fontColorRed = {
    color: "red"
  };
  // JSX도 값이기 때문에 변수에 담을 수 있음.
  const age = <h2>{31}</h2>;

  return <>
    <div>
      <Hello />
    </div>
    <div>
      <Hello />
    </div>
    <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1>
    {/* 함수 호출 및 매개변수 대입 */}
    <CustomInput ph={"이름"} disabled={true} value={"김준일"} />
    <CustomInput ph={"나이"} disabled={false} />
    <CustomInput ph={"연락처"} disabled={true} />
    <Box name={"김준일"} ageJsx={age} isShow={true}/>
    {/* isShow 속성값이 있으면 true, 없으면 false로 사용할 수 있으나 향후에는 {}값에 변수가 들어올 것 */}
    {/* Props의 children을 사용할 경우 아래와 같이 설정 */}
    <Box name={"김준일"}>{age}<h2>32</h2></Box>
  </>
    {/**/}
    // 위 형태로 주석 처리
    // 직접 태그를 만들 경우 구분하기 위해 컴포넌트를 대문자로 설정
    {/* <Hello /> */}
    // Fragment 태그 <- JSX에서 여러개의 div를 묶어서 처리하기 위한 태그
    // 리액트에서 import 해서 사용해야 함
    // 이거 그냥 빈 태그로 감싸면 됨
    // <Fragment>
    //   <div><Hello /></div>
    //   <div><Hello /></div>
    // </Fragment>
}

export default App;
