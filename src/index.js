import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch09/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 기본 HTML에 root 부분에 들어갈 내용.
  // 기본 App.js로 들어가는 것이 정석
  // 전역에 들어가는 내용을 설정하는 것 이외에는 해당 파일은 따로 설정하지 않음.
    // App을 꼭 호출할 필요는 없음
    // 리액트 라우터 돔을 사용하려면 무조건 브라우저 라우터로 app을 감싸놔야 함.
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // <div>test</div>
);
