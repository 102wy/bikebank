export const rentList01 = [
  {
    id: 1,
    title: '계약하기',
    desc: '계약에 필요한 구비서류를 제출하고 전자시스템으로 공급 계약을합니다.',
    mobiledesc:
      '계약에 필요한 구비서류를 제출하고,전자시스템으로 공급 계약을합니다.',
  },
  {
    id: 2,
    title: '앱 설치',
    desc: "구글 Play 스토어에서 '바이크뱅크 차량 공유 앱'을 설치한 후 \n회원가입을 하고 승인이 되면 차량 신청이 가능합니다.",
    mobiledesc:
      "구글 Play 스토어에서 '바이크뱅크 차량 공유 앱'을 설치한 후 회원가입을 하고 승인이 되면 차량 신청이 가능합니다.",
  },
  {
    id: 3,
    title: '차량신청',
    desc: "바이크뱅크 '차량 공유 앱'을 이용하여 차량 신청이 가능합니다.\n차량 접수시간과 옵션을 확인하시고, 보증금 입금을 꼭 확인해주시기 바랍니다.",
    mobiledesc:
      "바이크뱅크 '차량 공유 앱'을 이용하여 차량 신청이 가능합니다.차량 접수시간과 옵션을 확인하시고, 보증금 입금을 꼭 확인해주시기 바랍니다.",
  },
  {
    id: 4,
    title: '차량수령',
    desc: '지정된 하차 장소에서 차량을 확인해주세요.',
    mobiledesc: '지정된 하차 장소에서 차량을 확인해주세요.',
  },
  {
    id: 5,
    title: '이용하기',
    desc: '차량 수령 후 바로 이용이 가능합니다.',
    mobiledesc: '차량 수령 후 바로 이용이 가능합니다.',
  },
];

export const rentList02 = [
  {
    id: 0,
    title: '차량 기종',
    imgUrl: '/images/rent_tab01_01.png',
  },
  {
    id: 1,
    title: '렌트 종류',
    imgUrl: '/images/rent_tab01_02.png',
  },
  {
    id: 2,
    title: '인수 여부',
    imgUrl: '/images/rent_tab01_03.png',
  },
  {
    id: 3,
    title: '보험 연령',
    imgUrl: '/images/rent_tab01_04.png',
  },
];

export const rentList04 = [
  {
    id: 0,
    title: '소모품 무상 교체 항목',
    imgUrl: '/images/rent_service_01.png',
  },
  {
    id: 1,
    title: '사고 발생 시 서비스 지원 항목',
    imgUrl: '/images/rent_service_02.png',
  },
];

export const rscCaseList = [
  {
    id: 1,
    title: '횡단보도 보행자 충돌 사고',
    children: [
      {
        id: 10,
        desc: '2020년 12월 04일 경기도 안산시 단원구 도로에서 라이더가 횡단보도 보행자와 충돌 (적색신호 변경된 시점) 피해자 과실 10%',
        normalPrice: '라이더 부담 금액 \n총 23,411,700원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      },
    ],
  },
  {
    id: 2,
    title: '가로수와 충돌한 사고',
    children: [
      {
        id: 20,
        desc: '2020년 09월 1일 경기도 부천시 도로에서 역주행하여 주행중 마주오던 차량을 피하려나 가로수와 충돌하여 사망하는 사고',
        normalPrice: '보상금액\n0원',
        RSCprice: '라이더 보상 금액\n50,000,000원',
        isToggle: false,
      },
    ],
  },
  {
    id: 3,
    title: '교차로 신호위반 충돌',
    children: [
      {
        id: 30,
        desc: '2020년 04월 21일 경기도 부천시 교차로에서 라이더가 신호위반하여 직전하던 차량과 충돌한 사고 (자차 과실 70%)',
        normalPrice: '라이더 부담 금액\n총 59,204,352원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      },
    ],
  },
  {
    id: 4,
    title: '횡단보도 보행자 충돌 사고',
    children: [
      {
        id: 40,
        desc: '2020년 05월 11일 경기도 의정부시 평화로 소재 도로에서 횡단보도를 보행하던 피해자와 충돌한 사고. (횡단보도 사고) 자차 과실 50%',
        normalPrice: '라이더 부담 금액\n총 19,183,975원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      },
    ],
  },
  {
    id: 5,
    title: '교차로 비접촉 사고',
    children: [
      {
        id: 50,
        desc: '2020년 08월 30일 서울시 강서구 도로에서 불법 유턴하는 택시를 피하려다 라이더가 넘어지는 비접촉 사고 (자차과실 0%)',
        normalPrice: '라이더 보상 금액\n총 0원',
        RSCprice: '라이더 보상 금액\n9,480,000원',
        isToggle: false,
      },
    ],
  },
  {
    id: 6,
    title: '무단횡단 피해자와 충돌 사고',
    children: [
      {
        id: 60,
        desc: '2020년 03월 9일 서울시 종로구 이면도로에서 라이더가 무단횡단을 하던 피해자와 충돌한 사고 (자차과실 20%)',
        normalPrice: '라이더 부담 금액\n총 31,769,040원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      },
    ],
  },
];

export const rentOptionList01 = [
  {
    imgUrl: '/images/mobile_rent_bike_01.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_02.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_03.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_04.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_05.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_06.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_07.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_08.png',
  },
  {
    imgUrl: '/images/mobile_rent_bike_09.png',
  },
];

export const rentOptionList02 = [
  {
    imgUrl: '/images/mobile_rent_kind_01.png',
    title: '신 차',
    desc: '신차와 보험상품을 결합한 렌트 상품',
  },
  {
    imgUrl: '/images/mobile_rent_kind_02.png',
    title: '중고차',
    desc: '비교적 저렴한 가격의 중고차 렌트 상품',
  },
  {
    imgUrl: '/images/mobile_rent_kind_03.png',
    title: '만기 후 연장',
    desc: '1년 계약 종료 후 타던 차량을 연장 계약',
  },
  {
    imgUrl: '/images/mobile_rent_kind_04.png',
    title: '반납 후 재신청',
    desc: '1년 계약 종료 차량 반납 후 신차 재신청',
  },
];

export const rentOptionList03 = [
  {
    imgUrl: '/images/mobile_rent_return_01.png',
    title: '반납형',
  },
  {
    imgUrl: '/images/mobile_rent_return_02.png',
    title: '인수형',
  },
];

export const rentOptionList04 = [
  {
    imgUrl: '/images/mobile_rent_age_01.png',
    title: '전연령',
  },
  {
    imgUrl: '/images/mobile_rent_age_02.png',
    title: '만 19세 이상',
  },
  {
    imgUrl: '/images/mobile_rent_age_03.png',
    title: '만 21세 이상',
  },
  {
    imgUrl: '/images/mobile_rent_age_04.png',
    title: '만 24세 이상',
  },
  {
    imgUrl: '/images/mobile_rent_age_05.png',
    title: '만 26세 이상',
  },
  {
    imgUrl: '/images/mobile_rent_age_06.png',
    title: '만 30세 이상',
  },
  {
    imgUrl: '/images/mobile_rent_age_07.png',
    title: '만 24세 이상',
  },
];
