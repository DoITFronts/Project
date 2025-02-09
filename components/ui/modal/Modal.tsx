'use client';
import React from 'react';
import useModalStore from '@/store/useModalStore';
import CreateMeetingModal from './variants/CreateMeetingModal';
import ProfileModal from './variants/ProfileModal';

export default function Modal() {
  const { isOpen, modalType, closeModal } = useModalStore();
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const ModalContent = () => {
    switch (modalType) {
      case 'create':
        return <CreateMeetingModal />;

      case 'editProfile':
        return <ProfileModal />;
      default:
        return null;
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <ModalContent />
    </div>
  );
}
