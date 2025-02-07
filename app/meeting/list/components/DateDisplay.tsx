const DateDisplay = ({ dateTime }: { dateTime: string }) => {
  const meetDay = new Date(dateTime).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });

  return (
    <div className="h-6 px-2 py-0.5 bg-gray-900 rounded justify-center items-center gap-2.5 inline-flex overflow-hidden">
      <div className="text-white text-sm font-medium font-['Pretendard'] leading-tight">
        {meetDay}
      </div>
    </div>
  );
};

export default DateDisplay;
