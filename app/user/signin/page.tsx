'use client';

import Form from '@/components/form/Form';
import Logo from '@/public/Logo.svg';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/shared/Icon';

export default function Signin() {
  return (
    <div className="bg-white py-52 flex justify-center items-center">
      <div className="w-[402px]">
        <div className="flex justify-center items-center mb-[50px]">
          <Image src={Logo} alt="번개팅 로고" width={147.6} height={32.4} />
        </div>
        <Form
          onSubmit={() => {
            console.log('로그인 폼 제출');
          }}
        >
          <Form.Label className="pb-3">
            <Form.LabelHeader className="pb-2">이메일</Form.LabelHeader>
            <Form.Input
              name="email"
              placeholder="이메일을 입력해 주세요"
              autoComplete="email"
              required
            />
          </Form.Label>

          <Form.Label className="pb-10">
            <Form.LabelHeader className="pb-2">비밀번호</Form.LabelHeader>
            <Form.PasswordInput
              name="password"
              placeholder="비밀번호를 입력해 주세요"
              autoComplete="password"
              required
            />
          </Form.Label>
          <Form.Submit className="w-full">로그인</Form.Submit>
          <Button className="py-[10px] px-3 bg-[#fee500] hover:bg-[#fee500] active:bg-[#fee500] w-full mt-[18px] text-black text-base font-bold text-center">
            <Icon path="user/kakaoLogo" width="22px" height="22px" />
            카카오로 로그인하기
          </Button>
        </Form>
        <div className="flex justify-center items-center gap-2 font-['Pretendard'] text-[15px] text-neutral-800 font-bold mt-3">
          처음이신가요?
          <a className="text-gray-300 underline" href="/user/signup">
            회원가입 하기
          </a>
        </div>
      </div>
    </div>
  );
}
