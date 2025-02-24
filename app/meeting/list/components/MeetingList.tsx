'use client';

import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';

import fetchMeeting from '@/api/meeting/fetchMeeting';
import toggleLike from '@/api/meeting/toggleLike';
import Icon from '@/components/shared/Icon';
import Button from '@/components/ui/Button';
import Chip from '@/components/ui/chip/Chip';
import DropDown from '@/components/ui/DropDown';
import EmptyMessage from '@/components/ui/EmptyMessage';
import useModalStore from '@/store/useModalStore';
import { Meeting } from '@/types/meeting.types';

import REGION_DATA from '../regions';

import MeetingInfo from './MeetingInfo';

interface InitialMeetingsProps {
  initialMeetings: Meeting[];
}

const meetingTypes = ['전체', '술', '카페', '보드게임', '맛집'];
const defaultFirstOption = '지역 전체';
const defaultSecondOption = '동 전체';

// 드롭다운 재사용 컴포넌트
function FilterDropdown({
  options,
  selectedValue,
  onSelect,
}: {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}) {
  return (
    <DropDown
      options={options}
      onSelect={onSelect}
      selectedValue={selectedValue}
      trigger={
        <div className="inline-flex h-10 flex-row items-center justify-center rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-pretandard text-sm font-medium leading-tight text-[#8c8c8c] hover:bg-[#595959] hover:text-white">
          {selectedValue}
          <Icon path="chevron_down" />
        </div>
      }
      optionClassName="justify-start min-w-[95px] py-[10px] px-4 text-[#8c8c8c] text-base font-semibold font-pretandard leading-normal"
    />
  );
}

