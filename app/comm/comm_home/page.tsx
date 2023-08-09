'use client';
import React, { useState } from "react";
import "./Modal.css"; // モーダルウィンドウのスタイルを定義したCSSファイル
import Posting from '@/ui/communityItem/posting';
import NavigationBar from '@/ui/navigation-bar';
import NavLink from '@/ui/nav_link/navlink';
import Image from 'next/image';

import HomeHeader from '@/ui/home-head';
import Icon_size from '@/ui/community/icon_s';


const Modal: React.FC<ModalProps> = ({ showModal, onClose }) => {
  if (!showModal) return null;

  const [modalType, setModalType] = useState<"management" | "space">("management");

  const handleCloseModal = () => {
    setModalType("management"); // モーダルを閉じる時に初期値に戻す
    onClose();
  };

  return (
    <div className="modal-overlay absolute z-10 " onClick={handleCloseModal}>
      {/* <div className="border border-blue-300 h-11 w-60 bg-blue-100"></div> */}
      <div className="modal-content w-72 h-96 border-4 border-red-300 " onClick={(e) => e.stopPropagation()}>
        <div className="">
          <button className="border border-red-300" onClick={() => setModalType("management")}>運営</button>
          <button className="border border-blue-300" onClick={() => setModalType("space")}>スペース</button>
        </div>
        {modalType === "management" && (
          <>
            <button>運営からのお知らせ1</button>
            <button>運営からのお知らせ2</button>
            <button>運営からのお知らせ3</button>
          </>
        )}
        {modalType === "space" && (
          <>
            <button>スペースからのお知らせ1</button>
            <button>スペースからのお知らせ2</button>
            <button>スペースからのお知らせ3</button>
          </>
        )}
        <br />
        <button onClick={handleCloseModal}>閉じる</button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="mb-16 mt-40 -z-10">
        <div className="fixed  top-0 z-50 w-full border-2 bg-white">
          <div className=" flex h-16 border">
            <HomeHeader />
            <button onClick={handleButtonClick} className=' border border-red-300 w-9 h-9 absolute'></button>
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
      <Modal showModal={showModal} onClose={() => setShowModal(false)} />
    </div>

  );
};

export default App;
