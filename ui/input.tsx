'use client';
import styled from 'styled-components';

//新規登録のフォームで使用する部品
const Input = styled.input.attrs({
  required: true,
})`
  padding: 4px;
  border-bottom: solid 1px #999;
  outline: none;
`;

export default Input;
