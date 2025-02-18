import { MeetingDetail } from '@/types/meeting';

const fetchMeetingById = async (id: string): Promise<MeetingDetail> => {
  const response = await fetch(`/api/meeting/detail/:${id}`);
  return response.json();
};

fetchMeetingById('1').then((data) => console.log(data));

export default fetchMeetingById;
