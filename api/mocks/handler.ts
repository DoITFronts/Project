import { rest } from 'msw';

const handlers = [
  rest.get('/api/meeting/detail/:id', (req, res, ctx) => {
    const { id } = req.params;

    const eventInfo = {
      id,
      title: `Mocked Event ${id}`,
      imageUrl: 'https://coen.store/1.jpg',
      location: 'Seoul',
      datetime: '2025-02-14T10:35:00',
      description:
        '혼자 하면 집중 안 되고 자꾸 딴짓하게 되는데, 같이 하면 의욕도 생기고 덜 지루하지 않나요?\n' +
        '공부든, 작업이든, 독서든 다 좋아요. 중간중간 가벼운 대화도 환영! 우리 같이 카공해요~',
      isLiked: true,
    };

    const mockParticipants = {
      '1': ['최승은', '최승승', '최최승'],
      '2': ['김철수', '박영희'],
    };

    const mockReviews = {
      '1': [
        {
          id: '1',
          date: '2025-02-10T10:30:00',
          content: '정말 좋은 모임이었어요!',
          count: 5,
          writer: '최승승',
        },
        {
          id: '2',
          date: '2025-02-10T10:30:00',
          content: '좋은 분들과 즐거운 시간이었어요!',
          count: 4,
          writer: '김승승',
        },
      ],
      '2': [
        {
          id: '3',
          date: '2025-02-10T10:30:00',
          content: '많은 분들과 즐거운 시간이었어요!',
          count: 3,
          writer: '박승승',
        },
      ],
    };

    const eventData = {
      ...eventInfo,
      participants: mockParticipants[id as keyof typeof mockParticipants] || [],
      reviews: mockReviews[id as keyof typeof mockReviews] || [],
    };

    return res(ctx.status(200), ctx.json(eventData));
  }),
];

export default handlers;
