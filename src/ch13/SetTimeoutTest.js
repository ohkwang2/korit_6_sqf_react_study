function SetTimeoutTest() {
    /*
        비동기
        매개변수로 함수를 받아와서 해당 함수를 필요한 시점에 실행
        비동기 안에서 동기로 명령문 실행
    */
        setTimeout(() => {
            print(count);
        }, 2000);
    
        function print(fx) {
            fx();
            console.log(4);
        }
    
        function count() {
            console.log(1);
            console.log(2);
            console.log(3);
        }
    
        /*
            콜백함수
            매개변수에 함수를 전달하는 함수 '(함수) => {}'를 callback함수라 함.
        */
       function test(fx) {
        console.log("test 함수 호출");
            fx();
       }
    
       function add() {
        console.log("add 함수 호출");
       }
    
       test(add);
    
        return <>
        </>
    }

export default SetTimeoutTest;