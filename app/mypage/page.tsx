'use client';

import { useState } from 'react';

import ProfileCard from '@/app/mypage/components/PropfileCard';
import CheckIcon from '@/components/shared/Icons/CheckIcon';
import BoxSelect from '@/components/ui/BoxSelect';
import Chip from '@/components/ui/chip/Chip';
import ChipInfo from '@/components/ui/chip/ChipInfo';
import ChipStatus from '@/components/ui/chip/ChipState';
import Pagination from '@/components/ui/Pagination';
import Tag from '@/components/ui/Tag';

export default function MyPage() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex gap-1 bg-amber-50 p-10">
      <div>
        <div className="flex flex-col gap-1">
          기본 체크 아이콘 (16px, 오렌지 체크)
          <CheckIcon />
          크기 큰 체크 아이콘 (24px, 오렌지 체크)
          <CheckIcon size="lg" />
          배경이 오렌지 (24px)
          <CheckIcon size="lg" variant="filled-orange" />
          배경이 다크 (24px)
          <CheckIcon size="lg" variant="filled-dark" />
        </div>
        <div className="flex flex-col gap-1">
          일반 칩 스몰, 라지
          <Chip text="전체" size="sm" mode="light" type="default" />
          <Chip text="중요" size="lg" mode="dark" type="default" />
          타임 칩 (활성 상태)
          <Chip text="15:00" type="time" mode="light" />
          <Chip text="18:30" type="time" mode="dark" />
          타임 칩 (비활성 상태)
          <Chip text="12:00" type="time" mode="light" disabled />
          <Chip text="20:30" type="time" mode="dark" disabled />
        </div>
        <div className="flex flex-col gap-1">
          날짜 칩
          <ChipInfo text="2월 6일" colorMode="white" />
          <ChipInfo text="2월 7일" colorMode="orange" />
        </div>
        <div className="flex flex-col gap-1">
          상태 칩 이용 예정 (planned)
          <ChipStatus text="이용 예정" status="planned" />
          이용 완료 (completed)
          <ChipStatus text="이용 완료" status="completed" />
          개설 확정 (confirmed) - 아이콘 자리 있음
          <ChipStatus text="개설 확정" status="confirmed" />
          개설 대기 (waiting) - 아이콘 없음
          <ChipStatus text="개설 대기" status="waiting" />
        </div>
        <div className="flex flex-col gap-1">
          왼쪽 둥근 모서리 태그
          <Tag text="오늘 21시 마감" variant="left-rounded" />
          오른쪽 둥근 모서리 태그
          <Tag text="오늘 21시 마감" variant="right-rounded" />
        </div>
      </div>
      <div>
        <ProfileCard
          name="최승은"
          nickname="승승"
          // profileImage="https://via.placeholder.com/44x35"
        />
      </div>
      <div className="flex flex-col gap-1">
        일반 칩 스몰, 라지
        <Chip text="전체" size="sm" mode="light" type="default" />
        <Chip text="중요" size="lg" mode="dark" type="default" />
        타임 칩 (활성 상태)
        <Chip text="15:00" type="time" mode="light" />
        <Chip text="18:30" type="time" mode="dark" />
        타임 칩 (비활성 상태)
        <Chip text="12:00" type="time" mode="light" disabled />
        <Chip text="20:30" type="time" mode="dark" disabled />
      </div>
      <div className="flex flex-col gap-1">
        날짜 칩
        <ChipInfo text="2월 6일" colorMode="white" />
        <ChipInfo text="2월 7일" colorMode="orange" />
      </div>
      <div className="flex flex-col gap-1">
        상태 칩 이용 예정 (planned)
        <ChipStatus text="이용 예정" status="planned" />
        이용 완료 (completed)
        <ChipStatus text="이용 완료" status="completed" />
        개설 확정 (confirmed) - 아이콘 자리 있음
        <ChipStatus text="개설 확정" status="confirmed" />
        개설 대기 (waiting) - 아이콘 없음
        <ChipStatus text="개설 대기" status="waiting" />
      </div>
      <div className="flex flex-col gap-1">
        왼쪽 둥근 모서리 태그
        <Tag text="오늘 21시 마감" variant="left-rounded" />
        오른쪽 둥근 모서리 태그
        <Tag text="오늘 21시 마감" variant="right-rounded" />
      </div>
      <div className="flex flex-col gap-1">
        <BoxSelect title="달램핏" subtitle="오피스 스트레칭" />
        <Pagination
          totalPages={10}
          currentPage={currentPage}
          size="sm"
          onPageChange={(page) => setCurrentPage(page)}
        />
        <Pagination
          totalPages={10}
          currentPage={1}
          size="lg"
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
