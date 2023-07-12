import styled from 'styled-components';
import { Bg_PG } from '../color/color';

export const PageNation = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  font-size: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PageNation__Item = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:nth-child(1) {
    &::before {
      content: '1';
      display: block;
      width: 34px;
      height: 34px;
      line-height: 34px;
      color: #fff;
      text-align: center;
      border-radius: 50%;
      background: linear-gradient(
        -90deg,
        rgba(244, 188, 247, 1) 0%,
        rgba(154, 229, 225, 1) 100%
      );
    }

    // &::after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   top: 27%;
    //   left: 40px;
    //   width: 34px;
    //   height: 2px;
    //   ${Bg_PG}
    // }
  }
`;
export const Number = styled.div`
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  border-radius: 50%;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: #fff;
`;
export const Border = styled.div`
  width: 34px;
  line-height: 34px;
  ${Bg_PG}
`;

export default function Navlink() {
  return (
    <>
      {/* <PageNation>
        <NavItem>
          <NavLink className="mb-2">1</NavLink>
          <NavLink_now className="mb-2">
            <Image src="/check.svg" width={34} height={34} alt="完了" />
          </NavLink_now>
          <p className="opacity-60">基本情報</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">2</NavLink>
          <p>本人認証</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">3</NavLink>
          <p>事前診断</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">4</NavLink>
          <p>診断確認</p>
        </NavItem>
      </PageNation> */}
    </>
  );
}
