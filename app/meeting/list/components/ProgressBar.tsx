const ProgressBar = ({
  participantCount,
  capacity,
}: {
  participantCount: number;
  capacity: number;
}) => {
  const progressPercent = Math.min((participantCount / capacity) * 100, 100);

  return (
    <div className="w-full h-1 bg-orange-50 rounded-md overflow-hidden">
      <div
        className="w-full h-1 bg-orange-600 rounded-md"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
