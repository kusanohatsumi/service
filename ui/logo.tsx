import Image from 'next/image';
import styled from 'styled-components';

export default function Logo() {
  return (
    <>
      <Image src="/logo.png" alt="logo" width={200} height={200} />
    </>
  );
}
