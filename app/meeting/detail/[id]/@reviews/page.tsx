import React from 'react';

import ReviewItem from '@/components/ui/review/ReviewItem';

export default async function ReviewList() {
  const response = await fetch('/api/events/:id/reviews');
  const reviews = await response.json();

  return (
    <div className="flex-col items-start justify-start gap-[18px]">
      <div className="font-['DungGeunMo'] text-2xl font-normal text-black">이전 번개 리뷰</div>
      <div className="mt-4 space-y-4">
        {reviews.map(
          (
            review: {
              id: React.Key | null | undefined;
              date: string;
              content: string;
              count: number;
              writer: string;
            },
            index: number,
          ) => (
            <React.Fragment key={review.id}>
              <ReviewItem
                date={review.date}
                content={review.content}
                count={review.count}
                username={review.writer}
              />
              {index < reviews.length - 1 && (
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
          ),
        )}
      </div>
    </div>
  );
}
