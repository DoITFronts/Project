import BottomFloatingBar from '@/components/layout/BottomFloatingBar';

export default function EventLayout({
  children,
  reviews,
  participants,
}: {
  children: React.ReactNode;
  reviews: React.ReactNode | null;
  participants: React.ReactNode | null;
}) {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">{children}</div>
        {participants && <aside>{participants}</aside>}
      </div>
      <div className="mt-6">{reviews}</div>
      <BottomFloatingBar title="번개팅" subtitle="지금 당장 신청해보라능" />
    </div>
  );
}
