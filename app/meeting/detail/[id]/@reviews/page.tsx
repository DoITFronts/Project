import ReviewItem from '@/components/ui/review/ReviewItem';

export default async function ReviewList() {
  const reviews = [
    {
      id: '1',
      date: '2025-02-10T10:30:00',
      content: '정말 좋은 모임이었어요!',
      count: 5,
      writer: '최승승',
    },
    {
      id: '2',
      date: '2025-02-10T10:30:00',
      content: '좋은 분들과 즐거운 시간이었어요!',
      count: 4,
      writer: '김승승',
    },
    {
      id: '3',
      date: '2025-02-10T10:30:00',
      content: '많은 분들과 즐거운 시간이었어요!',
      count: 3,
      writer: '박승승',
    },
    {
      id: '4',
      date: '2025-02-10T10:30:00',
      content: '좋은 분들과 즐거운 시간이었어요!',
      count: 2,
      writer: '이승승',
    },
    {
      id: '5',
      date: '2025-02-10T10:30:00',
      content: '좋은 분들과 즐거운 시간이었어요!',
      count: 1,
      writer: '정승승',
    },
  ];

  return (
    <div className="flex-col items-start justify-start gap-[18px]">
      <div className="font-['DungGeunMo'] text-2xl font-normal text-black">이전 번개 리뷰</div>
      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <>
            <ReviewItem
              key={review.id}
              date={review.date}
              content={review.content}
              count={review.count}
              username={review.writer}
            />
            <div data-svg-wrapper>
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
          </>
        ))}
      </div>
    </div>
  );
}
