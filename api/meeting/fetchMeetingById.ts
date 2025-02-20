async function fetchMeetingById(id: string) {
  console.log(`📡 Fetching meeting ID: ${id}`); // 요청 로그 추가

  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const apiUrl = `${baseURL}/api/meeting/detail/${id}`;

  try {
    const response = await fetch(apiUrl);

    if (response.status === 404) {
      console.warn(`⚠️ Meeting ID ${id} not found.`);
      return null;
    }

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching meeting details:', error);
    throw error;
  }
}

export default fetchMeetingById;
