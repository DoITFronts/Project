'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import { MeetingDetail } from '@/types/meeting';

export default function DescriptionPage() {
  const params = useParams();
  const meetingId = params.id as string;
  const {
    data: meeting,
    isLoading,
    error,
  } = useQuery<MeetingDetail>({
    queryKey: ['event', meetingId],
    queryFn: () => fetchMeetingById(meetingId),
    enabled: !!meetingId,
    staleTime: 1000 * 60 * 5,
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
