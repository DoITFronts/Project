interface IconProps {
  path: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export default function Icon({
  path,
  width,
  height,
  borderRadius = '0',
  backgroundColor = 'transparent',
}: IconProps) {
  return (
    <div
      className="flex items-center justify-center overflow-hidden"
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
      }}
    >
      <img
        src={`/assets/${path}.svg`} // Next.js에서는 public 폴더 사용
        alt={`${path} icon`}
        className="size-full object-contain"
      />
    </div>
  );
}
