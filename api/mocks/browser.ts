import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.get('https://api.example.com/events', (req, res, ctx) =>
    res(
      ctx.json([
        { id: '1', name: 'Mocked Event 1', date: '2025-02-13', location: 'Seoul' },
        { id: '2', name: 'Mocked Event 2', date: '2025-02-14', location: 'New York' },
      ]),
    ),
  ),

  rest.get('https://api.example.com/events/:id', (req, res, ctx) =>
    res(
      ctx.json({
        id: req.params.id,
        name: `Mocked Event ${req.params.id}`,
        date: '2025-02-13',
        location: 'Seoul',
      }),
    ),
  ),

  rest.get('https://api.example.com/reviews', (req, res, ctx) =>
    res(
      ctx.json([
        { id: '1', review: 'Great event!' },
        { id: '2', review: 'Had a wonderful time!' },
      ]),
    ),
  ),
);
export default worker;
