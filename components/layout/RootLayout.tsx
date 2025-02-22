'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import worker from '@/api/mocks/browser';
import BottomFloatingBar from '@/components/layout/BottomFloatingBar';
import Gnb from '@/components/layout/Gnb';
import Modal from '@/components/ui/modal/Modal';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      worker?.start();
    }
  }, []);

  const pathname = usePathname();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen flex-col">
        {!pathname.includes('/user') && <Gnb />}
        <div className="mt-16 flex-1 overflow-auto">{children}</div>
        {pathname.includes('/meeting/detail') && (
          <BottomFloatingBar key={pathname} title="번개팅" subtitle="지금 당장 신청해보라능" />
        )}
        <Modal />
      </div>
    </QueryClientProvider>
  );
}
