export default async function fetchParticipants(eventId: string): Promise<string[]> {
  try {
    const response = await fetch(`/api/events/${eventId}/participants`);
    if (!response.ok) {
      throw new Error('참가자 정보를 불러오는 데 실패했습니다.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching participants:', error);
    return [];
  }
}
