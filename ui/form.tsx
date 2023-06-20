'use client';
//新規登録のフォーム

import styled from 'styled-components';
import Button from './button/button';
import Input from './input';

export default function Form() {
  return (
    <>
      <form>
        <div>
          <label>名前</label>
          <div>
            <Input type="name" name="性" placeholder="性" className="mr-6" />
            <Input type="name" name="名" placeholder="名" />
          </div>
        </div>
        {/*  */}
        <div>
          <label>生年月日</label>
          <div>
            <Input
              type="number"
              name="year"
              placeholder="2023"
              className="mr-6"
            />
            <Input
              type="number"
              name="mounth"
              placeholder="06"
              className="mr-6"
            />
            <Input
              type="number"
              name="date"
              placeholder="01"
              className="mr-6"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <label>メールアドレスまたは電話番号</label>
          <Input
            type="email"
            name="email"
            placeholder="メールまたは電話番号"
            className="mr-6"
          />
        </div>
        {/*  */}
        <div>
          <label>パスワード</label>
          <div>
            <Input
              type="password"
              name="password"
              placeholder="メールまたは電話番号"
              className="mr-6"
            />
            <div className="cursor-pointer">👁‍🗨</div>
          </div>
        </div>
        {/*  */}
        <div>
          <label>パスワード確認用</label>
          <div>
            <Input
              type="password"
              name="password"
              placeholder="メールまたは電話番号"
              className="mr-6"
            />
            <div className="cursor-pointer">👁‍🗨</div>
          </div>
        </div>

        <Button>本人認証へ進む</Button>
      </form>
    </>
  );
}
