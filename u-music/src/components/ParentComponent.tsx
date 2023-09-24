import React, { useState } from "react";
import NewPlaylistModal from "./NewplaylistModal"; // 모달 컴포넌트를 import
import Newplaylistbtn from "./Newplaylistbtn";

function ParentComponent() {
  const [isModalOpen, setModalOpen] = useState(false);

  // 모달 열기 함수
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Newplaylistbtn label="새 재생목록 만들기" onClick={openModal} />
      {/* 모달을 열기 위한 버튼 */}
      <NewPlaylistModal isOpen={isModalOpen} onClose={closeModal} />
      {/* 모달 컴포넌트를 isOpen과 onClose 프로퍼티로 전달 */}
    </div>
  );
}

export default ParentComponent;
