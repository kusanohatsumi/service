'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Logo from './logo';

const Thema = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Launch() {
  return (
    <>
      <Thema className="flex items-center justify-center">
        <Logo />
      </Thema>
    </>
  );
}
