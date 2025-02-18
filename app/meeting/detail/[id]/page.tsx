import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import MeetingDetailClient from '@/app/meeting/detail/components/MeetingDetailClient';
import { MeetingDetail } from '@/types/meeting';

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting: MeetingDetail = await fetchMeetingById(id);

  if (!meeting) return <div>이 모임은 존재하지 않습니다.</div>;

  return <MeetingDetailClient meeting={meeting} />;
}
