import { useRef, useState } from "react";
import "./style.css"

function DataTableHeader({ mode, setMode, products, setProducts, isChecked, setIsChecked }) {
    const today = new Date();
    let initialId = parseInt(`${today.getFullYear()}${today.getMonth()+1}${today.getDate()}001`);
    // console.log(initialId);

    const emptyProduct = {
        id: 0,
        productName: "",
        size: "",
        color: "",
        price: ""
    }

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [ inputProduct, setInputProduct ] = useState({ ...emptyProduct });

    const getNewId = () => {
        const productIds = products.map(product => product.id);
        const maxProductId = productIds.length === 0 ? initialId : Math.max.apply(null, productIds);
        // console.log(maxProductId);
        return maxProductId + 1;
    }

    const excludeAtrribute = (array, key) => {
        return array.map(obj => {
          const { [key]: _, ...restArrays } = obj;
          return restArrays;
        });
    };
      
    const validation = (array, targetObject) => {
        return array.some(obj => {
            return Object.keys(targetObject).every(key => obj[key] === targetObject[key]);
        });
    };  

    const InputValidation = (inputProduct) => {
        const newProducts = excludeAtrribute(products, "id");
        const { ["id"]:_, ...sortedInputProduct } = inputProduct;
        // console.log(newProducts)
        // console.log(sortedInputProduct)
        if(validation(products, sortedInputProduct)) {
            alert("중복된 값이 이미 존재합니다. 다른 값을 입력하세요");
            return;
        }
        addItem(inputProduct);
    }

    const addItem = (inputProduct) => {
        setProducts(products => 
            {inputProduct.id = getNewId();
                return (
                    [
                        ...products,
                        inputProduct]
                )
            });
        alert("상품추가");
        clearInputValue();
    }

    const clearInputValue = () => {
        setInputProduct(inputProduct =>{
            return {
                ...emptyProduct
            }
        });
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleInputChange = (e) => {
        setInputProduct(inputProduct => {
            return {
                ...inputProduct,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            InputValidation(inputProduct);
            return;
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
            const { productName, size, color, price } = inputRef;
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
                <input name="productName" type="text" placeholder="상품명"
                disabled={mode === 0 || mode === 3}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                ref={inputRef.productName}
                value={inputProduct.productName}
                autoFocus/>

                <input name="size" type="text" placeholder="사이즈"
                disabled={mode === 0 || mode === 3}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={inputProduct.size}
                ref={inputRef.size}/>

                <input name="color" type="text" placeholder="색상"
                disabled={mode === 0 || mode === 3}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={inputProduct.color}
                ref={inputRef.color}/>

                <input name="price" type="text" placeholder="가격"
                disabled={mode === 0 || mode === 3}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={inputProduct.price}
                ref={inputRef.price}/>
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