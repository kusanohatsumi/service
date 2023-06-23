'use client';
//新規登録のフォーム

import styled from 'styled-components';
import Button from './button/button';
import Input from './input';

export default function Form() {
  return (
    <>
      <form className="w-60 m-auto">
        <div className='top1'>
          <label>名前</label>
          <div className="flex justify-between">
            <Input type="name" name="性" placeholder="性" className="mr-6 w-24" />
            <Input type="name" name="名" placeholder="名" className="w-24"/>
          </div>
        </div>
        {/*  */}
        <div className='top2'>
          <label>生年月日</label>
          <div className="flex">
            <Input
              type="number"
              name="year"
              placeholder="2023"
              className="mr-6 w-16"
            />
            <Input
              type="number"
              name="mounth"
              placeholder="06"
              className="mr-6 w-16"
            />
            <Input
              type="number"
              name="date"
              placeholder="01"
              className="mr-6 w-16"
            />
          </div>
        </div>
        {/*  */}
        <div className='top3'>
          <label>メールアドレスまたは電話番号</label>
          <Input
            type="email"
            name="email"
            placeholder="メールまたは電話番号"
            className="mr-6 w-60"
          />
        </div>
        {/*  */}
        <div className='top4'>
          <label>パスワード</label>
          <div>
            <Input
              type="password"
              name="password"
              placeholder="メールまたは電話番号"
              className="mr-6 w-60"
            />
            <div className="cursor-pointer">👁‍🗨</div>
          </div>
        </div>
        {/*  */}
        <div className='top5'>
          <label>パスワード確認用</label>
          <div>
            <Input
              type="password"
              name="password"
              placeholder="メールまたは電話番号"
              className="mr-6 w-60"
            />
            <div className="cursor-pointer">👁‍🗨</div>
          </div>
        </div>

        <Button>本人認証へ進む</Button>
      </form>
    </>
  );
}
