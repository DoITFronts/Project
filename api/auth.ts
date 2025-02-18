import instance from './instance/axios';

const signupUser = async (data: SignUpRequestData) => {
  const response = await instance.post('/api/v1/join', data);
  return response.data;
};

export { signupUser };
