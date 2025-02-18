const fetchMeetingById = async (id: string) => {
  if (!id) {
    throw new Error('Invalid event ID');
  }

  const apiUrl = `/api/meeting/detail/${id}`;

  const response = await fetch(apiUrl);

  if (!response.ok) throw new Error('API Error');

  return response.json();
};

export default fetchMeetingById;
