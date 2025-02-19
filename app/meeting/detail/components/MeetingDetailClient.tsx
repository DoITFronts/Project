'use client';

import AvatarGroup from '@/app/meeting/detail/components/AvatarGroup';
import Card from '@/app/meeting/list/components/Card';
import FallbackImage from '@/components/shared/FallbackImage';
import MeetingProgress from '@/components/ui/card/MeetingProgress';
import Tag from '@/components/ui/Tag';
import { MeetingDetail } from '@/types/meeting';

export default function MeetingDetailClient({ meeting }: { meeting: MeetingDetail }) {
  const handleClickLike = () => null;
  return (
    <Card mode="detail">
      <div className="flex h-[271px] gap-6">
        <div className="relative flex w-[518px] items-center justify-center overflow-hidden">
          <div className="absolute left-0 top-0 z-0 size-[10px] bg-white" />
          <div className="absolute bottom-0 right-0 z-0 size-[10px] bg-white" />
          <FallbackImage />
          <Card.Like isLiked={meeting.info.isLiked} onClick={handleClickLike} />
        </div>
        <div className="flex h-[271px] w-[calc(100%-518px)] flex-col justify-between">
          <div className="flex flex-col gap-[10px]">
            <Tag />
            <div className="flex flex-col gap-2">
              <Card.Title name={meeting.info.title} location={meeting.info.location} />
              <Card.ChipInfo datetime={meeting.info.datetime} />
            </div>
            <div className="line-clamp-2 overflow-hidden text-ellipsis font-['Pretendard'] text-base font-medium text-[#8c8c8c]">
              {meeting.info.summary}
            </div>
          </div>
          <MeetingProgress
            id={1}
            participantCount={meeting.participants?.length ?? 0}
            capacity={20}
            isConfirmed
            isCompleted={false}
            optionClass="justifycontent: spacebetween"
          >
            <AvatarGroup count={10} />
          </MeetingProgress>
        </div>
      </div>
    </Card>
  );
}
