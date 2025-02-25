import type { Metadata } from 'next';
import '@/styles/global.css';
import React from 'react';
import Gnb from '@/components/layout/Gnb';

export const metadata: Metadata = {
  title: '번개팅',
  description: '번개팅은 번개 모임 서비스입니다.',
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Gnb />
        <div className="main-layout">
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
