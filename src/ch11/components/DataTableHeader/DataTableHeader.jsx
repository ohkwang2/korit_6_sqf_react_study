import { useEffect, useRef, useState } from "react";
import "./style.css"
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, setProducts, setDeleting }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    }

    const inputRefs = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleInputChange = (e) => {
        // 값으로 객체를 넣고 싶으면 (inputData => ({객체}));
        // setInputData(inputData => ({
        //         ...inputData,
        //         [e.target.name]: e.target.value
        // }));
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const getNewId = (products) => {
        const productIds = products.map(product => product.id);
        const maxId =
            productIds.length === 0
                ? 0
                : Math.max.apply(null, productIds);
        return maxId;
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                return ([
                    ...products,
                    // key값이 해당 변수에 존재하는 이름이면 그냥 써도 되는데, 매개변수로 받아 올 경우 []로 감싸주어야 함.
                    { ...inputData, id: getNewId(products) + 1}
                ]);
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode(0);
        }
        if(mode === 2) {
            alert("상품 수정");
        }
        if(mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true);
                }
            });
        }
    }

    const handleCancelClick = () => {
        setMode(0);
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { productName, size, color, price } = inputRefs;
            switch(e.target.name) {
                case "productName":
                    size.current.focus();
                    break;
                case "size":
                    color.current.focus();
                    break;
                case "color":
                    price.current.focus();
                    break;
                case "price":
                    handleSubmitClick();
                    productName.current.focus();
                    break;
                default:
            }

        }
    }

    return (
        <div className="table-header">
            <div className="input-group">
                <input
                    name="productName"
                    type="text"
                    placeholder="상품명"
                    disabled={mode === 0 || mode === 3}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.productName}
                    value={inputData.productName}
                    autoFocus
                />

                <input
                    name="size"
                    type="text"
                    placeholder="사이즈"
                    disabled={mode === 0 || mode === 3}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={inputData.size}
                    ref={inputRefs.size}
                />

                <input
                    name="color"
                    type="text"
                    placeholder="색상"
                    disabled={mode === 0 || mode === 3}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={inputData.color}
                    ref={inputRefs.color}
                />

                <input
                    name="price"
                    type="text"
                    placeholder="가격"
                    disabled={mode === 0 || mode === 3}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={inputData.price}
                    ref={inputRefs.price}
                />
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