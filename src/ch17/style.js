import { css } from "@emotion/react";
// 스타일을 줄여서 앞에 s를 붙임 (단, 파일을 별도로 분리할 경우 일반 변수명 사용)
// 이모션 문법

const common = (width, height) => `
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: ${width}px;
    height: ${height}px;
`;

export const wrap = css`
    ${common(500, 500)};
    
`;

export const container = css`
    ${common(400, 400)};

`; 

export const main = css`
    ${common(300, 300)}
`;

export const mainButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1b1b1b;
    border-radius: 5px;
    padding: 20px;
    width: 200px;
    height: 30px;
    font-size: 16px;
    font-weight: 200;
    color: white;
    background-color: #dbdbdb;
    cursor: pointer;
        &:hover {
        color: black;
    }
`;