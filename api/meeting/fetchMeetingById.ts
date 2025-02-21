const isServer = typeof window === 'undefined';

const fetchMeetingById = async (id: string) => {
  if (!id) {
    throw new Error('Invalid event ID');
  }

  if (isServer) {
    console.log(`📢 Server-side rendering detected. Returning mock data for ID: ${id}`);
    return {
      info: {
        id,
        title: '📖 서버에서 제공하는 Mock 데이터',
        location: 'Seoul',
        datetime: '2025-02-14T18:00:00',
        summary: '서버에서 직접 반환하는 Mock 데이터입니다.',
        isLiked: false,
        maxParticipants: 10,
        currentParticipants: 6,
      },
      participants: [],
      details: {
        title: '번개팅 상세 설명',
        description: '이것은 서버에서 제공하는 Mock 데이터입니다.',
      },
      reviews: [],
    };
  }

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
};

export default fetchMeetingById;
