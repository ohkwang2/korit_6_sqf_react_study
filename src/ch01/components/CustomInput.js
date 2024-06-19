// 컴포넌트의 매개변수는 무조건 'props'가 들어옴
// props는 매개변수의 속성값을 의미
// props 안에는 최초 값이 비어있음
// 이걸 비구조 할당으로 바로 써야함.
// 비구조 할당으로 매개변수를 입력할 경우 해당 객체를 자동완성으로 확인할 수 있음.
function CustomInput ({ ph, disabled, value }) {
    // console.log(props);
    return <input type="text" placeholder={ph} disabled={disabled} value={value} /> // input 태그도 JSX에서는 태그를 닫아주어야 함.
}

CustomInput.defaultProps = {
    ph: "text",
    disabled: false,
    value: "빈값"
}

export default CustomInput;