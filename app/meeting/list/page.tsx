'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import Chip from '@/components/ui/chip/Chip';
import DropDown from '@/components/ui/DropDown';
import mockMeetings from '@/data/mockMeetings.json';
import useModalStore from '@/store/useModalStore';

import Card from './components/Card';

const meetingTypes = ['전체', '술', '카페', '보드게임', '맛집'];
const defaultOption = '지역 전체';

export default function MeetingList() {
  const { openModal } = useModalStore();
  const [selectedTab, setSelectedTab] = useState('전체');
  const [selectedFirstLocation, setSelectedFirstLocation] = useState(defaultOption); // TODO: 각각의 location을 효율적으로 저장하는 방법을 적용해야 함
  const [selectedSecondLocation, setSelectedSecondLocation] = useState(defaultOption);

  const handleTabClick = (tab: string) => setSelectedTab(tab); // TODO: 각 탭을 눌렀을 때 backend에서 필터링 된 데이터를 받아와야 함
  const handleSelectFirstLocation = (selected: string) => setSelectedFirstLocation(selected);
  const handleSelectSecondLocation = (selected: string) => setSelectedSecondLocation(selected);

  const meetingLocationFirst = [
    '지역 전체',
    ...new Set(mockMeetings.map((meeting) => meeting.location.region_1depth_name)),
  ];

  const meetingLocationSecond = [
    '동 전체',
    ...new Set(mockMeetings.map((meeting) => meeting.location.region_2depth_name)),
  ];

  // 모임 생성 모달 핸들러
  const handleClickCreateMeeting = () => {
    openModal('create');
  };

  // 캘린더 모달 핸들러
  const handleClickCalendar = () => {
    openModal('calender'); // XXX: openModal 함수가 동작을 하지 않습니다.
  };

  // 좋아요 핸들러
  const handleClickLike = () => null; // TODO: 낙관적 업데이트를 통한 좋아요 상태 업데이트 필요

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
        <Button color="white" size="sm" type="submit" onClick={() => handleClickCreateMeeting()}>
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

      {/* 필터링 드롭다운 */}
      <div className="flex-start mb-10 flex gap-3">
        <div className="flex flex-row">
          <DropDown
            options={meetingLocationFirst}
            onSelect={handleSelectFirstLocation}
            placeholder={selectedFirstLocation}
            className="inline-flex h-10 flex-col items-start justify-center gap-2.5 rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-['Pretendard'] text-sm font-medium leading-tight text-[#8c8c8c]"
            optionClassName="justify-start pl-3 py-[10px]"
          />
        </div>
        <DropDown
          options={meetingLocationSecond}
          onSelect={handleSelectSecondLocation}
          placeholder={selectedSecondLocation}
          className="inline-flex h-10 flex-col items-start justify-center gap-2.5 rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-['Pretendard'] text-sm font-medium leading-tight text-[#8c8c8c]"
          optionClassName="justify-start pl-3 py-[10px]"
        />
        <button
          type="button"
          onClick={() => handleClickCalendar()}
          className="inline-flex h-10 flex-col items-start justify-center gap-2.5 rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-['Pretendard'] text-sm font-medium leading-tight text-[#8c8c8c]"
        >
          캘린더
        </button>
      </div>

      {/* 선택된 탭에 맞는 번개 리스트를 동적으로 렌더링 */}
      {/* TODO: 처음 10개는 SSR로 받아오고, 이후 Client Side에서 무한스크롤로 데이터 fetching 필요 */}
      <div className="meeting-list ">
        {/* 탭에 맞는 번개 리스트 보여주기 */}
        {selectedTab === '전체' && (
          <div className="grid grid-cols-3 gap-x-6 gap-y-10">
            {mockMeetings?.map((meeting) => (
              <Card key={meeting.id}>
                <div className="flex h-[430px] flex-col justify-between overflow-hidden">
                  <div className="relative flex h-[200px] w-96 items-center justify-center overflow-hidden">
                    {/* 좌상한 우하단 흰 박스 */}
                    <div className="absolute left-0 top-0 z-10 size-[10px] bg-white" />
                    <div className="absolute bottom-0 right-0 z-10 size-[10px] bg-white" />

                    {/* 번개 썸네일 */}
                    <Image
                      src="/assets/card/example_image.png"
                      width={384}
                      height={200}
                      alt="thumbnail"
                      className="w-96"
                    />

                    {/* 좋아요 버튼 */}
                    <Card.Like isLiked={meeting.isLiked} onClick={() => handleClickLike()} />
                  </div>

                  {/* 번개 정보 */}
                  <div className="flex h-[206px] flex-col justify-between">
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex flex-col gap-2">
                        {/* 제목, 장소 */}
                        <Card.Title
                          name={meeting.name}
                          location={`${meeting.location.region_1depth_name} ${meeting.location.region_2depth_name}`}
                        />
                        {/* 날짜 */}
                        {/* TODO: dateTime 변환 필요, util 함수 작성? */}
                        <div className="flex h-[22px] flex-row items-center gap-1">
                          <div className="font-['Pretendard'] text-base font-semibold text-[#bfbfbf]">
                            2월 9일
                          </div>
                          <div className="size-[3px] rounded-full bg-[#bfbfbf]" />
                          <div className="font-['Pretendard'] text-base font-semibold text-[#bfbfbf]">
                            18:00
                          </div>
                        </div>
                      </div>

                      {/* 설명 */}
                      <div className="line-clamp-2 overflow-hidden text-ellipsis font-['Pretendard'] text-base font-medium text-[#8c8c8c]">
                        {meeting.description}
                      </div>
                    </div>

                    {/* 인원, 개설 여부, ProgressBar */}
                    <div className="flex w-full flex-row items-center">
                      <div className="flex grow flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <Card.Participant participantCount={1} capacity={10} />
                          <Card.ConfirmedStatus isCompleted={meeting.isConfirmed} />
                        </div>
                        <Card.ProgressBar participantCount={1} capacity={10} />
                      </div>

                      {/* 번개 참여 버튼 */}
                      {/* TODO: 상세 페이지로 이동하는 기능 필요 */}
                      <Button className="ml-6">번개 참여</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
