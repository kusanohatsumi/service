'use client';

import { Bg_div_PG } from 'ui/color/color';
import { Pseudoelement } from 'ui/pseudoelement';
import styled from 'styled-components';

const Dummy = styled.div`
  width: 35px;
  height: 35px;
  background: #f4bcf7;
`;

const SerchWrap = styled.div`
  position: relative;
  width: 254px;
  height: 35px;
  font-size: 12px;
  display: flex;

  &::before {
    ${Pseudoelement}
    width:25px;
    height: 25px;
    z-index: 20;
    position: absolute;
    top: 6px;
    left: 10px;
    background: url('/search.svg');
  }
`;

const Serch = styled.input.attrs({
  type: 'text',
  placeholder: 'グループを検索',
})`
  background: #fff;
  width: 250px;
  height: 31px;
  position: absolute;
  top: 2px;
  left: 2px;
  outline: none;
  border-radius: 25px;
  padding-left: 40px;
  padding-right: 8px
  font-size: 12px;
`;
export default function HomeHeader() {
  return (
    <>
      <div className="flex items-center justify-around">
        <div>
          <Dummy />
        </div>
        <SerchWrap>
          <Bg_div_PG />
          <Serch />
        </SerchWrap>
        <div>
          <Dummy />
        </div>
      </div>
    </>
  );
}
