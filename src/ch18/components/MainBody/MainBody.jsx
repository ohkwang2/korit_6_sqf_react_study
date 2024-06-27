/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";

function MainBody() {
    return (
        <div css={s.layout}>
            {/* 해당 영역만 내용 전환이 되고, 화면 전체가 다시 호출되지는 않음. */}
            <Routes>
                {/* path="/경로/*" <- 서브 라우터 */}
                <Route path="/routstudy/*" element={<RouteStudyPage />}/>

            </Routes>
        </div>
    );
}

export default MainBody;