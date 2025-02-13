'use client';

import { useState } from 'react';

import Button from '../ui/Button';

interface BottomFloatingBarProps {
  title: string;
  subtitle: string;
}

export default function BottomFloatingBar({ title, subtitle }: BottomFloatingBarProps) {
  const [isJoined, setIsJoined] = useState(false);

  return (
    <div className="flex h-[84px] w-full flex-col flex-wrap items-center justify-center overflow-hidden border-t-2 border-gray-900 bg-white p-5">
      <div className="max-w-996px flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-base font-semibold leading-normal text-gray-900">{title} 🏃‍♂️</div>
          <div className="text-xs font-medium leading-none text-gray-700">{subtitle}</div>
        </div>
        <Button
          color={isJoined ? 'white' : 'filled'}
          type="button"
          onClick={() => setIsJoined(!isJoined)}
        >
          {isJoined ? '참여 취소하기' : '참여하기'}
        </Button>
      </div>
    </div>
  );
}
