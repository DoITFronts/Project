import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import MeetingDetailClient from '@/app/meeting/detail/components/MeetingDetailClient';
import { MeetingDetail } from '@/types/meeting';

export default async function DetailPage({ params }: { params: { id: string } }) {
  if (!params.id) return <p>⚠️ 이벤트 ID가 필요합니다.</p>;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['event', params.id],
    queryFn: () => fetchMeetingById(params.id),
  });

  const meeting: MeetingDetail = await fetchMeetingById(params.id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MeetingDetailClient meeting={meeting} />
    </HydrationBoundary>
  );
}
