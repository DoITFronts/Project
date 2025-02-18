export type MeetingInfo = {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  datetime: string;
  summary: string;
  isLiked: boolean;
  maxParticipants: number;
  currentParticipants: number;
};

export type Participant = {
  id: string;
  name: string;
  profileImage: string;
};

export type Detail = {
  title: string;
  description: string;
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
  details: Detail;
  reviews: Review[];
};
