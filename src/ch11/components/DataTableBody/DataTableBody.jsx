import { useEffect, useRef, useState } from "react";
import "./style.css"

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting, setEditProductId }) {
    
    const [ viewProducts, setViewProducts ] = useState([]);
    const [ checkedAll, setCheckedAll ] = useState(false);

    // 최초 렌더링시 resetCheck()가 동작되어 checked가 reset됨
    useEffect(() => {
        if(mode === 0) {
            // product나 mode가 변하면 checked를 reset
            resetViewProducts();
            // 모드가 바뀌면 전체선택 checked를 reset
            setCheckedAll(false);
        }
    }, [products, mode]);

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) {
            setCheckedAll(false);
        }else {
            setCheckedAll(true);
        }
    }, [viewProducts]);

    useEffect(() => {
        if(isDeleting) {
            setProducts([ ...viewProducts
                .filter(viewProduct => viewProduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct;
                    return product;
                })
            ]);
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting])

    useEffect(() => {
        if(mode === 2) {
            const [ selectedProduct ] = viewProducts.filter(product => product.isChecked);
            setEditProductId(!selectedProduct ? 0 : selectedProduct.id);
        }
    }, [viewProducts]);
    
    const resetViewProducts = () => {
        // products를 가지고 와서 전부 반복을 돌려서 checked 속성을 부여하고 false로 바꿔줌.
        setViewProducts([ ...products.map(product => ({...product, isChecked: false})) ]);
    }

    const handleCheckedChange = (e) => {
        if(mode === 2) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            // checked 속성을 '!'을 활용하여 토글 시켜서 계속 바꿔줄 수 있게 설정
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        // checked 속성을 '!'을 활용하여 토글 시켜서 계속 바꿔줄 수 있게 설정
                        isChecked: false
                    };
                })];
            });
        }
        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            // checked 속성을 '!'을 활용하여 토글 시켜서 계속 바꿔줄 수 있게 설정
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                })];
            })
        }
        
    }

    const handleCheckedAllChange = (e) => {
        // 이벤트 동작으로 인한 변화와 checked 상태의 변화를 분리
        setCheckedAll(checked => {
            if(!checkedAll) {
                setViewProducts([ ...products.map(product => ({...product, isChecked: true})) ]);
                // 여기서 return을 쓰면 언마운트로 사용 됨
                // return
            } else {
                resetViewProducts();
            }
            return !checked
        });
    }
    
    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th><input
                            type="checkbox"
                            disabled={mode !== 3}
                            onChange={handleCheckedAllChange}
                            checked={checkedAll}
                        />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => {
                            return (
                                <tr key={product.id}>
                                    <th><input
                                        type="checkbox"
                                        disabled={mode === 0 || mode === 1}
                                        onChange={handleCheckedChange}
                                        checked={product.isChecked}
                                        value={product.id}
                                    />
                                    </th>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.size}</td>
                                    <td>{product.color}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* table에는 overflow시 스크롤이 적용되지 않기 때문에 div로 감싸서 div가 직접적으로 안 보이도록 설정 */}
            {/* <div className="table-body-scroll">
                <table>
                    
                </table>
            </div> */}

        </div>
    );
}

export default DataTableBody;