import React from 'react';
import Food from './Food';

const Foods = ({foods, style}) => {
  return (
    <ul>
      {foods.map((food, i) => <Food key={i} food={food} style={style} />)}
    </ul>
  );
};

export default Foods;