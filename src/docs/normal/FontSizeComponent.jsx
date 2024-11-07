import React from 'react';
import { FontSizeConsumer } from './FontContext';

//p태그의 폰트 사이즈를 context의 기본 폰트 사이즈로 지정하고
// 버튼을 누르면 0.5rem으로 작아지게 만든다.
const FontSizeComponent = () => {
  return (
    <FontSizeConsumer>
      {(context) => (
        <>
          <p style={{fontSize:context.state.fontSize}}>중간 childContainer입니다!</p>
          <button onClick={() => {context.action.setFontSize("0.5rem")}}>작아져라!</button>
        </>
      )}
    </FontSizeConsumer>
  );
};

export default FontSizeComponent;