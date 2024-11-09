import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { input } from '../../../modules/font';

const FontInputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const inputSize = useSelector((state) => state.inputFontSize);
  const dispatch = useDispatch();
  const onChangeToInputValue = (e) => {
    setInputValue(e.target.value);
  }

  
  return (
    <div>
      <p style={{ inputSize }}>{inputSize}</p>
      <input type="text" onChange={onChangeToInputValue} value={inputValue} />
      <button onClick={() => { dispatch(input(inputValue))}}>사이즈 변경</button>
    </div>
  );
};

export default FontInputComponent;