/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";

function RouteStudySubPage1() {
    return (
        <div>
            <ul>
                <Link to={"/routstudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routstudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routstudy/page1/address"}><li>주소</li></Link>
            </ul>
            <div>
                <Routes>
                    <Route path="/name/*" element={<div><h1>name</h1></div>} />
                    <Route path="/age" element={<div><h1>age</h1></div>} />
                    <Route path="/address" element={<div><h1>address</h1></div>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage1;