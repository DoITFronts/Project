import fetchEventById from '@/api/meeting/fetchEventById';
import EventHeader from '@/app/meeting/detail/components/EventHeader';
import EventInfo from '@/app/meeting/detail/components/EventInfo';

type EventData = {
  id: string;
  title: string;
  imageUrl?: string;
  location: string;
  date: string;
  time: string;
};

export default async function EventDetail({ params }: { params: { id: string } }) {
  const event: EventData | null = await fetchEventById(params.id);

  if (!event) return <div>이 모임은 존재하지 않습니다.</div>;

  return (
    <div>
      <EventHeader imageUrl={event.imageUrl || ''} />
      <EventInfo
        title={event.title}
        location={event.location}
        date={event.date}
        time={event.time}
      />
    </div>
  );
}
