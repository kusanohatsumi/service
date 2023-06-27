'use client';
import styled from 'styled-components';

// チェクボックス
const Input = styled.input.attrs({
  type: 'radio',
  name: 'choice',
})`
  cursor: pointer;
  width: 158px;
  height: 38px;
  appearance: none;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  &::before,
  &::after {
    content: '';
    width: 22px;
    height: 22px;
    display: block;
    position: absolute;
    top: 8.5px;
    left: 12px;

  }
  &::before {
    border: dashed 2px #8ad8d4;
    border-radius: 50%;
    background: #fff;
  }
  &::after {
    width: 22px;
    height: 12px;
    opacity: 0;
    top:9px;
    left:0px
    outline:solid 2px skyblue;
    transform: rotate(-45deg);
    border-left: solid 3px #8ad8d4;
    border-bottom: solid 3px #8ad8d4;
  }
  &:checked::before {
    border: none;
  }
  &:checked::after {
    opacity: 1;
  }
`;

const Button__border = styled.div`
  background: #fff;
  width: 158px;
  height: 38px;
  position: absolute;
  left: 2px;
  line-height: 38px;
  text-align: center;
  border-radius: 25px;
  color: #8ad8d4;
`;

const Button = styled.div`
  // ボタンの背景
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  width: 154px;
  height: 40px;
  width: 162px;
  height: 42px;
  border-radius: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Button_bg = styled.div`
  width: 162px;
  height: 42px;
  position: relative;
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

export default function QuestionChoiceBtn() {
  return (
    <>
      <form>
        <Button className="checkbox">
          <Input defaultChecked />
          <Button__border></Button__border>
        </Button>

        <Button className="checkbox">
          <Input />
          <Button__border></Button__border>
        </Button>
      </form>
    </>
  );
}

// border: dashed 2px #8ad8d4;
