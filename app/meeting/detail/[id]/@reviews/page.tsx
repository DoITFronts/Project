import React from 'react';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import ReviewItem from '@/components/ui/review/ReviewItem';
import { MeetingDetail } from '@/types/meeting';

export default async function ReviewList({ params }: { params: { id: string } }) {
  if (!params) {
    return <p>⚠️ 이벤트 ID가 필요합니다.</p>;
  }

  try {
    const meeting: MeetingDetail = await fetchMeetingById(params);

    return (
      <div className="flex-col items-start justify-start gap-[18px]">
        <div className="font-['DungGeunMo'] text-2xl font-normal text-black">이전 번개 리뷰</div>
        <div className="mt-4 space-y-4">
          {meeting?.reviews.map((review, index) => (
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
  } catch (error) {
    console.error('Error fetching meeting reviews:', error);
    return <p>⚠️ 데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }
}
