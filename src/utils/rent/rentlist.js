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

export const rentInsuList = [
  {
    id: 1,
    title: '상해사망 5천만원',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 인해 사망한 경우, 사망보험금 5, 000만원을 보상합니다.',
  },
  {
    id: 2,
    title: '상해 후유장해 5천만원',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 장해상태가 된 경우, 장해지급률에 따라 5, 000만원 한도로 보상합니다.',
  },
  {
    id: 3,
    title: '상해 입원일당 3만원',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 입원하여 치료를 받은 경우 1일째 입원일부터 입원 1일당 3만원을 입원일당으로 지급합니다. (180일 한도) ',
  },
  {
    id: 4,
    title: '골절진단비 30만원',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 인해 골절 진단 확정된 경우 골절진단비(치아파절제외) 30만원을 지급합니다.\n단, 동일한 상해를 직접적인 원인으로 인하여 복합골절이 발생한 경우에는 1회에 한하여 지급합니다.',
  },
  {
    id: 5,
    title: '골절수술비 100만원',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 인해 골절을 입고 치료를 직접적인 목적으로 수술을 받는 때에는 수술 1회당 100만원을 골절수술비로 지급합니다.\n단, 하나의 사고로 두 종류 이상의 골절 수술을 받은 경우에는 하나의 골절수술비만 지급합니다.',
  },
  {
    id: 6,
    title: '벌금',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 타인의 신체에 상해를 입힘으로써 확정판결에 의하여 피보험자가 부담한(납부완료) 벌금액을 1사고당 2, 000만원 한도로 보상합니다.\n\n피보험자가 사고를 내고 도주한 경우(뺑소니) 보상하지 않습니다.',
  },
  {
    id: 7,
    title: '교통사고 처리지원금',
    desc: '-지급사유\n①배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 발생한 교통사고로 타인에게 상해를 입힌 경우 매 사고마다 피해자 각각에 대하여 피보험자가 형사합의금으로 지급한 금액(이하“형사합의금”)을 교통사고처리지원금으로 피보험자에게 지급합니다.\n\n1. 피해자를 사망하게 한 경우\n2. “중대법규위반 교통사고”로 피해자가 42일 이상 치료가 필요하다는 진단을 받은 경우\n3. “일반교통사고”로 피해자에게 중상해를 입혀 형법 제258조 제 1항 또는 제2항, 형법 제 268조, 교통사고처리특례법 제3조에 따라 검찰에 의해 공소제기(이하 “기소”)되거나 자동차손해배상보장법 시행령 제3조에서 정한 상해급수 1급, 2급, 3급에 해당하는 부상을 입힌 경우\n② 다음 각 호 모두에 해당하는 경우, 형사합의금을 피해자에게 직접 지급할 수 있습니다.\n1. 피보험자와 피해자간 형사합의금액을 확정하고, 피해자가 형사합의금액을 별도로 장래에 지급받는 조건으로 형사합의를 한 경우.\n2. 보험회사가 피해자에게 형사합의금을 직접 지급하는 경우 피보험자가 피해자에게 직접 지급되는 보험금(형사합의금)에 상응하는 청구권을 포기한 경우.\n③ 제1항 및 제2항의 교통사고처리지원금은 피해자 1인당 아래의 금액을 한도로 지급합니다.\n1. 제1항 제1호의 경우: 3천만원\n2. 제1항 제2호의 경우',
    desc2:
      '3. 제1항 제3호의 경우: 3천만원\n\n④ 제1항에서 “중대법규위반 교통사고”라 함은 교통사고처리특례법 제3조 제2항에 해당되는 사고를 말합니다.\n⑤ 제1항에서 “일반교통사고”라 함은 급격하고도 우연히 발생한 자동차사고 중에서 중대법규위반 교통사고에 해당되지 않는 사고를 말합니다.\n⑥ 피해자에 의해 형사합의가 이루어지지 않아 공탁을 한 경우에는 피해자의 공탁금 출급 이후 공탁금액을 제1조(지급사유) 제3항의 금액을 한도로 보상합니다.',
    table: 'table',
  },
  {
    id: 8,
    title: '변호사 선임비용',
    desc: '-지급사유\n배달대행 업무 수행 목적으로 바이크뱅크 이륜차 운행 중 교통사고로 타인의 신체에 상해를 입힘으로써 구속영장에 의하여 구속되었거나, 검찰에 의해 공소제기(기소)된 경우 또는 검사에 의해 약식기소 되었으나 법원에 의해 보통의 심판절차인 골판절차에 의해 재판이 진행하게 된 경우에는 변호사선임비용을 부담함으로써 입은 손해(변호사 선임비용)를 500만원 한도로 지급합니다.\n단, 검사에 의해 약식기소 되었으나 피보험자가 법원의 약식명령에 불복하여 정식재판을 청구한 경우에는 보상하지 않습니다.',
  },
  {
    id: 9,
    title: '특이사항',
    desc: '1. 모든 담보는 업무로 인해 이륜차 운행 중 발생한 사고를 조건으로 함. (출퇴근 제외)\n2. 음주, 무면허, 뺑소니, 고의적인 사고는 보상이 불가함.\n3. 청구 시 이륜차 사고를 입증할 수 있는 증빙서류 필요함.',
  },
];
