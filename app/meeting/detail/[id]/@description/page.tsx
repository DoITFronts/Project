'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import { MeetingDetail } from '@/types/meeting';

export default function DescriptionPage() {
  const params = useParams(); // ✅ 패럴라우팅에서 안전하게 params 가져오기
  const meetingId = params.id as string; // string으로 변환

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

  return (
    <div className="font-['Pretendard'] text-base font-medium leading-normal text-neutral-800">
      <h2 className="font-dunggeunmo text-2xl font-normal text-black">{meeting.info.title}</h2>
      <ReactMarkdown>{meeting.details.description}</ReactMarkdown>
    </div>
  );
}
