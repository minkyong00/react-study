import React from 'react';

const Animal = ({state, actions}) => {
  const { animals } = state;
  const { insert, remove } = actions;
  const animalList = animals.map((animal, i) => (
  <li key={i}>
      <button onClick={() => { remove(i) }}>{animal}</button>
  </li>
))

  return (
    <ul>
      {animalList}
    </ul>
  );
};

export default Animal;