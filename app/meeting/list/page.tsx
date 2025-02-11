'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import Chip from '@/components/ui/chip/Chip';
import ChipInfo from '@/components/ui/chip/ChipInfo';

import Card from './components/Card';

const meetingTypes = ['전체', '술', '카페', '보드게임', '맛집'];

export default function MeetingList() {
  const [selectedTab, setSelectedTab] = useState('전체');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mx-auto mt-[72px] max-w-[1200px]">
      <div className="mb-[52px] flex items-center justify-between">
        <div className="inline-flex h-[68px] flex-col items-start justify-start gap-[9px]">
          <div className="text-center font-['DungGeunMo'] text-3xl font-normal text-black">
            맛집 탐방 같이 갈 사람, 누구 없나요?
          </div>
          <div className="text-center font-['Pretendard'] text-2xl font-normal text-black">
            맛집 탐방 같이 갈 사람, 누구 없나요?
          </div>
        </div>
        <Button color="white" size="sm" className="bg-white" type="submit">
          번개 만들기
        </Button>
      </div>
      <div className="mb-10 flex gap-3">
        {meetingTypes.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className="cursor-pointer focus:outline-none"
          >
            <Chip text={tab} size="lg" mode={selectedTab === tab ? 'dark' : 'light'} />
          </button>
        ))}
      </div>
      {/* 선택된 탭에 맞는 모임 리스트를 동적으로 렌더링 */}
      <div className="meeting-list">
        {/* 탭에 맞는 모임 리스트 보여주기 */}
        {selectedTab === '전체' && (
          <Card>
            <div className="flex flex-col gap-6 overflow-hidden md:w-full md:flex-row lg:w-[1200px]">
              {/* 모임 썸네일 */}
              <div className="relative flex h-[200px] w-96 items-center justify-center overflow-hidden">
                <Image src="/next.svg" width={384} height={200} alt="thumbnail" className="w-96" />
              </div>
              {/* 모임 정보 */}
              <div className="inline-flex w-[792px] flex-col justify-between">
                {/* 제목, 장소, 시간, 설명 */}
                <div className="flex flex-col gap-[17px]">
                  <div className="flex flex-col gap-2">
                    <Card.Title name="test" location="test" />
                    <div className="flex gap-2">
                      <ChipInfo text="2월 10일" />
                      <ChipInfo text="17:00" colorMode="orange" />
                    </div>
                  </div>
                  <div className="self-stretch font-['Pretendard'] text-base font-medium leading-snug text-neutral-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    Praesent libero. Sed cursus ante dapibus diam.
                  </div>
                </div>
                {/* 인원, 개설 여부, 번개 참여 */}
                <div className="flex w-full flex-row items-center">
                  {/* 인원, 개설 여부, ProgressBar (전체 너비 차지) */}
                  <div className="flex grow flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Card.Participant participantCount={1} capacity={10} />
                      <Card.ConfirmedStatus isCompleted />
                    </div>
                    <Card.ProgressBar participantCount={1} capacity={10} />
                  </div>

                  {/* 번개 참여 버튼 (오른쪽 정렬) */}
                  <Button className="ml-4">번개 참여</Button>
                </div>
              </div>
            </div>
          </Card>
        )}
        {selectedTab === '술' && <div>술 모임 리스트</div>}
        {selectedTab === '카페' && <div>카페 모임 리스트</div>}
        {selectedTab === '보드게임' && <div>보드게임 모임 리스트</div>}
        {selectedTab === '맛집' && <div>맛집 모임 리스트</div>}
      </div>
    </div>
  );
}
