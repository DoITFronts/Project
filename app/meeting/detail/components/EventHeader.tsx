import Image from 'next/image';

import FallbackImage from '@/components/shared/FallbackImage';

export default function EventHeader({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative">
      {imageUrl ? (
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt="이벤트 이미지"
          className="w-full rounded-lg object-cover"
        />
      ) : (
        <FallbackImage />
      )}
      <div className="absolute left-2 top-2 rounded-md bg-orange-500 px-3 py-1 text-sm text-white">
        오늘 21시 마감
      </div>
    </div>
  );
}
