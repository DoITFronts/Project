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
    const initServiceWorkers = async () => {
      if (typeof window !== 'undefined') {
        navigator.serviceWorker
          .register('/sw.js', { scope: '/' })
          .then((registration) => {
            console.log('✅ PWA 서비스 워커 등록됨:', registration);
          })
          .catch((error) => console.log('PWA 서비스 워커 등록 실패:', error));

        navigator.serviceWorker
          .register('/mockServiceWorker.js', { scope: '/api/' })
          .then((registration) => {
            console.log('✅ MSW 등록됨:', registration);
          })
          .catch((error) => console.log('MSW 등록 실패:', error));

        // ✅ MSW 실행
        await startMockWorker();
      }
      setReady(true);
    };

    initServiceWorkers();
  }, []);

  if (!ready) return null;

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <div className="flex h-screen flex-col">
        {!pathname.includes('/user') && <Gnb />}
        <div className={`flex-1 overflow-auto ${!pathname.includes('/user') ? 'mt-16' : ''}`}>
          {children}
        </div>
        {isMeetingDetail && (
          <BottomFloatingBar key={pathname} title="번개팅" subtitle="지금 당장 신청해보라능" />
        )}
        <Modal />
      </div>
    </QueryClientProvider>
  );
}
