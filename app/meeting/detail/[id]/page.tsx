import EventHeader from '@/app/meeting/detail/components/EventHeader';
import EventInfo from '@/app/meeting/detail/components/EventInfo';

export async function generateStaticParams() {
  const events = await fetch('https://api.example.com/events').then((res) => res.json());
  return events.map((event: any) => ({ id: event.id.toString() }));
}

export default async function EventDetail({ params }: { params: { id: string } }) {
  const event = await fetch(`https://api.example.com/events/${params.id}`).then((res) =>
    res.ok ? res.json() : null,
  );

  if (!event) return <div>이 모임은 존재하지 않습니다.</div>;

  return (
    <div>
      <EventHeader imageUrl={event.imageUrl} />
      <EventInfo
        title={event.title}
        location={event.location}
        date={event.date}
        time={event.time}
      />
    </div>
  );
}
