function Box({ name, ageJsx, isShow, children }) {
    const result1 = true && <h3>안녕하세요.</h3>; // 값이 있는 상태는 true를 의미
    const result2 = true && 10;  // 해당 경우에는 값이 입력됨
    const result3 = false && 10;  // 해당 경우에는 값이 입력안되고, false가 들어감
    const result4 = true ? <h3>안녕하세요.</h3> : false;    // 삼항연산자의 응용이라고 생각하면 됨


    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);

    return <div>
        <h1>{name}</h1>
        {ageJsx}
        {children}
        {/* 표현식 내에서 null, true, false등의 예약어를 넣을 경우 문자열로 인식하지 않음 */}
        {/* 문자열로 인식시키고자 하면 ""로 감싸주어야 함. */}
        {true && "김준일"}
        {isShow && <h3>안녕하세요.</h3>}
        {isShow ? <h3>안녕하세요.</h3> : <h4>안녕하세요.</h4>}
    </div>
}

export default Box;