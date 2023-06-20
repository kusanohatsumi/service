'use client';
import Button__border from '@/ui/button/button-border';
import border_buttom from '@/ui/button/border-buttom';
import Button from '@/ui/button/button';
import styled from 'styled-components';
import FlexCenter from '@/ui/center';
import Errer from '@/ui/error_mes';
import Text_line from '@/ui/text_lien';
import text_borderline from '@/ui/text_borderline';

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

const Collarfont = styled.div`
font-size: large;
font-weight: 100;
background: linear-gradient(
  90deg,
  rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 300%;
    font-weight: bold;
    display: inline-block;
}
`;

export default function Login() {
  return (
    <>
      <Collarfont>
        
      </Collarfont>
      <Collarfont>
        <h1>アカウント作成</h1>
      </Collarfont>

      <Errer></Errer>

      <h2>ユーザーネーム</h2>
      <Text_line><input type="text" id="name" name="name" placeholder="username" ></input></Text_line>
      
      <Errer><h3>エラーメッセージをここに表示</h3></Errer>
     
      
      <h2>ユーザーID</h2>
      <Text_line><input type="text" id="name" name="name" placeholder="username"></input></Text_line>
      <div className='<text_bor>'></div> 

      <Container>
        <div className="flex flex-col items-center">
          {/* ボタン */}
          <FlexCenter className=" flex-col">
            <Button_bg>
              <Button>ログイン</Button>
            </Button_bg>
          </FlexCenter>
        </div>
      </Container>
    </>
  );
}
