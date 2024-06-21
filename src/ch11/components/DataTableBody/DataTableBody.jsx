import "./style.css"

function DataTableBody({ mode, products }) {
    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" disabled={mode !== 3}/></th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(products => {
                            return (
                                <tr key={products.id}>
                                    <th><input type="checkbox" disabled={mode === 0 || mode === 1} /></th>
                                    <td>{products.id}</td>
                                    <td>{products.productName}</td>
                                    <td>{products.size}</td>
                                    <td>{products.color}</td>
                                    <td>{products.price}</td>
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