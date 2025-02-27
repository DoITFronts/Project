'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import startMockWorker from '@/api/mocks/setup';
import BottomFloatingBar from '@/components/layout/BottomFloatingBar';
import Gnb from '@/components/layout/Gnb';
import Modal from '@/components/ui/modal/Modal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const isMeetingDetail = pathname.includes('/meeting/detail');
  const queryClientRef = useRef(new QueryClient());

  useEffect(() => {
    const initMockWorker = async () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        await startMockWorker();
      }
      setReady(true);
    };

    initMockWorker();
  }, []);

  if (!ready) return null;

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <div className="flex h-screen flex-col">
        {!pathname.includes('/user') && <Gnb />}
        <div className="mt-16 flex-1 overflow-auto">{children}</div>
        {isMeetingDetail && (
          <BottomFloatingBar key={pathname} title="번개팅" subtitle="지금 당장 신청해보라능" />
        )}
        <Modal />
      </div>
    </QueryClientProvider>
  );
}
