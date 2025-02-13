type EventData = {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  datetime: string;
};

async function fetchEventById(id: string): Promise<EventData> {
  return Promise.resolve({
    id,
    title: `Mocked Event ${id}`,
    imageUrl: 'https://coen.store/1.jpg',
    location: 'Seoul',
    datetime: '2025-02-14T10:35:00',
  });
}

export default fetchEventById;
