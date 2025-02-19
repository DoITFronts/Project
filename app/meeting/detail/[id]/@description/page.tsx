import ReactMarkdown from 'react-markdown';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import { MeetingDetail } from '@/types/meeting';

export default async function DescriptionPage({ params }: { params: { id: string } }) {
  if (!params) {
    return <p>⚠️ 이벤트 ID가 필요합니다.</p>;
  }

  try {
    const meeting: MeetingDetail = await fetchMeetingById(params);
    return (
      <div className="font-['Pretendard'] text-base font-medium leading-normal text-neutral-800">
        <h2 className="font-dunggeunmo text-2xl font-normal text-black">{meeting.info.title}</h2>
        <ReactMarkdown>{meeting.details.description}</ReactMarkdown>
      </div>
    );
  } catch (error) {
    console.error('Error fetching meeting details:', error);
    return <p>⚠️ 데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }
}
