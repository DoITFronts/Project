'use client';

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

import Icon from '@/components/shared/Icon';
import Button from '@/components/ui/Button';
import MeetingProgress from '@/components/ui/card/MeetingProgress';
import Chip from '@/components/ui/chip/Chip';
import DropDown from '@/components/ui/DropDown';
import mockMeetings from '@/data/mockMeetings.json';
import useModalStore from '@/store/useModalStore';

import Card from './components/Card';

const meetingTypes = ['전체', '술', '카페', '보드게임', '맛집'];
const defaultFirstOption = '지역 전체';
const defaultSecondOption = '동 전체';

export default function MeetingList() {
  const { openModal } = useModalStore();
  const [selectedTab, setSelectedTab] = useState('전체');
  const [selectedFirstLocation, setSelectedFirstLocation] = useState(defaultFirstOption);
  const [selectedSecondLocation, setSelectedSecondLocation] = useState(defaultSecondOption);
  const [filteredMeetings, setFilteredMeetings] = useState(mockMeetings);

  useEffect(() => {
    const filtered = mockMeetings.filter(
      (meeting) =>
        (selectedTab === '전체' || meeting.type === selectedTab) &&
        (selectedFirstLocation === defaultFirstOption ||
          meeting.location.region_1depth_name === selectedFirstLocation) &&
        (selectedSecondLocation === defaultSecondOption ||
          meeting.location.region_2depth_name === selectedSecondLocation),
    );
    setFilteredMeetings(filtered);
  }, [selectedTab, selectedFirstLocation, selectedSecondLocation]);

  const handleTabClick = (tab: string) => setSelectedTab(tab); // TODO: 각 탭을 눌렀을 때 backend에서 필터링 된 데이터를 받아와야 함
  const handleSelectFirstLocation = (selected: string) => {
    setSelectedFirstLocation(selected);
    setSelectedSecondLocation('동 전체');
  };
  const handleSelectSecondLocation = (selected: string) => setSelectedSecondLocation(selected);

  const meetingLocationFirst = [
    '지역 전체',
    ...new Set(mockMeetings.map((meeting) => meeting.location.region_1depth_name)),
  ];

  const getSortedLocations = (region: string) => [
    '구 전체',
    ...Array.from(
      new Set(
        mockMeetings
          .filter(({ location }) => location.region_1depth_name === region)
          .map(({ location }) => location.region_2depth_name),
      ),
    ).sort(),
  ];

  const meetingLocationSecond = useMemo(() => {
    if (selectedFirstLocation === '서울') return getSortedLocations('서울');
    if (selectedFirstLocation === '경기') return getSortedLocations('경기');
    return ['동 전체'];
  }, [selectedFirstLocation]);

  // 모임 생성 모달 핸들러
  const handleClickCreateMeeting = () => {
    openModal('create');
  };

  // 캘린더 모달 핸들러
  const handleClickCalendar = () => {
    openModal('calender');
  };

  // 좋아요 핸들러
  const handleClickLike = () => null; // TODO: 낙관적 업데이트를 통한 좋아요 상태 업데이트 필요
  y;
  return (
    <div className="container mx-auto mt-[72px] max-w-[1200px]">
      <div className="mb-[52px] flex items-center justify-between">
        <div className="inline-flex h-[68px] flex-col items-start justify-start gap-[9px]">
          <div className="text-center font-dunggeunmo text-3xl font-normal text-black">
            맛집 탐방 같이 갈 사람, 누구 없나요?
          </div>
          <div className="text-center font-['Pretendard'] text-2xl font-normal text-black">
            맛집 탐방 같이 갈 사람, 누구 없나요?
          </div>
        </div>
        <Button color="white" size="sm" type="submit" onClick={handleClickCreateMeeting}>
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
      {/* BUG: location 2depth 선택 문제 해결 */}
      <div className="flex-start mb-10 flex gap-3">
        <DropDown
          options={meetingLocationFirst}
          onSelect={handleSelectFirstLocation}
          trigger={
            <div className="inline-flex h-10 flex-row items-center justify-center rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-['Pretendard'] text-sm font-medium leading-tight text-[#8c8c8c]">
              {selectedFirstLocation}
              <Icon path="chevron_down" />
            </div>
          }
          optionClassName="justify-start min-w-[95px] py-[10px] px-3 hover:bg-neutral-100"
        />
        <DropDown
          options={meetingLocationSecond}
          onSelect={handleSelectSecondLocation}
          trigger={
            <div className="inline-flex h-10 flex-row items-center justify-center rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-['Pretendard'] text-sm font-medium leading-tight text-[#8c8c8c]">
              {selectedSecondLocation}
              <Icon path="chevron_down" />
            </div>
          }
          optionClassName="justify-start min-w-[95px] py-[10px] px-3"
        />
        <button
          type="button"
          onClick={handleClickCalendar}
          className="inline-flex h-10 flex-col items-start justify-center gap-2.5 rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-['Pretendard'] text-sm font-medium leading-tight text-[#8c8c8c]"
        >
          날짜
        </button>
      </div>

      {/* 선택된 탭에 맞는 번개 리스트를 동적으로 렌더링 */}
      {/* TODO: 처음 10개는 SSR로 받아오고, 이후 Client Side에서 무한스크롤로 데이터 fetching 필요 */}
      <div className="meeting-list ">
        {/* 탭에 맞는 번개 리스트 보여주기 */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-10">
          {filteredMeetings.map((meeting) => (
            <Card key={meeting.id} mode="list">
              <div className="flex h-[430px] flex-col justify-between overflow-hidden">
                <div className="relative flex h-[200px] w-96 items-center justify-center overflow-hidden">
                  {/* 좌상한 우하단 흰 박스 */}
                  <div className="absolute left-0 top-0 z-0 size-[10px] bg-white" />
                  <div className="absolute bottom-0 right-0 z-0 size-[10px] bg-white" />
                  <Image
                    src="/assets/card/example_image.png"
                    width={384}
                    height={200}
                    alt="thumbnail"
                    className="w-96"
                  />
                  {/* 좋아요 버튼 */}
                  <Card.Like isLiked={meeting.isLiked} onClick={handleClickLike} />
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
                  <MeetingProgress
                    id={meeting.id}
                    participantCount={meeting.participantCount}
                    capacity={meeting.capacity}
                    isConfirmed={meeting.isConfirmed}
                    isCompleted={meeting.isCompleted}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
