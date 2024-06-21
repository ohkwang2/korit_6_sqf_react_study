import { useRef, useState } from "react";
import "./style.css"

function DataTableHeader({ mode, setMode }) {

    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef(),
        d: useRef()
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            alert("상품추가");
        }
        if(mode === 2) {
            alert("상품수정");
        }
        if(mode === 3) {
            alert("상품삭제");
        }
        setMode(0);
    }

    const handleCancelClick = () => {
        setMode(0);
    }

    const resetMode = () => {
        setMode(0);
    }

    // [ inputProductList, setInputProdcutList ] = useState({...emptyProductList});
    // [ productList, setProduct ] = useState([]);

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { a, b, c, d } = inputRef;
            switch(e.target.name) {
                case "a":
                    b.current.focus();
                    break;
                case "b":
                    c.current.focus();
                    break;
                case "c":
                    d.current.focus();
                    break;
                case "d":
                    a.current.focus();
                    break;
                default:
            }

        }
    }

    return (
        <div className="table-header">
            <div className="input-group">
                <input name="a" type="text" placeholder="상품명"
                disabled={mode === 0 || mode === 3} 
                onKeyDown={handleInputKeyDown}
                ref={inputRef.a}
                autoFocus/>

                <input name="b" type="text" placeholder="사이즈"
                disabled={mode === 0 || mode === 3}
                onKeyDown={handleInputKeyDown}
                ref={inputRef.b}/>

                <input name="c" type="text" placeholder="색상"
                disabled={mode === 0 || mode === 3}
                onKeyDown={handleInputKeyDown}
                ref={inputRef.c}/>

                <input name="d" type="text" placeholder="가격"
                disabled={mode === 0 || mode === 3}
                onKeyDown={handleInputKeyDown}
                ref={inputRef.d}/>
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCancelClick}>취소</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default DataTableHeader;