import React from 'react';

export default function EventLayout({
  children,
  reviews,
  description,
}: {
  children: React.ReactNode;
  reviews: React.ReactNode | null;
  description: React.ReactNode | null;
}) {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="flex">{children}</div>
      <div className="mt-14">{description}</div>
      <div className="mb-16 mt-6">{reviews}</div>
    </div>
  );
}
