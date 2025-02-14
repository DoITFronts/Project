'use client';

import AvatarGroup from '@/app/meeting/detail/components/AvatarGroup';
import EventInfo from '@/app/meeting/detail/components/EventInfo';
import FallbackImage from '@/components/shared/FallbackImage';

type EventData = {
  id: string;
  title: string;
  location: string;
  datetime: string;
};

type EventParticipantsProps = {
  event: EventData;
  participants: string[];
};

export default function EventDetailClient({ event, participants }: EventParticipantsProps) {
  return (
    <div className="flex w-full gap-6">
      <div className="relative h-[270px] w-[518px] bg-indigo-500">
        <FallbackImage />
      </div>
      <div className="w-[calc(100%-518px)]">
        <EventInfo title={event.title} location={event.location} datetime={event.datetime} />
        <AvatarGroup count={participants.length} />
      </div>
    </div>
  );
}
