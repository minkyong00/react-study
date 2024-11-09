import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/font';

const FontButtonComponent = () => {
  const font = useSelector((state) => state.font)
  const fontSize = useSelector((state) => state.fontSize)
  // console.log(useSelector((state) => state))
  const dispatch = useDispatch();

  return (
    <div>
      <p style={{ fontSize }}>{font}</p>
      {fontSize}
      <button onClick={() => { dispatch(decrease())}}>폰트 2rem</button>
      <button onClick={() => { dispatch(increase())}}>폰트 5rem</button>
    </div>
  );
};

export default FontButtonComponent;