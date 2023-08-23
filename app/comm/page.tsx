'use client';

import { Button_link } from '@/ui/button/button';
import FlexCenter from '@/ui/center';
import MyComponent from '@/ui/community/icon_folder';
import NavigationBar from '@/ui/navigation-bar';
import {
  Input_L,
  Label
} from 'ui/createAccount/formItem';

<Input_L></Input_L>
export default function Test() {
  return (
    <>
      <div className="text-center font-sans font-medium text-xl leading-6">コミュニティ</div>

      <div className=' flex justify-center'>
        <MyComponent></MyComponent>
      </div>

      <form className="mx-auto mt-6 flex w-60 flex-col items-center">
        <div className="mb-6 w-full">
          <Label>ユーザーネーム</Label>
          <Input_L type="tel" name="tel" placeholder="電話番号" />
        </div>
      </form>

      <FlexCenter className="flex-col">
        <Button_link href="/create_account">新規登録</Button_link>
      </FlexCenter>
      
      {/* 3つのアイコン */}
      <div className="fixed bottom-0  w-full">
        <NavigationBar />
      </div>

      </>
      );
}
