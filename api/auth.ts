import axiosInstance from './api';
import Cookies from 'js-cookie';

//회원가입
const signupUser = async (data: SignUpRequestData) => {
  const response = await axiosInstance.post('/api/v1/join', data);
  return response.data;
};

//로그인
const signinUser = async (data: SignInRequestData) => {
  //폼 데이터 형식으로 로그인 데이터값 전달
  const formData = new FormData();
  formData.append('username', data.username);
  formData.append('password', data.password);

  const response = await axiosInstance.post(`/api/v1/login`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

//로그아웃
const signoutUser = async () => {
  // TODO: 추후에 백엔드 로그아웃 구현되면 수정될수도
  // await axiosInstance.post('/api/v1/logout');

  // 로컬 스토리지, 쿠키에서 accessToken 삭제
  localStorage.removeItem('accessToken');
  Cookies.remove('accessToken');
};

export { signupUser, signinUser, signoutUser };
