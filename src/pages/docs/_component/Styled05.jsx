import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';

//폰트어썸 아이콘 사용
const Styled05 = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faHippo} />
      <FontAwesomeIcon icon={faTree} spin />
    </div>
  );
};

export default Styled05;