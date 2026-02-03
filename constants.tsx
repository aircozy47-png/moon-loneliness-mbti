
import { Question, LonelinessType, AxisType } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    axis: AxisType.IE,
    text: "외로움이 느껴질 때, 나는 주로 어떤 생각이 드나요?",
    options: [
      { label: "혼자만의 시간이 더 필요하고, 스스로를 보살펴야겠다.", value: "I" },
      { label: "누구라도 좋으니 곁에 사람이 있었으면 좋겠다.", value: "E" }
    ]
  },
  {
    id: 2,
    axis: AxisType.AR,
    text: "외로울 때 나의 주된 행동은?",
    options: [
      { label: "유튜브나 넷플릭스를 보며 생각을 잠시 멈춘다.", value: "A" },
      { label: "친구에게 연락하거나 SNS를 보며 소통을 시도한다.", value: "R" }
    ]
  },
  {
    id: 3,
    axis: AxisType.CT,
    text: "나의 외로움은 어떤 주기로 찾아오나요?",
    options: [
      { label: "늘 잔잔하게 밑바닥에 깔려있는 느낌이다.", value: "C" },
      { label: "어떤 사건이나 분위기에 따라 갑자기 찾아왔다 사라진다.", value: "T" }
    ]
  },
  {
    id: 4,
    axis: AxisType.ND,
    text: "언제 가장 마음이 텅 빈 것처럼 느껴지나요?",
    options: [
      { label: "모두가 잠든 고요한 새벽이나 늦은 밤", value: "N" },
      { label: "북적이는 사람들 속에서 나만 겉도는 것 같은 낮", value: "D" }
    ]
  },
  {
    id: 5,
    axis: AxisType.IE,
    text: "사람들과 즐겁게 놀고 난 후의 기분은?",
    options: [
      { label: "즐거웠지만 기력이 소진되어 빨리 집에 가고 싶다.", value: "I" },
      { label: "집에 돌아가는 길에 갑자기 더 큰 공허함이 밀려온다.", value: "E" }
    ]
  },
  {
    id: 6,
    axis: AxisType.AR,
    text: "누군가 '힘든 일 있어?'라고 물어보면?",
    options: [
      { label: "부담스러워서 적당히 둘러대고 대화를 피한다.", value: "A" },
      { label: "기다렸다는 듯이 내 감정을 털어놓으며 위로받고 싶다.", value: "R" }
    ]
  },
  {
    id: 7,
    axis: AxisType.CT,
    text: "나에게 외로움이란?",
    options: [
      { label: "평생을 함께 걸어가야 할 그림자 같은 것", value: "C" },
      { label: "컨디션이 안 좋거나 운이 나쁠 때 찾아오는 불청객", value: "T" }
    ]
  },
  {
    id: 8,
    axis: AxisType.ND,
    text: "주말 오후 2시, 약속 없이 집에 있다면?",
    options: [
      { label: "낮잠을 자거나 책을 보며 평화롭게 보낸다.", value: "N" },
      { label: "창밖의 밝은 햇살이 나를 더 고립시키는 기분이다.", value: "D" }
    ]
  },
  {
    id: 9,
    axis: AxisType.IE,
    text: "내가 꿈꾸는 완벽한 휴식은?",
    options: [
      { label: "방해받지 않는 나만의 동굴에서의 시간", value: "I" },
      { label: "마음이 잘 맞는 소수의 사람들과의 따뜻한 대화", value: "E" }
    ]
  },
  {
    id: 10,
    axis: AxisType.AR,
    text: "외로움을 잊기 위해 주로 하는 것은?",
    options: [
      { label: "게임, 청소, 공부 등 무언가에 몰두해서 잊으려 한다.", value: "A" },
      { label: "오래전 알고 지낸 지인에게 안부 문자를 보낸다.", value: "R" }
    ]
  },
  {
    id: 11,
    axis: AxisType.CT,
    text: "외로움의 깊이가 어떠한가요?",
    options: [
      { label: "깊고 아득해서 어디가 끝인지 모르겠다.", value: "C" },
      { label: "상황에 따라 얕았다가 깊어지는 등 변화가 크다.", value: "T" }
    ]
  },
  {
    id: 12,
    axis: AxisType.ND,
    text: "어둠이 내려앉을 때 드는 생각은?",
    options: [
      { label: "감성이 예민해지며 온갖 우울한 상상이 꼬리에 꼬리를 문다.", value: "N" },
      { label: "드디어 하루가 끝났다는 안도감과 함께 내일의 고독을 걱정한다.", value: "D" }
    ]
  }
];

