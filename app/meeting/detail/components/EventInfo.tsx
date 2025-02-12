export default function EventInfo({
  title,
  location,
  date,
  time,
}: {
  title: string;
  location: string;
  date: string;
  time: string;
}) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500">{location}</p>
      <div className="mt-3 flex gap-2">
        <span className="rounded-md bg-gray-200 px-3 py-1 text-sm">{date}</span>
        <span className="text-sm font-semibold text-orange-500">{time}</span>
      </div>
    </div>
  );
}
