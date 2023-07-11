import Posting from "@/ui/communityItem/posting";
import NavigationBar from "@/ui/navigation-bar";
import NavLink from "@/ui/nav_link/navlink";
import NavLink_now from "@/ui/nav_link/navlink_now";
import Image from "next/image";


export default function comm_home() {
  return (
    <>
      <div className="mb-16 mt-48">
        <h1>コミュニティ</h1>

        <div className="border-blue-700 border-2 top-0 fixed w-full bg-white">

          <div className=" flex border border-red-700 h-24">
          </div>

          <div className=" flex border border-red-700 h-20">
          </div>

        </div>

        <Posting></Posting>
        <Posting></Posting>
        <Posting></Posting>
        <Posting></Posting>
      </div>


      <div className="bottom-0 fixed w-full">
        <NavigationBar />
      </div>

      <NavLink_now className="bg-blue-400 bottom-24 right-8 fixed w-full">
        <Image
          src="/comm/comm_add_messege.svg"
          alt="comm_message_icon"
          width={30}
          height={30}
        />
      </NavLink_now>




    </>
  );
}
