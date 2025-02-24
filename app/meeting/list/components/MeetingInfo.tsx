import Image from 'next/image';

import MeetingProgress from '@/components/ui/card/MeetingProgress';
import Category from '@/components/ui/chip/Category';
import ChipInfo from '@/components/ui/chip/ChipInfo';
import { Meeting } from '@/types/meeting.types';

import Card from './Card';

export default function MeetingInfo({
  meetings,
  onClick,
}: {
  meetings: Meeting;
  onClick: () => void;
}) {
  return (
    <Card>
      <div className="flex h-[430px] flex-col justify-between overflow-hidden">
        <div className="relative flex h-[200px] w-96 items-center justify-center overflow-hidden">
          <div className="absolute left-0 top-0 z-0 size-[10px] bg-white" />
          <div className="absolute bottom-0 right-0 z-0 size-[10px] bg-white" />
          <Image
            src="/assets/card/example_image.png"
            width={384}
            height={200}
            alt="thumbnail"
            className="w-96"
          />
          <Card.Like isLiked={meetings.isLiked} onClick={onClick} meetingId={meetings.id} />
          <div className="absolute right-[14px] top-[17.5px]">
            <Category type={meetings.category} />
          </div>
        </div>

        <div className="flex h-[206px] flex-col justify-between">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-2">
              <Card.Title
                name={meetings.name}
                location={`${meetings.location.region_1depth_name} ${meetings.location.region_2depth_name}`}
              />
              <div className="flex h-[22px] flex-row items-center gap-1">
                <ChipInfo datetime={meetings.dateTime} />
              </div>
            </div>
            <div className="line-clamp-2 overflow-hidden text-ellipsis font-pretandard text-base font-medium text-[#8c8c8c]">
              {meetings.description}
            </div>
          </div>
          <MeetingProgress
            id={meetings.id}
            participantCount={meetings.participantCount}
            capacity={meetings.capacity}
            isConfirmed={meetings.isConfirmed}
            isCompleted={meetings.isCompleted}
          />
        </div>
      </div>
    </Card>
  );
}
