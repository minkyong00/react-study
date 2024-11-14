import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

//작업의 기술을 보여주는 페이지
const Job = () => {

  //url 파라미터, 쿼리스트링 2가지 방법
  // const [ searchParams ] = useSearchParams();
  // const title = searchParams.get("title");

  const { title } = useParams();

 // redux에 있는 값을 가져와서 각각에 요청된 페이지에 맞는 기술들을 화면에 출력
  const jobs = useSelector((state) => state.route.jobs);
  const { name, skills } = jobs[title];
  console.log(skills)

  const skillList = skills.map((skill) => (
    <>
      <li>{skill}</li>
    </>
  ))
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>기술</td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>{title}</td>
          </tr>
        <tr>
            <td>{name}</td>
          </tr>
        </tbody>
      </table>
        <ul>
          {skillList}
        </ul>
    </div>
  );
};

export default Job;