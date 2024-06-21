import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch11/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 기본 HTML에 root 부분에 들어갈 내용.
  // 기본 App.js로 들어가는 것이 정석
  // 전역에 들어가는 내용을 설정하는 것 이외에는 해당 파일은 따로 설정하지 않음.
    // App을 꼭 호출할 필요는 없음
    <App />
    // <div>test</div>
);
