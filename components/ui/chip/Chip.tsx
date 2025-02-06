interface ChipProps{
    text: string;
    size: 'sm' | 'lg';
    mode: 'dark' | 'light';
}

export default function Chip({children}: React.PropsWithChildren<ChipProps>) {
    return (
      <div
        className="h-10 px-4 py-2.5 bg-gray-900 rounded-xl justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <div className="text-white text-sm font-medium font-['Pretendard'] leading-tight">전체</div>
      </div>
    );
}