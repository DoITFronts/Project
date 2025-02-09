import Image from 'next/image';

const Participant = ({
  participantCount,
  capacity,
}: {
  participantCount: number;
  capacity: number;
}) => {
  return (
    <div className="flex flex-row items-center">
      <Image src="" className="w-4 h-4" alt="User_duotone" />
      <div className="text-gray-700 text-sm font-medium font-['Pretendard'] leading-tight">
        {participantCount}/{capacity}
      </div>
    </div>
  );
};

export default Participant;
