import CheckIcon from '@/components/shared/Icons/CheckIcon';

function ConfirmedStatus({ isCompleted }: { isCompleted: boolean }) {
  if (!isCompleted) return null;

  return (
    <div className="inline-flex h-6 items-center justify-start gap-1">
      <CheckIcon variant="filled-orange" />
      <div className="font-['Pretendard'] text-sm font-medium leading-tight text-orange-500">
        개설확정
      </div>
    </div>
  );
}

export default ConfirmedStatus;
