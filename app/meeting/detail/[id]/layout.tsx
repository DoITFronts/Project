import React from 'react';

import BottomFloatingBar from '@/components/layout/BottomFloatingBar';

export default function EventLayout({
  children,
  reviews,
}: {
  children: React.ReactNode;
  reviews: React.ReactNode | null;
}) {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="flex">{children}</div>
      <div className="mt-6">{reviews}</div>
      <BottomFloatingBar title="번개팅" subtitle="지금 당장 신청해보라능" />
    </div>
  );
}
