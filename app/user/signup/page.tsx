'use client';

import { useState } from 'react';
import Form from '@/components/form/Form';
import Logo from '@/public/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { signupUser } from '@/api/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async (data: SignUpRequestData) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('제출된 회원가입 데이터:', data);
      const response = await signupUser(data);
      console.log('회원가입 응답:', response);
      setSuccess('회원가입 성공!');
      //TODO: Toast 디자인 변경
      toast.success('회원가입이 완료되었습니다.', {
        hideProgressBar: true,
        autoClose: 900,
      });
      router.push('/user/signin');
    } catch (err: any) {
      setError('회원가입에 실패했습니다. 다시 시도해 주세요.');
      //TODO: email 중복 error 처리하기
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-52 flex justify-center items-center">
      <div className="w-[402px]">
        <div className="flex justify-center items-center mb-[50px]">
          <Link href={'/'}>
            <Image src={Logo} alt="번개팅 로고" width={147.6} height={32.4} />
          </Link>
        </div>
        <Form onSubmit={handleSignup}>
          <Form.Label className="pb-3">
            <Form.LabelHeader className="pb-2">이름</Form.LabelHeader>
            <Form.Input
              name="name"
              placeholder="이름을 입력해 주세요"
              autoComplete="name"
              required
            />
          </Form.Label>
          <Form.Label className="pb-3">
            <Form.LabelHeader className="pb-2">이메일</Form.LabelHeader>
            <Form.Input
              name="email"
              placeholder="이메일을 입력해 주세요"
              autoComplete="email"
              required
            />
          </Form.Label>
          <Form.Label className="pb-3">
            <Form.LabelHeader className="pb-2">닉네임</Form.LabelHeader>
            <Form.Input
              name="nickname"
              placeholder="닉네임을 입력해 주세요"
              autoComplete="nickname"
              required
            />
          </Form.Label>
          <Form.Label className="pb-3">
            <Form.LabelHeader className="pb-2">비밀번호</Form.LabelHeader>
            <Form.PasswordInput
              name="password"
              placeholder="비밀번호를 입력해 주세요"
              autoComplete="password"
              required
            />
          </Form.Label>
          <Form.Label className="pb-3">
            <Form.LabelHeader className="pb-2">비밀번호 확인</Form.LabelHeader>
            <Form.PasswordInput
              name="passwordConfirmation"
              placeholder="비밀번호를 다시 한번 입력해 주세요"
              autoComplete="password"
              required
            />
          </Form.Label>
          <Form.Label className="pb-10">
            <Form.LabelHeader className="pb-2">본인인증</Form.LabelHeader>
            <Form.Input
              name="birth"
              placeholder="YYYY.MM.DD 생년월일을 입력해 주세요"
              required
              type="date"
            />
          </Form.Label>
          <Form.Submit className="w-full">{isLoading ? '회원가입 중...' : '회원가입'}</Form.Submit>
        </Form>
        <div className="flex justify-center items-center gap-2 font-['Pretendard'] text-[15px] text-neutral-800 font-bold mt-3">
          이미 회원이신가요?{' '}
          <Link className="text-gray-300 underline" href="/user/signin">
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
