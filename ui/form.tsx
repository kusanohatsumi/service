'use client';

import styled from 'styled-components';
import { Button_link } from './button/button';
import {
  InputWrap,
  Input_L,
  Input_M,
  Input_S,
  Label,
} from './createAccount/formItem';

export default function Form() {
  return (
    <>
      <form className="mx-auto mt-6 flex w-60 flex-col items-center">
        <div className="mb-6 w-full">
          <Label>氏名</Label>
          <InputWrap>
            <Input_M type="name" name="性" placeholder="性" />
            <Input_M type="name" name="名" placeholder="名" />
          </InputWrap>
        </div>
        <div className="mb-6 w-full">
          <Label>生年月日</Label>
          <InputWrap>
            <Input_S type="number" name="year" placeholder="2023" />
            <Input_S type="number" name="mounth" placeholder="06" />
            <Input_S type="number" name="date" placeholder="01" />
          </InputWrap>
        </div>

        <div className="mb-6 w-full">
          <Label>電話番号</Label>
          <Input_L type="tel" name="tel" placeholder="電話番号" />
        </div>

        <div className="mb-6 w-full">
          <Label>住所</Label>
          <Input_L type="text" name="text" placeholder="都道府県" />
        </div>

        <div className="mb-6 w-full">
          <Label>パスワード</Label>
          <div>
            <Input_L type="password" name="password" placeholder="パスワード" />
          </div>
        </div>
        <div className="mb-6 w-full">
          <Label>パスワード確認用</Label>
          <div>
            <Input_L
              type="password"
              name="password"
              placeholder="パスワード確認"
            />
          </div>
        </div>
        {/* <Button type="submit">本人認証へ進む</Button> */}
        <Button_link href="/create_account/diagnosis">
          本人認証へ進む
        </Button_link>
      </form>
    </>
  );
}
