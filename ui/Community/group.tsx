'use group';

import styled from 'styled-components';
import Image from 'next/image';

const Transparent = styled.input.attrs({
  type: 'text',
  name: 'name',
  placeholder: 'グループを検索',
  
})`outline:none;
  
`;

export default function Group() {
  return (
    <>

      <h1>グループ</h1>

      <div id='pink' className='flex items-center w-64 border-2 bordre-solid border-vercel-pink'>

        <Image
          src="/search.svg"
          alt="magn glassifying"
          width={24}
          height={24}
        />

        <Transparent></Transparent>
      </div>

    </>
  );
}
