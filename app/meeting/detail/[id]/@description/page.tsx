import ReactMarkdown from 'react-markdown';

import fetchMeetingById from '@/api/meeting/fetchMeetingById';
import { MeetingDetail } from '@/types/meeting';

async function Description({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting: MeetingDetail = await fetchMeetingById(id);

  return (
    <div className="font-['Pretendard'] text-base font-medium leading-normal text-neutral-800">
      <div className="font-dunggeunmo text-2xl font-normal text-black">{meeting.details.title}</div>
      <ReactMarkdown>{meeting.details.description}</ReactMarkdown>
    </div>
  );
}

export default Description;
