const fetchMeetingById = async (id: string) => {
  if (!id) {
    throw new Error('Invalid event ID');
  }

  const apiUrl = `/api/meeting/detail/${encodeURIComponent(id)}`;

  const response = await fetch(apiUrl);

  if (!response.ok) throw new Error(`API Error: ${response.status}`);

  return response.json();
};

export default fetchMeetingById;
