type EventData = {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  date: string;
  time: string;
};

async function fetchEventById(id: string): Promise<EventData> {
  return Promise.resolve({
    id,
    title: `Mocked Event ${id}`,
    imageUrl: 'https://coen.store/1.jpg',
    location: 'Seoul',
    date: '2025-02-13',
    time: '19:00',
  });
}

export default fetchEventById;
