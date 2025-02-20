import fetchMeeting from '@/api/meeting/fetchMeeting';

import MeetingList from './components/MeetingList';

export default async function Page() {
  const initialMeetings = await fetchMeeting({
    tab: '전체',
    location_1: '지역 전체',
    location_2: '동 전체',
    date: null,
    page: 1,
    limit: 10,
  });

  return <MeetingList initialMeetings={initialMeetings} />;
}
