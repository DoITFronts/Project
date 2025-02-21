'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import MeetingDetailClient from '@/app/meeting/detail/components/MeetingDetailClient';
import {
  MeetingDetailSkeleton,
  MeetingDetailError,
} from '@/app/meeting/detail/components/skeleton/MeetingDetailSkeleton';
import { MeetingDetail } from '@/types/meeting';

export default function DetailPage() {
  const params = useParams();
  const meetingId = params.id as string;

  const {
    data: meeting,
    isLoading,
    error,
    refetch,
  } = useQuery<MeetingDetail>({
    queryKey: ['event', meetingId],
    queryFn: () => fetchMeetingById(meetingId),
    enabled: !!meetingId,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  if (!meetingId) return <p>⚠️ 이벤트 ID가 필요합니다.</p>;
  if (isLoading) return <MeetingDetailSkeleton />;
  if (error || !meeting) return <MeetingDetailError onRetry={refetch} />;

  return <MeetingDetailClient meeting={meeting} />;
}
