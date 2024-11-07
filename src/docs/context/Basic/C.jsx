import React from 'react';
import CharContext from './CharContext';

const C = () => {
  return (
    <CharContext.Consumer>
      { 
      (context) => <p style={{color : context.color}}>리액트 Context API 환영해!</p>
      }
    </CharContext.Consumer>
  );
};

export default C;