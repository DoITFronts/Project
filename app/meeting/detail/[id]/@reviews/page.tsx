'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import ReviewItem from '@/components/ui/review/ReviewItem';
import { MeetingDetail } from '@/types/meeting';

export default function ReviewList() {
  const params = useParams(); // ✅ 패럴라우팅에서 안전하게 params 가져오기
  const meetingId = params.id as string; // `id`를 string으로 변환

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
  if (!meeting?.reviews?.length) return <p>아직 리뷰가 없습니다.</p>;

  return (
    <div className="flex-col items-start justify-start gap-[18px]">
      <div className="font-['DungGeunMo'] text-2xl font-normal text-black">이전 번개 리뷰</div>
      <div className="mt-4 space-y-4">
        {meeting.reviews.map((review, index) => (
          <React.Fragment key={review.id}>
            <ReviewItem
              date={review.date}
              content={review.content}
              count={review.count}
              username={review.writer}
            />
            {index < meeting.reviews.length - 1 && (
              <div data-svg-wrapper="">
                <svg
                  width="1200"
                  height="4"
                  viewBox="0 0 1200 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2H1200"
                    stroke="#F0F0F0"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeDasharray="3 6"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
