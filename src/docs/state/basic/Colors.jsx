import React, { useState } from 'react';

const Colors = () => {
  //빨간색 버튼을 누르면 글자색을 빨갛게
  //파란색 버튼을 누르면 글자색을 파랗게
  // 핑크색을 입력하면 글자 색을 없앤다.

  const [result, setRestlt] = useState("");
  const [color, setColor] = useState("");
  
  
  const changeToRed = () => {
    setColor("red")
  }
  const changeToBlue = () => {
    setColor("blue")
  }
  const onChangeInputValue = (e) =>{
    setRestlt(e.target.value)
    if(e.target.value === "핑크색"){
      setColor("")
      return setRestlt(e.target.value)
    }
  }
  console.log(color)

  return (
    <div>
      <p style={{color}}>{result}</p>
      <input type="text" onChange={onChangeInputValue} />
      <br />
      <button onClick={changeToRed} >빨간색</button>
      <button onClick={changeToBlue} >파란색</button>
    </div>
  );
};

export default Colors;