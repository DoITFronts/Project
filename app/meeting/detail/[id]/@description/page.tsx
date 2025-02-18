import ReactMarkdown from 'react-markdown';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import { MeetingDetail } from '@/types/meeting';

export default async function DescriptionPage({ params }: { params: { id: string } }) {
  if (!params.id) return <p>⚠️ 이벤트 ID가 필요합니다.</p>;

  const meeting: MeetingDetail = await fetchMeetingById(params.id);

  return (
    <div className="font-['Pretendard'] text-base font-medium leading-normal text-neutral-800">
      <h2 className="font-dunggeunmo text-2xl font-normal text-black">{meeting.details.title}</h2>
      <ReactMarkdown>{meeting.details.description}</ReactMarkdown>
    </div>
  );
}
