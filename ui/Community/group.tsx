'use group';

import styled from 'styled-components';
import Image from 'next/image';

// const Group = styled.div`
//   <input type="text" name="name" value="" placeholder="山田 太郎">
// `;

export default function Group() {
  return (
    <>

      <h1>グループ</h1>
      <div className=''>
      <Image
        src="/search.svg"
        alt="magn glassifying"
        width={24}
        height={24}
      />
      <input type="text" name="name" value="" placeholder="グループを検索"></input>
      </div>
    </>
  );
}
