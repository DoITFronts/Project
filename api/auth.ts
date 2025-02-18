import axios from 'axios';

const signupUser = async (data: SignUpRequestData) => {
  const response = await axios.post('/api/v1/join', data, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
  return response.data;
};

export { signupUser };
