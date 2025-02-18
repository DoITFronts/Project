// API 요청을 가로채는 핸들러 정의
import { rest } from 'msw';

import mockMeetingDetail from '@/api/data/mockMeetingDetail';

const handlers = [
  rest.get('/api/meeting/detail/:id', (req, res, ctx) => {
    const id = req.params.id as string;

    if (!id) {
      return res(ctx.status(400), ctx.json({ error: 'Missing event ID' }));
    }

    console.log('Received ID:', id);

    return res(ctx.status(200), ctx.json({ ...mockMeetingDetail, id }));
  }),
];

export default handlers;
