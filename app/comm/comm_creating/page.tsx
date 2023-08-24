'use client';

import { Button_link } from '@/ui/button/button';
import FlexCenter from '@/ui/center';
import { FlexCenter_L, FlexSquare } from '@/ui/community/circle';
import NavigationBar from '@/ui/navigation-bar';
import {
  Input_L,
  Label
} from 'ui/createAccount/formItem';

<Input_L></Input_L>
export default function Test() {
  return (
    <>
      <div className=' flex justify-center pb-12 pt-5"'>
        <a href="." className="font-sans font-medium text-xl leading-6">＜</a>
        <div className="text-center font-sans font-medium text-xl leading-6 ">コミュニティ</div>
      </div>

      <div className=' flex justify-center pb-10'>
        {/* ここにアイコン */}
        <FlexCenter_L>
        <FlexSquare>
        </FlexSquare>
      </FlexCenter_L>

      </div>

      <form className="mx-auto mt-6 flex w-60 flex-col items-center pb-6">
        <div className="mb-6 w-full">
          <Label className=' font-sm'>ユーザーネーム</Label>
          <Input_L type="tel" name="tel" placeholder="ユーザーネーム" />
        </div>
      </form>

      <FlexCenter className="flex-col">
        <Button_link href="comm_home">アカウント作成</Button_link>
      </FlexCenter>

      {/* 3つのアイコン */}
      <div className="fixed bottom-0  w-full">
        <NavigationBar />
      </div>

    </>
  );
}
