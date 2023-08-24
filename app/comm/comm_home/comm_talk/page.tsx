import Icon_size, { S_Circle } from '@/ui/community/icon_s';
import { Button, Button_min } from '@/ui/button/button';
import Image from 'next/image';


// const Serch = styled.input.attrs({
//   type: 'text',
//   placeholder: 'テキスト入力',
// })

export default function comm_talk() {
  return (
    <>
      <div className="flex">
        <a href='.' className=" px-4 py-4">✕</a>

        <div className=" mr-10 py-4">
          <Button_min>投稿する</Button_min>
        </div>
      </div>

      <div className=" flex">
        <S_Circle>
          <Image
            src="/comm/test_icon01.svg"
            alt="comm_message_icon"
            width={35}
            height={35}
          />
        </S_Circle>

        <textarea
          className=" mx-5 h-36 w-80 pb-10 pt-2"
          name="group-detail"
          placeholder="テキストを入力"
        />
      </div>
    </>
  );
}
