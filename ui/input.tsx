'use client';
import styled from 'styled-components';

const Input = styled.input.attrs({
  required: true,
})`
  padding: 4px;
  border-bottom: solid 1px #999;
  outline: none;
`;

export default Input;
