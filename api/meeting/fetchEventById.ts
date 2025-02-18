type EventData = {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  datetime: string;
  description: string;
  isLiked: boolean;
};

async function fetchEventById(id: string): Promise<EventData> {
  return Promise.resolve({
    id,
    title: `Mocked Event ${id}`,
    imageUrl: 'https://coen.store/1.jpg',
    location: 'Seoul',
    datetime: '2025-02-14T10:35:00',
    description:
      '혼자 하면 집중 안 되고 자꾸 딴짓하게 되는데, 같이 하면 의욕도 생기고 덜 지루하지 않나요?\n' +
      '공부든, 작업이든, 독서든 다 좋아요. 중간중간 가벼운 대화도 환영! 우리 같이 카공해요~',
    isLiked: true,
  });
}

export default fetchEventById;
