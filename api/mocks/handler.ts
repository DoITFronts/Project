import { rest } from 'msw';

import mockMeetingDetail from '@/api/data/mockMeetingDetail';

const handlers = [
  rest.get('/api/meeting/detail/:id', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockMeetingDetail)),
  ),
];

export default handlers;
