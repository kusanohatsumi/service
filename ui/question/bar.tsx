'use client';

import styled from 'styled-components';

const Bar = styled.input.attrs({
  type: 'range',
  min: 0,
  max: 6,
})`
  -webkit-appearance: none;
  appearance: none;
  width: 500px;
  hright: 2px;
  background: #8ad8d4;
`;

export default Bar;
