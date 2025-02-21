const fetchMeetingById = async (id: string) => {
  if (!id) {
    throw new Error('Invalid event ID');
  }

  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const apiUrl = `${baseURL}/api/meeting/detail/${id}`;

  try {
    const response = await fetch(apiUrl);

    if (response.status === 404) {
      console.warn(`⚠️ Meeting ID ${id} not found.`);
      return {
        info: { id: '', title: '', location: '', datetime: '', summary: '', isLiked: false },
        participants: [],
        details: { title: '', description: '' },
        reviews: [],
      };
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
