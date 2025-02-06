import Image from 'next/image';

const ConfirmedStatus = ({ isCompleted }: { isCompleted: boolean }) => {
  if (!isCompleted) return null;

  return (
    <div className="h-6 justify-start items-center gap-1 inline-flex">
      <Image src="" width={24} height={24} alt="ic_check" />
      <div className="text-orange-500 text-sm font-medium font-['Pretendard'] leading-tight">
        개설확정
      </div>
    </div>
  );
};

export default ConfirmedStatus;