export default function MeetingList({ initialMeetings }: InitialMeetingsProps) {
  const queryClient = useQueryClient();
  const { openModal } = useModalStore();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedFirstLocation, setSelectedFirstLocation] = useState(defaultFirstOption);
  const [selectedSecondLocation, setSelectedSecondLocation] = useState(defaultSecondOption);
  const [observerNode, setObserverNode] = useState<HTMLDivElement | null>(null);

  // 좋아요 Mutation
  const likeMutation = useMutation({
    mutationFn: (meetingId: string) => toggleLike(meetingId),
    onMutate: async (meetingId: string) => {
      await queryClient.cancelQueries({ queryKey: ['meetings'] });

      // 현재 캐시된 데이터 스냅샷 저장
      const previousMeetings = queryClient.getQueryData<Meeting[]>(['meetings']);

      // 새로운 좋아요 상태 적용 (낙관적 업데이트)
      queryClient.setQueryData(['meetings'], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          pages: oldData.pages.map((page: Meeting[]) =>
            page.map((meeting) =>
              meeting.id === meetingId ? { ...meeting, isLiked: !meeting.isLiked } : meeting,
            ),
          ),
        };
      });

      return { previousMeetings };
    },
    onError: (_err, _meetingId, context) => {
      if (context?.previousMeetings) {
        queryClient.setQueryData(['meetings'], context.previousMeetings);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['meetings'] });
    },
  });

  // useInfiniteQuery를 사용해 번개 데이터 가져오기
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [
      'meetings',
      selectedCategory,
      selectedFirstLocation,
      selectedSecondLocation,
      selectedDate,
    ],
    queryFn: ({ pageParam = 2 }) =>
      fetchMeeting({
        category: selectedCategory,
        location_1: selectedFirstLocation,
        location_2: selectedSecondLocation,
        date: selectedDate,
        page: pageParam,
        limit: 10,
      }),
    initialPageParam: 2,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 10 ? allPages.length + 1 : undefined,
    initialData: {
      pages: [initialMeetings],
      pageParams: [1],
    },
  });

  // useMutation을 이용한 좋아요 업데이트

  // IntersectionObserver를 이용한 무한 스크롤 구현
  useEffect(() => {
    if (!observerNode || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchNextPage();
      },
      { threshold: 1.0 },
    );

    observer.observe(observerNode);

    return () => observer.disconnect();
  }, [observerNode, fetchNextPage, hasNextPage]);

  // 지역 목록 생성
  const meetingLocationFirst = useMemo(() => [defaultFirstOption, ...Object.keys(REGION_DATA)], []);
  const meetingLocationSecond = useMemo(
    () => [defaultSecondOption, ...(REGION_DATA[selectedFirstLocation] || [])],
    [selectedFirstLocation],
  );

  // 카테고리 변경
  const handleCategoryClick = (category: string) => setSelectedCategory(category);

  // 첫 번째 지역 선택
  const handleSelectFirstLocation = (selected: string) => {
    setSelectedFirstLocation(selected);
    setSelectedSecondLocation(defaultSecondOption);
  };

  // 두 번째 지역 선택
  const handleSelectSecondLocation = (selected: string) => setSelectedSecondLocation(selected);

  // 번개 생성 모달 핸들러
  const handleClickCreateMeeting = () => {
    openModal('create');
  };

  // 캘린더 모달 핸들러
  const handleClickCalendar = () => {
    openModal('calender');
  };

  // 좋아요 버튼 클릭 핸들러
  const handleClickLike = (meetingId: string) => {
    likeMutation.mutate(meetingId);
  };

  // 날짜 변경 핸들러
  const handleDateChange = (date: Date | null) => setSelectedDate(date);

  return (
    <div className="container mx-auto mt-[72px] max-w-[1200px]">
      {/* 제목 */}
      <div className="mb-[52px] flex items-center justify-between">
        <div className="inline-flex h-[68px] flex-col items-start justify-start gap-[9px]">
          <div className="text-center font-dunggeunmo text-3xl font-normal text-black">
            맛집 탐방 같이 갈 사람, 누구 없나요?
          </div>
          <div className="text-center font-pretandard text-2xl font-normal text-black">
            맛집 탐방 같이 갈 사람, 누구 없나요?
          </div>
        </div>
        <Button color="white" size="sm" type="submit" onClick={handleClickCreateMeeting}>
          번개 만들기
        </Button>
      </div>

      {/* 번개 카테고리 */}
      <div className="mb-10 flex gap-3">
        {meetingTypes.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className="cursor-pointer focus:outline-none"
          >
            <Chip
              text={category}
              size="lg"
              mode={selectedCategory === category ? 'dark' : 'light'}
            />
          </button>
        ))}
      </div>

      {/* 필터링 드롭다운 */}
      <div className="flex-start mb-10 flex gap-3">
        <FilterDropdown
          options={meetingLocationFirst}
          selectedValue={selectedFirstLocation}
          onSelect={handleSelectFirstLocation}
        />
        <FilterDropdown
          options={meetingLocationSecond}
          selectedValue={selectedSecondLocation}
          onSelect={handleSelectSecondLocation}
        />
        <DropDown
          options={<DatePicker inline selected={selectedDate} onChange={handleDateChange} />}
          trigger={
            <div className="inline-flex h-10 flex-row items-center justify-center rounded-xl border border-[#8c8c8c] bg-white px-2.5 py-2 text-center font-pretandard text-sm font-medium leading-tight text-[#8c8c8c] hover:bg-[#595959] hover:text-white">
              {selectedDate ? selectedDate.toLocaleDateString() : '날짜'}
              <Icon path="chevron_down" />
            </div>
          }
          onSelect={handleClickCalendar}
        />
      </div>

      {/* 번개 리스트 */}
      <div className="meeting-list">
        {data.pages.flat().length === 0 ? (
          <EmptyMessage firstLine="아직 번개가 없어요" secondLine="지금 번개를 만들어 보세요!" />
        ) : (
          <div className="grid grid-cols-3 gap-x-6 gap-y-10">
            {data.pages.flat().map((meeting: Meeting, index: number) => (
              <MeetingInfo
                key={`${meeting.id}-${index}`}
                meetings={meeting}
                onClick={() => handleClickLike(meeting.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* 무한 스크롤 트리거 */}
      <div ref={setObserverNode} className="h-10" />
      {isFetchingNextPage && <p className="text-center text-gray-500">Loading more...</p>}
    </div>
  );
}
