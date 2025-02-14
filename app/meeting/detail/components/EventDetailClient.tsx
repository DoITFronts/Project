'use client';

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
    <div className="flex w-full">
      <div className="relative h-[270px] w-[518px] bg-indigo-500">
        <FallbackImage />
      </div>
      <div className="w-[calc(100%-518px)] rounded-lg bg-white p-4 shadow-md">
        <EventInfo title={event.title} location={event.location} datetime={event.datetime} />
        <h3 className="text-lg font-bold">참가자 목록</h3>
        <div className="mt-3 flex space-x-2">
          {participants.map((avatar) => (
            <img
              key={avatar}
              src={avatar}
              alt="참가자"
              className="size-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
