import clsx from 'clsx';

interface ChipInfoProps {
  text: string;
  colorMode?: 'white' | 'orange';
}

export default function ChipInfo({ text, colorMode = 'white' }: ChipInfoProps) {
  return (
    <div
      className={clsx(
        'inline-flex h-6 w-fit min-w-max items-center justify-center gap-2.5 overflow-hidden rounded bg-gray-900 px-2 py-0.5',
      )}
    >
      <div
        className={clsx(
          "font-['Pretendard'] text-sm font-medium leading-tight",
          colorMode === 'white' ? 'text-white' : 'text-orange-600',
        )}
      >
        {text}
      </div>
    </div>
  );
}
