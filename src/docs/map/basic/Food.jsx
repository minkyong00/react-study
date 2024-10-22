import React from 'react';

// 객체이므로 {name}으로 매개변수를 받음
const Food = ({food, style}) => {
  // const {name} = props;
  return (
    <li style={style}>
      {food.name}
    </li>
  );
};

export default Food;