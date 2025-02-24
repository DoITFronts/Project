import fetchMeeting from '@/api/meeting/fetchMeeting';

import MeetingList from './components/MeetingList';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const params = await searchParams;
  const category = params?.category ?? '';
  const location1 = params?.location_1 ?? '';
  const location2 = params?.location_2 ?? '';
  const date = params?.date ? new Date(params.date) : null;

  // 필터 조건을 기반으로 서버에서 초기 데이터 가져오기
  const initialMeetings = await fetchMeeting({
    category,
    location1,
    location2,
    date,
    page: 1,
    per_page: 10,
  });

  return <MeetingList initialMeetings={initialMeetings} />;
}
