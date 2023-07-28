// import Comment from "@/ui/communityItem/comment"; ×使わない(コメント追加のコンテナ)
import Posting from '@/ui/communityItem/posting';
// import Evaluation from "@/ui/communityItem/evaluation"　×使わない（いいねのコンテナ）
import CreateGroup from '@/ui/communityItem/craete_group'; //グループ作成のコンテナ
import NavLink from '@/ui/nav_link/navlink';
import Image from 'next/image';
import { Inder } from 'next/font/google';
import Icon_size from '@/ui/Community/icon_s';
import Comment from '@/ui/communityItem/comment';
import NavigationBar from '@/ui/navigation-bar';
import { Button } from '@/ui/button/button';
import { FlexCenter_L, FlexCenter_S, FlexSquare } from '@/ui/Community/circle';

// import icon_S
// import icon_M
// import icon_Message

export default function Comm() {
  return (
    <>
      <div>
        <Icon_size></Icon_size>
      </div>
      <NavLink></NavLink>
      <h1>コミュニティ アカウント作成</h1>
      <div className="">
        <span className="h-6 w-9">✕</span>
        <span className="right-5 top-0 h-6 w-9">作成</span>
      </div>

      <Posting></Posting>
      <CreateGroup></CreateGroup>

      <div className=" bg-red-400">
        <Image
          src="/comm/comm_add_messege.svg"
          alt="comm_message_icon"
          width={30}
          height={30}
        />
      </div>

      <div className="flex justify-center ">
        <div className="pl-0 pt-3 text-3xl">＜</div>

        <div className="h-6 pt-3 text-3xl">コミュニティ</div>
      </div>

      <div className=" relative h-36 w-36 ">
        <FlexCenter_L>
          <FlexSquare></FlexSquare>
        </FlexCenter_L>
        <div className=" text-3xl">✕</div>

        <div className=" h-6 text-3xl ">作成</div>

        {/* <Posting></Posting> */}
        <CreateGroup></CreateGroup>

        <FlexCenter_S>
          <Image
            src="/comm/test_icon01.svg"
            alt="comm_message_icon"
            width={35}
            height={35}
          />
        </FlexCenter_S>

        <div className="mt-80 text-center">
          <Button className=" px-4 py-2 text-center">アカウント作成</Button>
        </div>

        <div className="fixed bottom-0 w-full">
          <NavigationBar />
        </div>
      </div>
    </>
  );
}
