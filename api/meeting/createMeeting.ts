import { CreateMeetingParams } from '@/types/meeting';
import axiosInstance from '../api';

const createMeeting = async (meetingData: CreateMeetingParams) => {
  const formData = new FormData();

  if (meetingData.image) {
    formData.append('image', meetingData.image);
  }
  const meetingDataForApi = {
    name: meetingData.title,
    summary: meetingData.summary,
    address: meetingData.address,
    city: meetingData.city,
    town: meetingData.town,
    category: meetingData.category,
    targetAt: meetingData.targetAt.toISOString(),
    endAt: meetingData.endAt.toISOString(),
    capacity: meetingData.capacity,
    minCapacity: meetingData.minCapacity,
  };
  formData.append('lightening', JSON.stringify(meetingDataForApi));
  const response = await axiosInstance.post('/api/v1/lightenings', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export default createMeeting;
