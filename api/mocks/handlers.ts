// API 요청을 가로채는 핸들러 정의
import { rest } from 'msw';

import mockMeetingDetail from '@/api/data/mockMeetingDetail';

import mockMeetings from '../data/mockMeetings';

const handlers = [
  rest.get('/api/meeting/detail/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (!id) {
      return res(ctx.status(400), ctx.json({ error: 'Missing event ID' }));
    }

    console.log('handler Received ID:', id);

    return res(ctx.status(200), ctx.json({ ...mockMeetingDetail, id }));
  }),

  rest.put('/api/meetings/detail/:id/description', (req, res, ctx) => {
    const { id } = req.params;
    const { description } = req.body as { description: string };
    return res(
      ctx.status(200),
      ctx.json({
        id,
        description,
      })
    );
  }),

  rest.get('/api/meeting/list', (req, res, ctx) => {
    const category = req.url.searchParams.get('category') || '전체';
    const location1 = req.url.searchParams.get('location_1') || '지역 전체';
    const location2 = req.url.searchParams.get('location_2') || '동 전체';
    const date = req.url.searchParams.get('date') || '';

    // 필터링 로직
    const filteredMeetings = mockMeetings.filter((meeting) => {
      const matchesCategory = category === '전체' || meeting.category === category;
      const matchesLocation1 =
        location1 === '지역 전체' || meeting.location.region_1depth_name === location1;
      const matchesLocation2 =
        location2 === '동 전체' || meeting.location.region_2depth_name === location2;
      const matchesDate = date === '' || meeting.dateTime.startsWith(date);

      return matchesCategory && matchesLocation1 && matchesLocation2 && matchesDate;
    });

    return res(ctx.status(200), ctx.json(filteredMeetings));
  }),
];

export default handlers;
