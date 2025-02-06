import Chip from '@/components/ui/chip/Chip';
import ChipInfo from '@/components/ui/chip/ChipInfo';

export default function MyPage() {
  return (
    <div className="flex gap-1 bg-amber-50 p-32">
      <div className="flex flex-col gap-1">
        일반 칩
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
    </div>
  );
}
