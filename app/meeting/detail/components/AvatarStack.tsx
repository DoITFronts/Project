import Image from 'next/image';

import Icon from '@/components/shared/Icon';

interface ParticipantProps {
  userId: string;
  User: UserProps;
}
interface UserProps {
  image: string | null;
}

export default function AvatarStack({ User: { image }, userId }: ParticipantProps) {
  return (
    <div key={userId} className="flex items-center -space-x-3">
      {image ? (
        <Image
          src={image}
          width={29}
          height={29}
          alt={userId}
          className="inline-block size-[29px] rounded-full"
        />
      ) : (
        <Icon path="profile/avatar" width="29" height="29" />
      )}
    </div>
  );
}
