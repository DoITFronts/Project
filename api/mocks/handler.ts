import { rest } from 'msw';

const handlers = [
  rest.get('/api/events/:id/participants', (req, res, ctx) => {
    const { id } = req.params;

    const mockParticipants = {
      '1': [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
        'https://randomuser.me/api/portraits/men/3.jpg',
      ],
      '2': [
        'https://randomuser.me/api/portraits/women/4.jpg',
        'https://randomuser.me/api/portraits/men/5.jpg',
      ],
    };

    const participants = mockParticipants[id as keyof typeof mockParticipants] || [];

    return res(ctx.status(200), ctx.json(participants));
  }),
];

export default handlers;
