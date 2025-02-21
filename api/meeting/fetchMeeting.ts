import mockMeetings from '@/api/data/mockMeetings';

const isServer = typeof window === 'undefined';

const fetchMeeting = async ({
  tab,
  location_1,
  location_2,
  date,
  page,
  limit,
}: {
  tab: string;
  location_1: string;
  location_2: string;
  date: Date | null;
  page: number | null;
  limit: number;
}) => {
  if (isServer) {
    // ✅ SSR에서는 직접 Mock 데이터를 사용
    return mockMeetings
      .filter((meeting) => {
        const matchesTab = tab === '전체' || meeting.category === tab;
        const matchesLocation1 =
          location_1 === '지역 전체' || meeting.location.region_1depth_name === location_1;
        const matchesLocation2 =
          location_2 === '동 전체' || meeting.location.region_2depth_name === location_2;
        const matchesDate = !date || meeting.dateTime.startsWith(date.toISOString());

        return matchesTab && matchesLocation1 && matchesLocation2 && matchesDate;
      })
      .slice(0, limit); // 페이지네이션 적용
  }

  // ✅ CSR에서는 API 호출 (MSW가 가로챌 수 있음)
  const queryParams = new URLSearchParams({
    tab,
    location_1,
    location_2,
    date: date ? date.toISOString() : '',
    page: page ? page.toString() : '',
    limit: limit.toString(),
  }).toString();

  const response = await fetch(`/api/meeting/list?${queryParams}`);

  if (!response.ok) throw new Error(`API Error: ${response.status}`);

  return response.json();
};

export default fetchMeeting;
