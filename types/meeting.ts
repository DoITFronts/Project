export type MeetingInfo = {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  datetime: string;
  summary: string;
  description: string;
  isLiked: boolean;
  maxParticipants: number;
  currentParticipants: number;
};

export type Participant = {
  id: string;
  name: string;
  profileImage: string;
};

export type Review = {
  id: string;
  writer: string;
  profileImage: string;
  content: string;
  date: string;
  rating: number;
};

export type MeetingDetail = {
  info: MeetingInfo;
  participants: Participant[];
  details: string[];
  reviews: Review[];
};
