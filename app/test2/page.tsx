'use client';

import styled from 'styled-components';
import Group from "@/ui/community/group";
import "@/ui/community/group";
import Flexusericon from "@/ui/community/circle";
import Icon_size from "@/ui/community/icon_size";
import Image from 'next/image';


const StyledButton = styled.a`
    // filebutton
    
`;

export default function test2() {
  const handleClick = () => {
    alert('Clicked!');
    
  };

  return (
    <>
      <h1>テストtest</h1>
      <Icon_size></Icon_size>
      <label>テスト</label>
      <p>テスト</p>

      <p>message_icon</p>

      <StyledButton onClick={handleClick}>Click me!</StyledButton>
      {/* ↑ クリック時の処理を指定したボタン要素 */}


    </>
  );
}


