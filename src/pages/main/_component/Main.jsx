import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div>
        여기는 메인 페이지
      </div>
      <Link to={"/intro"}>소개페이지로 이동</Link>
      {/* <a href='/intro'>소개페이지로 이동</a> */}
    </>
  );
};

export default Main;