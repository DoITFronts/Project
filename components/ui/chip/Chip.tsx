interface ChipProps {
  text: string;
  size: 'sm' | 'lg';
  mode: 'dark' | 'light';
}

export default function Chip({ text = '전체', size = 'sm', mode = 'light' }: ChipProps) {
  const sizeClasses = size === 'sm' ? 'h-8 px-3 py-1.5 text-xs' : 'h-10 px-4 py-2.5 text-sm';
  const modeClasses = mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';

  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl ${sizeClasses} ${modeClasses}`}
    >
      <div className="font-['Pretendard'] font-medium leading-tight">{text}</div>
    </div>
  );
}
