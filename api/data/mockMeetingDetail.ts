import { MeetingDetail } from '@/types/meeting';

const mockMeetings: {
  code: number;
  isSuccess: boolean;
  message: string;
  result: { success: boolean; code: number; message: string; data: MeetingDetail };
}[] = [
  {
    code: 200,
    isSuccess: true,
    message: '모임 상세 조회 성공',
    result: {
      success: true,
      code: 4010,
      message: '모임 상세 조회에 성공했습니다.',
      data: {
        id: '1',
        title: '📖 카공 or 작업 같이 해요!',
        category: '스터디',
        imageUrl: 'https://coen.store/event1.jpg',
        location: 'Seoul',
        datetime: '2025-02-14T18:00:00',
        summary:
          '혼자 하면 집중 안 되고 자꾸 딴짓하게 되는데, 같이 하면 의욕도 생기고 덜 지루하지 않나요? 공부든, 작업이든, 독서든 다 좋아요. 중간중간 가벼운 대화도 환영! 우리 같이 카공해요~',
        isLiked: false,
        maxParticipants: 10,
        currentParticipants: 6,
        host: {
          id: '100',
          name: '홍길동',
          profileImage: 'https://randomuser.me/api/portraits/men/10.jpg',
        },
        participants: [
          {
            id: '1',
            name: '최승은',
            profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
          },
          {
            id: '2',
            name: '김철수',
            profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
          },
          {
            id: '3',
            name: '박영희',
            profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
          },
        ],
        details: {
          title: '번개에 대해 자세히 알아보세요!',
          description: `
## 함께하면 더 집중되는 시간! 카공 & 작업 모임
혼자서 공부하거나 작업할 때, 자꾸 딴짓하게 되고 집중이 안 되지 않나요?
함께 모이면 자연스럽게 몰입할 수 있고, 지루함도 덜해요! 💡

### 📍 이런 분들에게 추천해요!
- ✅ 카페에서 혼자 공부하거나 작업하면 쉽게 늘어지는 분
- ✅ 다른 사람과 함께하면 집중력이 더 올라가는 분
- ✅ 공부, 업무, 글쓰기, 디자인, 코딩 등 몰입이 필요한 작업을 하려는 분

### 🕒 모임 진행 방식
- 모임 장소에 도착하면 자유롭게 자리 잡고 작업 시작!
- 필요하면 타이머를 맞춰서 포모도로 기법(25분 집중 + 5분 휴식) 활용 가능
- 대화는 쉬는 시간에만! 작업 시간에는 조용한 분위기 유지 🎧

☕ **장소는 카페에서 진행되며, 음료 주문 후 참여 가능해요!**
각자 할 일을 하면서도 서로 좋은 에너지를 주고받을 수 있는 시간!
즐겁고 생산적인 하루를 함께 만들어봐요. 🚀
          `,
        },
        reviews: [
          {
            id: '1',
            writer: '활기찬 여우',
            profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
            content: '정말 유익한 시간이었어요. 다음에도 참여하고 싶어요!',
            date: '2025-02-10',
            count: 5,
          },
          {
            id: '2',
            writer: '책 읽는 곰',
            profileImage: 'https://randomuser.me/api/portraits/women/5.jpg',
            content: '다들 집중해서 공부하는 분위기가 너무 좋았어요!',
            date: '2025-02-08',
            count: 4,
          },
        ],
      },
    },
  },
];

export default mockMeetings;
