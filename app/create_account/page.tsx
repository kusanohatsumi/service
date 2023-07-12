'use client';
import Form from 'ui/form';
import { Border, Number, PageNation, PageNation__Item } from 'ui/nav_link';

export default function NewAccount() {
  return (
    <>
      <PageNation>
        <PageNation__Item>
          <p>基本情報</p>
        </PageNation__Item>
        <PageNation__Item>
          <Number>2</Number>
          <p>事前診断</p>
        </PageNation__Item>
        <PageNation__Item>
          <Number>3</Number>
          <p>診断結果</p>
        </PageNation__Item>
        <PageNation__Item>
          <Number>4</Number>
          <p>登録完了</p>
        </PageNation__Item>
      </PageNation>
      <Form />
    </>
  );
}

{
  /* <div>
  <div className="flex flex-col items-center">
  <Number>1</Number>
  <p>基本情報</p>
  </div>
  <div className="flex flex-col items-center opacity-50">
  <Number>2</Number>
  <p>事前診断</p>
  </div>
  <div className="flex flex-col items-center opacity-50">
  <Number>3</Number>
  <p>診断結果</p>
  </div>
  <div className="flex flex-col items-center opacity-50">
  <Number>4</Number>
  <p>登録完了</p>
  </div>
</div> */
}
