const TimeDisplay = ({ dateTime }: { dateTime: string }) => {
  const meetDay = new Date(dateTime).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="h-6 px-2 py-0.5 bg-gray-900 rounded justify-center items-center gap-2.5 flex overflow-hidden">
      <div className="text-orange-600 text-sm font-medium font-['Pretendard'] leading-tight">
        {meetDay}
      </div>
    </div>
  );
};

export default TimeDisplay;
