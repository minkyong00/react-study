import React from 'react';
import Button from './style';

//...rest : rest파라미터, 몇 개 받을 지 모를 때 사용, 받은거 전달
//variant, shape, size, border, color, font 
const BasicButton = ({children, ...rest}) => {
  return (
      <Button {...rest}>{children}</Button>
  );
};


export default BasicButton;