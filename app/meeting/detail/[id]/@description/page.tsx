'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import {
  DescriptionSkeleton,
  DescriptionError,
} from '@/app/meeting/detail/components/skeleton/DescriptionSkeleton';
import { MeetingDetail } from '@/types/meeting';

export default function DescriptionPage() {
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
  if (isLoading) return <DescriptionSkeleton />;
  if (error || !meeting) return <DescriptionError onRetry={refetch} />;
  if (!meeting?.details?.description)
    return (
      <p className="flex h-[200px] items-center justify-center text-gray-500">
        아직 상세 설명이 없습니다.
      </p>
    );

  return (
    <div className="h-[300px] font-['Pretendard'] text-base font-medium leading-normal text-neutral-800">
      <div className="font-dunggeunmo text-2xl font-normal text-black">
        {meeting?.details?.title}
      </div>
      <ReactMarkdown>{meeting?.details?.description}</ReactMarkdown>
    </div>
  );
}
