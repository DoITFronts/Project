import { MeetingDetail } from '@/types/meeting';

const mockMeetings: MeetingDetail[] = [
  {
    info: {
      id: '1',
      title: '📖 카공 or 작업 같이 해요!',
      imageUrl: 'https://coen.store/event1.jpg',
      location: 'Seoul',
      datetime: '2025-02-14T18:00:00',
      summary:
        '혼자 하면 집중 안 되고 자꾸 딴짓하게 되는데, 같이 하면 의욕도 생기고 덜 지루하지 않나요?',
      isLiked: false,
      maxParticipants: 10,
      currentParticipants: 6,
    },
    participants: [
      { id: '1', name: '최승은', profileImage: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: '2', name: '김철수', profileImage: 'https://randomuser.me/api/portraits/men/2.jpg' },
    ],
    details: {
      title: '번개에 대해 자세히 알아보세요!',
      description: `
## 📖 카공 or 작업 같이 해요!
혼자 하면 집중 안 되고 자꾸 딴짓하게 되는데, 같이 하면 의욕도 생기고 덜 지루하지 않나요?  
공부든, 작업이든, 독서든 다 좋아요!  
💡 **이런 분들에게 추천해요!**  
- ✅ 혼자서 공부하면 쉽게 지치는 분  
- ✅ 조용한 분위기에서 집중하고 싶은 분  
- ✅ 같이 작업할 동료가 필요한 분  
☕ **모임 장소는 카페에서 진행됩니다.**  
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
    ],
  },
  {
    info: {
      id: '2',
      title: '🎨 디자인 스터디 모임',
      imageUrl: 'https://coen.store/event2.jpg',
      location: 'Busan',
      datetime: '2025-02-20T19:00:00',
      summary: '디자인 작업을 함께 하면서 서로 영감을 나눠봐요!',
      isLiked: true,
      maxParticipants: 8,
      currentParticipants: 5,
    },
    participants: [
      { id: '3', name: '이영희', profileImage: 'https://randomuser.me/api/portraits/women/6.jpg' },
      { id: '4', name: '박민수', profileImage: 'https://randomuser.me/api/portraits/men/7.jpg' },
    ],
    details: {
      title: '디자인 스터디 모임',
      description: `
## 🎨 디자인 스터디 모임
디자인 작업을 함께 하면서 서로 영감을 주고받는 시간!  
🎨 **추천 대상**  
- ✅ UI/UX 디자인을 공부하는 분  
- ✅ 디자인 관련 프로젝트를 진행 중인 분  
- ✅ 서로의 포트폴리오를 공유하고 피드백을 주고 싶은 분  
      `,
    },
    reviews: [
      {
        id: '1',
        writer: '디자인 좋아하는 곰',
        profileImage: 'https://randomuser.me/api/portraits/men/8.jpg',
        content: '정말 유익한 시간이었어요! 다음에도 참여하고 싶어요!',
        date: '2025-02-15',
        count: 3,
      },
    ],
  },
  {
    info: {
      id: '3',
      title: '💻 프론트엔드 개발 스터디',
      imageUrl: 'https://coen.store/event3.jpg',
      location: 'Online',
      datetime: '2025-03-01T10:00:00',
      summary: 'React, Vue, Next.js 등 프론트엔드 기술을 함께 공부해요!',
      isLiked: false,
      maxParticipants: 12,
      currentParticipants: 7,
    },
    participants: [],
    details: {
      title: '프론트엔드 개발 스터디',
      description: `
## 💻 프론트엔드 개발 스터디  
함께 최신 프론트엔드 기술을 공부하는 시간!  
🛠 **공부 내용**  
- ✅ React, Vue, Next.js 등 최신 기술  
- ✅ TypeScript, GraphQL, Zustand 등 활용  
- ✅ 실제 프로젝트를 만들며 실무 감각 익히기  
💻 **Zoom으로 진행됩니다.**  
      `,
    },
    reviews: [],
  },
  {
    info: {
      id: '4',
      title: '🏋🏻‍♂️ 아침 헬스 번개',
      imageUrl: 'https://coen.store/event4.jpg',
      location: 'Seoul',
      datetime: '2025-02-25T06:30:00',
      summary: '운동도 같이 하면 더 재밌고 꾸준히 할 수 있어요!',
      isLiked: true,
      maxParticipants: 15,
      currentParticipants: 10,
    },
    participants: [],
    details: {
      title: '아침 헬스 번개',
      description: `
## 🏋🏻‍♂️ 아침 헬스 번개
새벽에 같이 운동하며 하루를 상쾌하게 시작해봐요!  
💪 **운동 루틴**  
- ✅ 웨이트 + 유산소 1시간  
- ✅ 운동 후 함께 스트레칭  
      `,
    },
    reviews: [],
  },
  {
    info: {
      id: '5',
      title: '🍳 요리 스터디 - 이탈리안 파스타 만들기',
      imageUrl: 'https://coen.store/event5.jpg',
      location: 'Incheon',
      datetime: '2025-03-05T14:00:00',
      summary: '함께 맛있는 파스타를 만들어봐요!',
      isLiked: false,
      maxParticipants: 6,
      currentParticipants: 4,
    },
    participants: [],
    details: {
      title: '요리 스터디',
      description: `
## 🍳 요리 스터디 - 이탈리안 파스타 만들기  
함께 요리하면서 실력을 키우는 시간!  
🍝 **메뉴**  
- ✅ 까르보나라  
- ✅ 알리오 올리오  
- ✅ 봉골레 파스타  
      `,
    },
    reviews: [],
  },
];

export default mockMeetings;
