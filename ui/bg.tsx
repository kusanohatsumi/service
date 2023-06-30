'use client';
import styled from 'styled-components';

// グリーンからピンクのグラデーション
export const Bg_GP =
  'background: linear-gradient(-90deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%);';
export const Bg_div_GP = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

// ピンクからグリーンのグラデーション
export const Bg_PG =
  'background: linear-gradient(90deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%);';
export const Bg_div_PG = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

// 背景色：白
export const Bg_White = 'background:#fff;';
