import Icon from '@/components/shared/Icon';

function Participant({
  participantCount,
  capacity,
}: {
  participantCount: number;
  capacity: number;
}) {
  return (
    <div className="flex flex-row items-center">
      <Icon path="card/user" />
      <div className="font-['Pretendard'] text-sm font-medium leading-tight text-gray-700">
        {participantCount}/{capacity}
      </div>
    </div>
  );
}

export default Participant;
