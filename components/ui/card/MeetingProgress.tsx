import Link from 'next/link';

import Card from '@/app/meeting/list/components/Card';

import Button from '../Button';

interface MeetingProgressProps {
  id: number;
  participantCount: number;
  capacity: number;
  isConfirmed: boolean;
  isCompleted: boolean;
  children?: React.ReactNode;
  optionClass?: string;
}

export default function MeetingProgress({
  id,
  participantCount,
  capacity,
  isConfirmed,
  isCompleted,
  children,
  optionClass,
}: MeetingProgressProps) {
  return (
    <div className="flex w-full flex-row items-center">
      <div className="flex grow flex-col gap-3">
        <div className={`${optionClass} flex items-center gap-2`}>
          <div className="flex flex-row gap-2">
            <Card.Participant participantCount={participantCount} capacity={capacity} />
            {children}
          </div>
          <Card.ConfirmedStatus isConfirmed={isConfirmed} />
        </div>
        <Card.ProgressBar
          participantCount={participantCount}
          capacity={capacity}
          isCompleted={isCompleted}
        />
      </div>

      {/* 번개 참여 버튼 */}
      <Link href={`/meeting/list/${id}`}>
        <Button className="ml-6" disabled={isCompleted}>
          {isCompleted ? '마감' : '번개 참여'}
        </Button>
      </Link>
    </div>
  );
}
