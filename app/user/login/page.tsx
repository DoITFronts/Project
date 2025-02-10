'use client';

import { Form } from '@/components/form/Form';

export default function Login() {
  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    // 화면 테스트용
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">로그인</h1>
      <Form onSubmit={onSubmit}>
        <Form.Input name="email" type="email" placeholder="이메일" />
        <Form.Input name="password" type="password" placeholder="비밀번호" />
        <Form.SubmitButton>로그인</Form.SubmitButton>
      </Form>
    </div>
  );
}
