import { rest } from 'msw';

import mockMeetings from '@/api/data/mockMeetingDetail';

const handlers = [
  rest.get('/api/meeting/detail/:id', (req, res, ctx) => {
    const { id } = req.params;

    console.log(`🔍 요청된 ID: ${id}`); // 확인용 로그

    // 🔥 ID 비교 시, 타입을 맞춰야 함
    const meeting = mockMeetings.find((m) => String(m.info.id) === String(id));

    if (!meeting) {
      console.warn(`⚠️ Meeting ID ${id} not found.`);
      return res(ctx.status(404), ctx.json({ error: `Meeting ID ${id} not found` }));
    }

    return res(ctx.status(200), ctx.json(meeting));
  }),
];

export default handlers;
