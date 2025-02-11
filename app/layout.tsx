import type { Metadata } from 'next';
import '@/styles/global.css';
import React from 'react';
import Modal from '@/components/ui/modal/Modal';
import Gnb from '@/components/layout/Gnb';

export const metadata: Metadata = {
  title: '번개팅',
  description: '같이 달랩은 모임을 위한 서비스입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Gnb />
        <div className="main-layout">
          <div className="content">{children}</div>
          <Modal />
        </div>
      </body>
    </html>
  );
}
