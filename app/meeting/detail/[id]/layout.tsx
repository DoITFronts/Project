import React from 'react';

interface MeetingLayoutProps {
  children: React.ReactNode;
  reviews: React.ReactNode | null;
  description: React.ReactNode | null;
}

export default function MeetingLayout({ children, reviews, description }: MeetingLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="flex">{children}</div>
      <div className="mt-14">{description}</div>
      <div className="mb-24 mt-6">{reviews}</div>
    </div>
  );
}
