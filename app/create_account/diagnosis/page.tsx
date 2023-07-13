'use client';
import { Button, Button_link } from '@/ui/button/button';
import Diagnosis from '@/ui/diagnosis';
<<<<<<< HEAD
import NavLink from '@/ui/nav_link/navlink';
=======
import { NavItem, Navlink_all } from '@/ui/nav_link';
import NavLink from '@/ui/nav_link/navlink';
import NavLink_now from '@/ui/nav_link/navlink_now';
import Image from 'next/image';
>>>>>>> 23f6fe8dd523d2e3f06370219a85eb652937aa30

export default function DiagnosisStart() {
  return (
    <>
<<<<<<< HEAD
      <Diagnosis />
      <Button_link>始める</Button_link>
=======
      <Navlink_all>
        <NavItem>
          <NavLink_now className="mb-2">
            <Image src="/check.svg" width={34} height={34} alt="完了" />
          </NavLink_now>
          <p>基本情報</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">2</NavLink>
          <p>事前診断</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">3</NavLink>
          <p>診断結果</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">4</NavLink>
          <p>登録完了</p>
        </NavItem>
      </Navlink_all>

      <Diagnosis />
      <Button_link>診断を始める</Button_link>
>>>>>>> 23f6fe8dd523d2e3f06370219a85eb652937aa30
    </>
  );
}
