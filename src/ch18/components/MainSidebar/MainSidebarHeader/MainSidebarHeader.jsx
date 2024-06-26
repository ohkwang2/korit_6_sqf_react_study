/** @jsxImportSource @emotion/react */
import { FaBars, FaBook } from "react-icons/fa";
import MainContainer from "../../MainHeader/MainContainer/MainContainer";
import * as s from "./style";

function MainSidebarHeader({ setMainSidebarShow }) {
    const handleMainMenuToggleClick = () => {
        setMainSidebarShow(false);
    }
    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                    <button
                        onClick={handleMainMenuToggleClick}
                        css={s.menuToggleButton}
                    >
                        <FaBars />
                    </button>
                </div>
            </MainContainer>            
        </div>
    );
}

export default MainSidebarHeader;