'use client';

import Form from '@/components/form/Form';
import Logo from '@/public/assets/logo.svg';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/shared/Icon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signinUser } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function Signin() {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: signinUser,
    onMutate: async (data) => {
      console.log('제출된 로그인 데이터:', data);
    },
    onSuccess: (response) => {
      console.log(' 로그인 데이터:', response);
      const accessToken = response.accessToken;
      if (accessToken) {
        //로컬 스토리지에 토큰 저장
        localStorage.setItem('accessToken', accessToken);
        console.log('accessToken 로컬스토리지 저장 완료:', localStorage.getItem('accessToken'));
        // 쿠키에 토큰 저장 (만료시간 1일 설정)
        Cookies.set('accessToken', accessToken, { expires: 1 });
        console.log('accessToken 쿠키에 저장 완료:', Cookies.get('accessToken'));
        // 토큰 디코딩 test
        const decodedToken: any = jwtDecode(accessToken);
        console.log('디코딩된 유저 정보:', decodedToken);

        toast.success('성공적으로 로그인 되었습니다 :)', {
          hideProgressBar: true,
          autoClose: 900,
        });
        router.push('/');
      }
    },
    onError: (error: any) => {
      console.error('로그인 실패:', error.response?.data || error.message);
      toast.error('로그인에 실패했습니다.');
    },
  });

  const handleSignin = (data: SignInRequestData) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen py-[10%] bg-white flex justify-center items-center">
      <div className="w-[402px]">
        <div className="flex justify-center items-center mb-[50px]">
          <Link href="/">
            <Image src={Logo} alt="번개팅 로고" width={147.6} height={32.4} />
          </Link>
        </div>
        <Form onSubmit={handleSignin}>
          <Form.Label className="pb-6">
            <Form.LabelHeader className="pb-2">이메일</Form.LabelHeader>
            <Form.Input
              name="username"
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
          <Link className="text-gray-300 underline" href="/user/signup">
            회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
}
