'use client';

import styled from 'styled-components';
import { Pseudoelement } from '@/ui/pseudoelement';
import { Bg_PG } from '../color/color';

// タイトルの表示エリア
export const TitleSpace = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
`;

// 項目
export const TitleText = styled.h2`
  width: 100%;
  ${Bg_PG}
  line-height: 35px;
  color: transparent;
  -webkit-background-clip: text;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: url('/arrow_back.svg');
    position: absolute;
    left: 12px;
  }
`;
// 項目 グラデーション
export const TitleText_Grad = styled.h2`
  width: 100%;
  line-height: 35px;

  color: #333;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: url('/arrow_back.svg');
    position: absolute;
    left: 12px;
  }
`;

// 検索バー
export const TitleSerchWrap = styled.div`
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
export const TitleSerchInput = styled.input.attrs({
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
    border:solid 2px skyblue;
  `;
