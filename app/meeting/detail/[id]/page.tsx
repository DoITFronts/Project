'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import MeetingDetailClient from '@/app/meeting/detail/components/MeetingDetailClient';
import { MeetingDetail } from '@/types/meeting';

export default function DetailPage() {
  const params = useParams(); // ✅ 패럴라우팅에서 `params.id` 가져오기
  const meetingId = params.id as string;

  // React Query를 사용한 API 데이터 가져오기
  const {
    data: meeting,
    isLoading,
    error,
  } = useQuery<MeetingDetail>({
    queryKey: ['event', meetingId],
    queryFn: () => fetchMeetingById(meetingId),
    enabled: !!meetingId, // ✅ `meetingId`가 있을 때만 요청 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 캐싱 유지
  });

  if (!meetingId) return <p>⚠️ 이벤트 ID가 필요합니다.</p>;
  if (isLoading) return <p>🔄 데이터를 불러오는 중...</p>;
  if (error || !meeting) return <p>⚠️ 데이터를 불러오는 중 오류가 발생했습니다.</p>;

  return <MeetingDetailClient meeting={meeting} />;
}
