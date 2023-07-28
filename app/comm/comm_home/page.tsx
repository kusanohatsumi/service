import Posting from '@/ui/communityItem/posting';
import NavigationBar from '@/ui/navigation-bar';
import NavLink from '@/ui/nav_link/navlink';
import Image from 'next/image';

import HomeHeader from '@/ui/home-head';
import Icon_size from '@/ui/Community/icon_s';


export default function comm_home() {
  return (
    <>
      <div className="mb-16 mt-48 ">
        <div className="fixed  top-0 z-50 w-full border-2 bg-white">
          <div className=" flex h-24 border">
            <HomeHeader />
          </div>

          <div className=" flex h-20 border">
            <Icon_size />
          </div>
        </div>

        <Posting></Posting>
        <Posting></Posting>
        <Posting></Posting>
        <Posting></Posting>
      </div>

      <div className="fixed bottom-0  w-full">
        <NavigationBar />
      </div>

      <NavLink className="fixed bottom-24 right-8 w-full">
        <Image
          src="/comm/comm_add_messege.svg"
          alt="comm_message_icon"
          width={25}
          height={25}
          className=" m-1"
        />
      </NavLink>
    </>
  );
}
