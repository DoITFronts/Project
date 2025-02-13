function ProgressBar({
  participantCount,
  capacity,
}: {
  participantCount: number;
  capacity: number;
}) {
  const progressPercent = Math.min((participantCount / capacity) * 100, 100);

  return (
    <div className="h-1 w-full overflow-hidden rounded-md bg-[#f0f0f0]">
      <div
        className="h-1 w-full rounded-md bg-[#ffd500]"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
}

export default ProgressBar;
