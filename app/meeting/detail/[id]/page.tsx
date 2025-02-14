import fetchEventById from '@/api/meeting/fetchEventById';
import fetchParticipants from '@/api/meeting/fetchParticipants';
import EventDetailClient from '@/app/meeting/detail/components/EventDetailClient';

type EventData = {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
};

export default async function EventDetail({ params }: { params: { id: string } }) {
  const event: EventData | null = await fetchEventById(params.id);
  const participants = await fetchParticipants(params.id);

  if (!event) return <div>이 모임은 존재하지 않습니다.</div>;

  return <EventDetailClient event={event} participants={participants} />;
}
