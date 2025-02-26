import axiosInstance from './api';
//회원가입
const signupUser = async (data: SignUpRequestData) => {
  const response = await axiosInstance.post('/api/v1/join', data);
  return response.data;
};

//로그인
const signinUser = async (data: SignInRequestData) => {
  try {
    console.log('로그인 요청 시작');
    console.log('요청 데이터:', data);

    const response = await axiosInstance.get(`/api/v1/login`, {
      params: {
        username: data.username,
        password: data.password,
      },
    });

    console.log('로그인 성공');
    console.log('응답 상태 코드:', response.status);
    console.log('응답 데이터:', response.data);

    const accessToken = response.data.accessToken;

    if (!accessToken) {
      console.warn('응답에 accessToken 없음');
      return;
    }

    localStorage.setItem('accessToken', accessToken);
    console.log('accessToken 저장 완료:', localStorage.getItem('accessToken'));

    return response.data;
  } catch (error: any) {
    console.error('로그인 실패');

    if (error.response) {
      console.error('응답 상태 코드:', error.response.status);
      console.error('응답 데이터:', error.response.data);
    } else if (error.request) {
      console.error('요청은 보내졌지만 응답 없음:', error.request);
    } else {
      console.error('요청 설정 중 오류 발생:', error.message);
    }

    throw error;
  }
};

export { signupUser, signinUser };
