import Icon from '@/components/shared/Icon';
import EditIcon from '@/components/shared/Icons/EditIcon';

interface ProfileCardProps {
  name: string;
  nickname: string;
}

export default function ProfileCard({ name, nickname }: ProfileCardProps) {
  return (
    <div className="relative h-[172px] w-[696px] overflow-hidden  rounded-3xl">
      <div className="absolute left-0 top-0 h-[172px] w-[696px] rounded-3xl border-2 border-gray-200 bg-white" />
      <div className="absolute left-[92px] top-[79px] inline-flex flex-col items-start justify-start gap-4">
        <div className="flex flex-col items-start justify-start gap-[9px]">
          <div className="inline-flex items-center justify-start gap-2.5">
            <div className="font-['Pretendard'] text-base font-semibold leading-normal text-gray-800">
              {name}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="inline-flex items-start justify-start gap-6">
              <div className="font-['Pretendard'] text-sm font-medium leading-tight text-gray-800">
                닉네임
              </div>
              <div className="font-['Pretendard'] text-sm font-normal leading-tight text-gray-700">
                {nickname}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[2px] top-px inline-flex items-start justify-start gap-2.5">
        <div className="relative h-[66px] w-[692px]">
          <div className="absolute left-0 top-px h-[65px] w-[692px] rounded-t-[22px] bg-orange-400" />
          <div className="border-1 absolute left-px top-[59px] h-0 w-[-webkit-fill-available] border-orange-600" />
          <div className="absolute left-[379px] top-[13px] h-[38.16px] w-[156.22px]">
            <Icon path="profile/profileCardBg" />
          </div>
          <div className="absolute left-[23px] top-[17px] inline-flex w-[646px] items-center justify-between">
            <div className="font-['Pretendard'] text-lg font-semibold leading-7 text-gray-900">
              내 프로필
            </div>
            <div className="relative size-8">
              <EditIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[26px] top-[58px] size-14">
        <Icon path="profile/avatar" />
      </div>
    </div>
  );
}
