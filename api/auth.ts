import axiosInstance from './instance/axios';

//회원가입
const signupUser = async (data: SignUpRequestData) => {
  const response = await axiosInstance.post('/api/v1/join', data);
  return response.data;
};

//로그인
const signinUser = async (data: SignInRequestData) => {
  const response = await axiosInstance.post('/api/v1/login', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
    },
  });
  return response.data;
};

export { signupUser, signinUser };
