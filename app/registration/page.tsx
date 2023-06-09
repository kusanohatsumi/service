'use client';
import Button from '@/ui/button/button';
import Button__border from '@/ui/button/button-border';
import FlexCenter from '@/ui/center';
import External from '@/ui/external';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;
  @media (max-height: 700px) {
    padding-top: 4vh;
  }
`;

const Button_bg = styled.div`
  width: 162px;
  height: 42px;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export default function Registration() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center">
          {/* ロゴ */}
          <Image
            className="mb-10 mt-6"
            src="/logo.png"
            width={150}
            height={150}
            alt="logo"
          />
          {/* ボタン */}
          <FlexCenter className=" flex-col">
            <Button className="mb-4">新規登録</Button>
            <Button_bg>
              <Button__border>ログイン</Button__border>
            </Button_bg>
          </FlexCenter>
        </div>
        <External />
      </Container>
    </>
  );
}
