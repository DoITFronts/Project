import axiosInstance from './api';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

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

    // 로컬 스토리지에 토큰 저장
    localStorage.setItem('accessToken', accessToken);
    console.log('accessToken 로컬스토리지 저장 완료:', localStorage.getItem('accessToken'));

    // 쿠키에 토큰 저장 (만료시간 1일 설정)
    Cookies.set('accessToken', accessToken, { expires: 1 });
    console.log('accessToken 쿠키에 저장 완료:', Cookies.get('accessToken'));

    // 토큰 디코딩
    const decodedToken: any = jwtDecode(accessToken);
    console.log('디코딩된 유저 정보:', decodedToken);

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

// 로그아웃
const signoutUser = () => {
  try {
    // 로컬 스토리지에서 accessToken 삭제
    localStorage.removeItem('accessToken');
    console.log('accessToken 로컬스토리지에서 삭제됨:', localStorage.getItem('accessToken'));

    // 쿠키에서 accessToken 삭제
    Cookies.remove('accessToken');
    console.log('accessToken 쿠키에서 삭제됨:', Cookies.get('accessToken'));

    // TODO:서버에 로그아웃 요청 (추후에)

    console.log('로그아웃 완료');
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
  }
};

export { signupUser, signinUser, signoutUser };
