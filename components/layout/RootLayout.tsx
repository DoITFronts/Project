'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import BottomFloatingBar from '@/components/layout/BottomFloatingBar';
import Gnb from '@/components/layout/Gnb';
import Modal from '@/components/ui/modal/Modal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col">
      <Gnb />
      <div className="my-16 flex-1 overflow-auto">{children}</div>
      {pathname.includes('/meeting/detail') && (
        <BottomFloatingBar title="번개팅" subtitle="지금 당장 신청해보라능" />
      )}
      <Modal />
    </div>
  );
}
