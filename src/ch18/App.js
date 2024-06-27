import MainHeader from "./components/MainHeader/MainHeader";
import MainLayout from "./components/MainLayout/MainLayout";
import MainBody from "./components/MainBody/MainBody";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import { Global } from "@emotion/react";
import { reset } from "./styles/global";
import { useState } from "react";

function App() {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false);
    return (
        <>
            {/* 최상위 영역에 reset으로 들어갈 css 입력 */}
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader
                    setMainSidebarShow={setMainSidebarShow}
                    />
                <MainBody />
                <MainSidebar
                    isMainSidebarShow={isMainSidebarShow}
                    setMainSidebarShow={setMainSidebarShow}
                    />
            </MainLayout>
        </>
    );
}

export default App;