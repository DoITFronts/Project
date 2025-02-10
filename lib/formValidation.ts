export const validation = {
  email: {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: '유효한 이메일 주소를 입력해주세요.',
    },
  },
  password: {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: 6,
      message: '비밀번호는 최소 6자 이상이어야 합니다.',
    },
  },
};
