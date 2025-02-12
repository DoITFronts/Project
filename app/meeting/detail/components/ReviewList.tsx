export default async function ReviewList() {
  const reviews = await fetch(`https://api.example.com/reviews`).then((res) => res.json());

  return (
    <div className="mt-6 rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold">이용자들의 후기</h3>
      <div className="mt-4 space-y-4">
        {reviews.map((review: any) => (
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
