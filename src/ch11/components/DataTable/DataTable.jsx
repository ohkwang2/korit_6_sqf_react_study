import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/SampleProducts";

function DataTable() {

    // mode값이 0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    // checkboxState값이 false = unChecked, true = checked
    const [ mode, setMode ] = useState(0);
    const [ products, setProducts] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ isDeleting, setDeleting ] = useState(false);
    const [ editProductId, setEditProductId ] = useState(0);

    // 페이지가 최초에 한 번 열렸을 때
    // 맨 처음 한 번 디펜던시를 비워주기 위함
    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        // 로컬 스토리지가 비었으면 빈 배열, 비지 않았으면 기존 products 리스트 호출해서 products에 값을 넣어줌.     
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
    }, []);

    // products의 상태가 변하면 로컬 스토리지에 자동 동기화 되도록 설정
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);
    
    return (
        <div className="table-main-container">
            <DataTableHeader
                mode={mode} setMode={setMode}
                products={products} setProducts={setProducts}
                setDeleting={setDeleting}
                editProductId={editProductId}
            />

            <DataTableBody
                mode={mode} setMode={setMode}
                products={products} setProducts={setProducts}
                isDeleting={isDeleting} setDeleting={setDeleting}
                setEditProductId={setEditProductId}
            />
        </div>
    );
}

export default DataTable;