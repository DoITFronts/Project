'use client';
import useModalStore from '@/store/useModalStore';
import BoxSelect from '../../BoxSelect';
import { useEffect, useState } from 'react';
import CustomDatePicker from '../datePicker';
import Button from '@/components/ui/Button';

type MeetingType = '달램핏' | '달램핏2' | '달램핏3'; //TODO: 실제 타입값으로 변경

export default function CreateMeetingModal() {
  const { closeModal } = useModalStore();
  const [meetingName, setMeetingName] = useState('');
  const [meetingPlace, setMeetingPlace] = useState('');
  const [meetingDate, setMeetingDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [meetingType, setMeetingType] = useState<MeetingType | null>(null);
  const [participantCount, setParticipantCount] = useState('');

  // TODO: 추후에 데이터 연결 시 보내는 postData.
  const postData = {
    name: meetingName,
    locationn: meetingPlace,
    type: meetingType,
    dateTime: meetingDate,
    registrationEnd: deadlineDate,
    capacity: participantCount,
  };

  const handleMeetingName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingName(e.target.value);
  };

  // TODO?: 따로 행정구역(~도 ~시)파일을 만들어서 지역을 검색했을 때 자동 완성 되는 기능을 넣어볼까 합니다.
  const handleMeetingPlace = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingPlace(e.target.value);
  };

  const handleMeetingType = (type: MeetingType) => {
    setMeetingType((prev) => (prev === type ? null : type));
  };

  const handleMeetingDateChange = (date: Date | null) => {
    if (date) {
      setMeetingDate(date);
    }
  };
  const handleDeadlineDateChange = (date: Date | null) => {
    if (date) {
      setDeadlineDate(date);
    }
  };

  const handleParticipantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력되도록
    if (/^\d*$/.test(value)) {
      setParticipantCount(value);
    }
  };

  return (
    <div className="w-[520px] h-auto p-6 bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
      <div className="flex flex-col gap-6 w-full h-auto">
        <div className="w-full flex justify-between ">
          <span className="font-bold text-black">모임 만들기</span>
          <button className="w-25 h-25 bg-blue-600" onClick={closeModal}>
            닫기
          </button>
        </div>
        <form className="w-full h-auto flex flex-col gap-6">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="meetingName" className="font-semibold text-black">
              모임 이름
            </label>
            <input
              type="text"
              placeholder="모임 이름을 작성해 주세요."
              onChange={handleMeetingName}
              className="text-black w-full bg-gray-50 px-4 py-2.5"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="meetingPlace" className="font-semibold text-black">
              모임 장소
            </label>
            <input //TODO: 나중에 드롭다운으로 바꾼 다음, 지역 검색 가능하게 할까??
              type="text"
              onChange={handleMeetingPlace}
              placeholder="장소를 선택해 주세요"
              className="text-black w-full bg-gray-50 px-4 py-2.5"
            />
          </div>

          {/* TODO: 파일명 제출 버튼 위치 바꾸기 */}
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="image" className="font-semibold text-black">
              이미지
            </label>
            <input type="file" className="flex justify-end" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="font-semibold text-black">선택 서비스</span>
            <div className="w-full flex justify-between gap-3">
              {/* TODO: box-select 컴포넌트 완료 후 대체 */}
              <BoxSelect
                onClick={() => handleMeetingType('달램핏')}
                title="달램핏"
                subtitle="오피스 스트레칭"
                isChecked={meetingType === '달램핏'}
              />
              <BoxSelect
                onClick={() => handleMeetingType('달램핏2')}
                title="달램핏2"
                subtitle="오피스 스트레칭"
                isChecked={meetingType === '달램핏2'}
              />
              <BoxSelect
                onClick={() => handleMeetingType('달램핏3')}
                title="달램핏3"
                subtitle="오피스 스트레칭"
                isChecked={meetingType === '달램핏3'}
              />
            </div>
          </div>
          <div className="w-full flex justify-between gap-2">
            <div className="w-[217px] h-[72px] flex flex-col gap-2">
              <CustomDatePicker
                label="모임 날짜"
                selected={meetingDate}
                onChange={handleMeetingDateChange}
              />
            </div>
            <div className="w-[217px] h-[72px] flex flex-col gap-2">
              <CustomDatePicker
                label="마감 날짜"
                selected={deadlineDate}
                onChange={handleDeadlineDateChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="모집 정원" className="text-black font-semibold">
              모집 정원
            </label>
            <input
              type="text"
              className="text-black w-full bg-gray-50 px-4 py-2.5"
              placeholder="최소 5인 이상 입력해 주세요."
              onChange={handleParticipantChange}
              value={participantCount}
            />
          </div>
        </form>
        <div className="w-full flex justify-center mt-4">
          {/* TODO: form value 모두 작성 시, 버튼 활성화 로직 추가 */}
          <Button color="filled" size="lg" disabled={true}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
