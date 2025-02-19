import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import MeetingDetailClient from '@/app/meeting/detail/components/MeetingDetailClient';
import { MeetingDetail } from '@/types/meeting';

export default async function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!params?.id) {
    return <p>⚠️ 이벤트 ID가 필요합니다.</p>;
  }

  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey: ['event', id],
      queryFn: async () => fetchMeetingById(id),
    });

    const meeting: MeetingDetail = await fetchMeetingById(params.id);
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MeetingDetailClient meeting={meeting} />
      </HydrationBoundary>
    );
  } catch (error) {
    console.error('Error fetching meeting details:', error);
    return <p>⚠️ 데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }
}
