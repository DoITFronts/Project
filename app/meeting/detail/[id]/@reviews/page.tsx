export default async function ReviewList() {
  const reviews = [
    { id: '1', date: '2025-02-10', content: '정말 좋은 모임이었어요!' },
    { id: '2', date: '2025-02-11', content: '다음에도 참여하고 싶어요.' },
  ];

  return (
    <div className="mt-6 rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold">이용자들의 후기</h3>
      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-lg border bg-gray-100 p-4">
            <div className="flex items-center">
              <span className="text-orange-500">⭐⭐⭐⭐⭐</span>
              <span className="ml-2 text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