export const LONELINESS_TYPES: Record<string, LonelinessType> = {
  IACN: { code: 'IACN', name: '깊은 밤의 회피자', emoji: '🌙', description: '새벽 3시 넷플릭스 애청자. 혼자 있고 싶은 마음과 외로운 감정 사이에서 방황합니다.', group: 'IA' },
  IACD: { code: 'IACD', name: '낮에도 외로운 은둔자', emoji: '🏠', description: '주말 내내 집 안에만 머물며, 밝은 대낮에도 멍하니 고독을 씹는 스타일입니다.', group: 'IA' },
  IATN: { code: 'IATN', name: '심야 도피형', emoji: '🍺', description: '갑자기 찾아오는 밤의 외로움을 술이나 야식으로 달래며 도망치듯 잠을 청합니다.', group: 'IA' },
  IATD: { code: 'IATD', name: '일시적 내향형', emoji: '☁️', description: '가끔 컨디션에 따라 혼자일 때 외로움을 느끼지만, 금방 털어내기도 합니다.', group: 'IA' },
  
  IRCN: { code: 'IRCN', name: '관계 갈망 심야러', emoji: '💌', description: '내향적이지만 마음 깊은 곳에선 연결을 원합니다. 밤마다 누군가의 연락을 기다리곤 하죠.', group: 'IR' },
  IRCD: { code: 'IRCD', name: '낮에 외로운 내향인', emoji: '☕', description: '점심을 혼자 먹는 시간이나 출근길, 사람들 틈에서 느끼는 고독감이 유독 큽니다.', group: 'IR' },
  IRTN: { code: 'IRTN', name: '심야 연결 갈망', emoji: '📱', description: '새벽만 되면 왠지 모를 용기가 생겨 누군가에게 메시지를 보낼까 말까 고민합니다.', group: 'IR' },
  IRTD: { code: 'IRTD', name: '순간 내향 외로움', emoji: '🌸', description: '평소엔 괜찮다가 특정 장소나 노래를 들을 때만 잠깐씩 고독해지는 유형입니다.', group: 'IR' },

  EACN: { code: 'EACN', name: '외향적 회피자', emoji: '🎉', description: '사람들 사이에서 가장 밝게 웃지만, 모임이 끝나면 누구보다 큰 공허함을 느낍니다.', group: 'EA' },
  EACD: { code: 'EACD', name: '낮에 외로운 외향인', emoji: '🍻', description: '바쁜 일과 중에도 문득문득 "내가 여기서 뭐 하고 있나" 하는 근원적 허무함이 찾아옵니다.', group: 'EA' },
  EATN: { code: 'EATN', name: '파티 후 우울', emoji: '🎵', description: '신나게 놀고 들어온 금요일 밤, 방 안의 정적이 유독 차갑게 느껴지는 스타일입니다.', group: 'EA' },
  EATD: { code: 'EATD', name: '순간 외향 외로움', emoji: '✨', description: '활발하게 지내다가도 아주 가끔, "진짜 내 편은 누구지?" 하는 의문과 함께 외로워집니다.', group: 'EA' },

  ERCN: { code: 'ERCN', name: '심야 사교형', emoji: '🌃', description: '밤에 누군가와 통화를 하거나 대화를 나누지 않으면 잠들기 힘든 관계 의존형입니다.', group: 'ER' },
  ERCD: { code: 'ERCD', name: '낮 사교형 외로움', emoji: '☀️', description: '약속이 없는 날에는 불안감을 느낍니다. 끊임없이 사회적 연결을 확인해야 안심합니다.', group: 'ER' },
  ERTN: { code: 'ERTN', name: '심야 관계 의존', emoji: '💬', description: '밤마다 감정적으로 격해지며 타인에게 의지하고 싶어 하지만, 아침이 되면 무안해지기도 합니다.', group: 'ER' },
  ERTD: { code: 'ERTD', name: '순간 외향 연결', emoji: '🎈', description: '잠깐 외로움을 느끼더라도 빠르게 친구를 부르거나 밖으로 나가 기분을 회복합니다.', group: 'ER' },
};
