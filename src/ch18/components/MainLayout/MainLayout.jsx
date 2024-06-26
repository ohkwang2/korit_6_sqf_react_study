/** @jsxImportSource @emotion/react */
import * as s from "./style";
// ★children 다시 확인 필요★
// 상위 요소 안에 자식으로 해당 컴포넌트가 들어갈 경우 사용
// ex <부모>{children}</부모>
function MainLayout({ children }) {
    return (
        <div css={s.layout}>
            { children }
        </div>
    );
}

export default MainLayout;