import { wait } from "@testing-library/user-event/dist/utils";

function PromiseTest() {
    /**
     * 
     * promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태
     * 3. 거부 -> 연산을 실패했을 때의 상태
     * 
     */

    // promise를 정의해둘 수 없음. (정의하고 변수를 사용하지 않아도 즉시 실행됨)
    // const p1 = new Promise((resolve, reject) => {
        //     console.log("프로미스 생성");
        // });
        
    // 정의를 하고 싶으면 함수 안에 넣으면 가능
    function p1(name) {
        // resolve -> 이행 함수 (비동기 처리), reject -> 거부 함수
        return new Promise((resolve, reject) => {
            // 대기(동기 처리)
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류!!!");
            }
            resolve(name);
        });
    }

    // 함수 앞에 async를 달아 놓으면 해당 함수는 promise를 return
    async function p2() {
        let a = null;
        // p4().then(r => a = r);  // 비동기로 p4()값을 가져와서 result에 넣어줘야 하는데, 비동기로 처리됨
        // async에서는 return의 값이 바로 Promise의 resolve에 들어가서 호출 됨
        // return a;   //위 실행문이 비동기로 실행되기 이전에 바로 실행되어 null이 출력됨

        // await은 동기처리 (이행 결과값을 뒤에 실행문이 실행되지 않고 처리 후 다음으로 넘어감)
        // await은 aysnc 안에서만 사용할 수 있고, promise 객체에만 사용할 수 있음.
        // setTimeout(() => {}, 2000); // await 사용 불가 이럴 경우 최상위에 setTimeout을 두어야 함
        try {
            a = await p4(); // await -> 이행할 때까지 기다려
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
            // return에 p3를 준다고 해서 resolve를 호출하지 않음.
            // return "p3";
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!");
    }

    const handleClick = () => {
        // 또 다른 대기 상태로 then을 넣어줄 수 있음.
        // 이행은 return을 걸어주면 됨
        p1("p1").then(result=> {
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부권 행사!");    //거부 (reject)
            }
            return "두번째 then"    // return은 해당 then의 이행(resolve)을 의미 (return값이 없으면 빈 값이 result에 들어감)
        }).then(result => {
            console.log(result);    // 앞의 promise 값이 return이 없을 경우 result 값은 undefined 출력
        }).catch(error => {
            // console.log(error);
        });
        // then의 순서대로 가는 것을 비동기(promise 자체) 안의 동기(then은 순차적인 동기 처리)
        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
                // return "p2..."
            })
            // .then(r => console.log(r));
        }, 2000);
        p3().then(r => console.log(r));
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
    );
}

export default PromiseTest;