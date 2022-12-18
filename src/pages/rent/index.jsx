import React, { useContext, useEffect, useRef, useState } from 'react';
import RentOption from '../../components/rent/RentOption';
import RentService from '../../components/rent/RentService';
import RscCaseItem from '../../components/rent/RscCaseItem';
import SubNavigation from '../../components/SubNavigation';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import { mobileContext } from '../../utils/mobileContext';
import * as homeStyle from '../Home/style';
import * as style from './styles';
import AOS from 'aos';

const Rent = () => {
  const pageRef = useRef([]);

  const subNavList = [
    {
      listname: '이용안내',
      height: pageRef.current[0]?.getBoundingClientRect().height,
    },
    {
      listname: '상품안내',
      height: pageRef.current[1]?.getBoundingClientRect().height,
    },
    {
      listname: '보장안내',
      height: pageRef.current[2]?.getBoundingClientRect().height,
    },
    {
      listname: '서비스 안내',
      height: pageRef.current[3]?.getBoundingClientRect().height,
    },
  ];

  const rentList01 = [
    {
      id: 1,
      title: '계약하기',
      desc: '계약에 필요한 구비서류를 제출하고 전자시스템으로 공급 계약을합니다.',
      mobiledesc: '계약에 필요한 구비서류를 제출하고,전자시스템으로 공급 계약을합니다.'
    },
    {
      id: 2,
      title: '앱 설치',
      desc: "구글 Play 스토어에서 '바이크뱅크 차량 공유 앱'을 설치한 후 \n회원가입을 하고 승인이 되면 차량 신청이 가능합니다.",
      mobiledesc: "구글 Play 스토어에서 '바이크뱅크 차량 공유 앱'을 설치한 후 회원가입을 하고 승인이 되면 차량 신청이 가능합니다.",
    },
    {
      id: 3,
      title: '차량신청',
      desc: "바이크뱅크 '차량 공유 앱'을 이용하여 차량 신청이 가능합니다.\n차량 접수시간과 옵션을 확인하시고, 보증금 입금을 꼭 확인해주시기 바랍니다.",
      mobiledesc: "바이크뱅크 '차량 공유 앱'을 이용하여 차량 신청이 가능합니다.차량 접수시간과 옵션을 확인하시고, 보증금 입금을 꼭 확인해주시기 바랍니다.",
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

  const rentList02 = [
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
  const rscCaseList = [
    {
      id: 1,
      title: '횡단보도 보행자 충돌 사고',
      children: [{
        id: 10,
        desc: '2020년 12월 04일 경기도 안산시 단원구 도로에서 라이더가 횡단보도 보행자와 충돌 (적색신호 변경된 시점) 피해자 과실 10%',
        normalPrice: '라이더 부담 금액 \n총 23,411,700원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      }]
    },
    {
      id: 2,
      title: '가로수와 충돌한 사고',
      children: [{
        id: 20,
        desc: '2020년 09월 1일 경기도 부천시 도로에서 역주행하여 주행중 마주오던 차량을 피하려나 가로수와 충돌하여 사망하는 사고',
        normalPrice: '보상금액\n0원',
        RSCprice: '라이더 보상 금액\n50,000,000원',
        isToggle: false,
      }]
    },
    {
      id: 3,
      title: '교차로 신호위반 충돌',
      children: [{
        id: 30,
        desc: '2020년 04월 21일 경기도 부천시 교차로에서 라이더가 신호위반하여 직전하던 차량과 충돌한 사고 (자차 과실 70%)',
        normalPrice: '라이더 부담 금액\n총 59,204,352원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      }]
    },
    {
      id: 4,
      title: '횡단보도 보행자 충돌 사고',
      children: [{
        id: 40,
        desc: '2020년 05월 11일 경기도 의정부시 평화로 소재 도로에서 횡단보도를 보행하던 피해자와 충돌한 사고. (횡단보도 사고) 자차 과실 50%',
        normalPrice: '라이더 부담 금액\n총 19,183,975원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      }]
    },
    {
      id: 5,
      title: '교차로 비접촉 사고',
      children: [{
        id: 50,
        desc: '2020년 08월 30일 서울시 강서구 도로에서 불법 유턴하는 택시를 피하려다 라이더가 넘어지는 비접촉 사고 (자차과실 0%)',
        normalPrice: '라이더 보상 금액\n총 0원',
        RSCprice: '라이더 보상 금액\n9,480,000원',
        isToggle: false,
      }]
    },
    {
      id: 6,
      title: '무단횡단 피해자와 충돌 사고',
      children: [{
        id: 60,
        desc: '2020년 03월 9일 서울시 종로구 이면도로에서 라이더가 무단횡단을 하던 피해자와 충돌한 사고 (자차과실 20%)',
        normalPrice: '라이더 부담 금액\n총 31,769,040원',
        RSCprice: '라이더 부담 금액\n0원',
        isToggle: false,
      }]
    },
  ];
  const rentList04 = [
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

  // 모바일 여부
  const { isMobile } = useContext(mobileContext);

  // 몇번째 탭을 누르고 있는지 알기위한 상태
  const [currentTab, setCurrentTab] = useState(0);
  const [serviceTab, setServiceTab] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1800,
    })
  }, [])

  return (
    <>
      {/* 공통 헤더부분 */}
      <SubTitleSection title="렌트상품" />
      <SubNavigation pageRef={pageRef} navlist={subNavList} />

      {/* 01. 렌트이용안내 */}

      <homeStyle.Section
        padding={isMobile ? "55px 0 100px 0" : "70px 0 220.5px 0"}
        ref={(el) => (pageRef.current[0] = el)}
      >
        <homeStyle.PageWidth>
          <TitleList
            number="01"
            subtitle="렌트 이용 안내"
            bold={!isMobile && "계약부터 신청까지 간편하게 이용하세요."}
            desc1="*배달업 사업자전용"
            descright
          />
          {!isMobile && <div className="rentImg" data-aos="fade-up" data-aos-duration="1800">
            <img src="/images/rent_01.png" alt="렌트 이미지" />
          </div>
          }
          <style.RentList isMobile={isMobile} data-aos="fade-up" data-aos-duration="1800" >
            {rentList01.map((item) => (
              <li key={item.id}>
                <p className="number">{item.id}</p>
                <p>
                  <span>{item.title}</span>
                  <br />
                  {isMobile ? item.mobiledesc : item.desc}
                </p>
              </li>
            ))}
          </style.RentList>
          <homeStyle.Button
            color={isMobile ? "#fff" : "#f8f8f8"}
            background={isMobile ? "#999" : "#434343"}
            isCenter={!isMobile}
            padding={isMobile ? '12px 0' : '19px 79px'}
            maxWidth={isMobile && '180px'}
          >
            이용문의
          </homeStyle.Button>
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 02. 상품안내 */}

      <homeStyle.Section
        padding={isMobile ? "55px 0 100px 0" : "99px 0 196px 0"}
        ref={(el) => (pageRef.current[1] = el)}
        background={isMobile && '#f8f8f8'}
      >
        <homeStyle.PageWidth gap={isMobile && '0'}>
          <TitleList
            number="02"
            subtitle="상품 안내"
            bold="옵션에 대해 알려드립니다."
            desc1="*상품 종류 및 보험 연령에 따라 요금이 변경됩니다."
          />
          {/* 모바일 유무에 따른 화면배치 변경 */}
          {isMobile ? (
            <RentOption data-aos="fade-up" />
          ) : (
            <>
              <style.RentOptionList data-aos="fade-up" data-aos-duration="1800">
                {rentList02.map((item) => (
                  <li
                    key={item.id}
                    className={currentTab === item.id ? 'active' : ''}
                    onClick={() => setCurrentTab(item.id)}
                  >
                    {item.title}
                  </li>
                ))}
              </style.RentOptionList>
              <style.RnetOptionCont data-aos="fade-up" data-aos-duration="1800">
                <img src={rentList02[currentTab].imgUrl} alt="렌트이미지" />
              </style.RnetOptionCont>
            </>
          )}
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 03. 사고보장 안내 */}

      <homeStyle.Section
        padding={isMobile ? "55px 0 0 0" : "99px 0 170px 0"}
        ref={(el) => (pageRef.current[2] = el)}
      >
        <homeStyle.PageWidth>
          <TitleList
            number="03"
            subtitle="사고 보장 안내"
            bold="바이크뱅크의 RCS (Rider Care System)"
            desc1="바이크뱅크는 RCS를 통해 일 평균 30건의"
            desc2="크고 작은 배달이륜차 사고를 관리하고 있습니다."
          />
          <style.RcsWrap>
            {/* RSC 사고 보장 안내 시작 */}
            <style.RscCont data-aos="fade-up" data-aos-duration="1800" data-aos-delay="0">
              <img src="/images/rcs_img_01.png" alt="RSC 이미지" />
              <div>
                <p>횡단보도 보행자 충돌 사고</p>
                <p>경상남도 양산시 서창동 2차선 도로에서 라이더가<br />
                  횡단보도를 보행하던 피해자와 충돌한 사고<br />
                  자차 과실 100% / 피해자 상해등급 1급 / 후유장애 5급</p>
                <p>2020년 05월 19일</p>
              </div>
            </style.RscCont>
            <style.RscSection>
              <style.RscDesc data-aos="fade-up" data-aos-duration="1800" data-aos-delay="150">
                <p>일반 책임보험 차량 이용시</p>
                <p className="bold">
                  라이더 부담 금액 <br />총 74,144,696원
                </p>
                {isMobile ? <p>&#42;벌금 라이더 부담</p> : <p>&#60;벌금 라이더 부담&#62;</p>}
              </style.RscDesc>
              <style.RscDesc data-aos="fade-up" data-aos-duration="1800" data-aos-delay="150">
                <p>바이크뱅크 RCS 차량 이용시</p>
                <p className="primarybold">
                  양산시 김OO 지점장 부담 금액
                  <br />0 원
                </p>
                {isMobile ? <p>&#42;벌금 라이더 부담</p> : <p>&#60;벌금 라이더 부담&#62;</p>}
              </style.RscDesc>
            </style.RscSection>
          </style.RcsWrap>
        </homeStyle.PageWidth>
      </homeStyle.Section>
      {/* rsc 보장 범위 시작 */}
      <homeStyle.Section background={isMobile ? "#fff" : "#f8f8f8"} padding={isMobile ? "0 0 150px 0" : "104.5px 0 185.5px 0"}>
        <homeStyle.PageWidth>
          {isMobile ? <TitleList noneNum subtitle="RCS 보장 범위" /> : <TitleList noneNum nonSubtitle noDesc bold="RCS 보장 범위" />}
          {!isMobile && <p className="rscdesc">&lt;남자 30세 이상 유상보험 기준 비교&gt;</p>}
        </homeStyle.PageWidth>
        <homeStyle.Area>
          {/* 모바일 유무에 따른 이미지 & 설명 변경 */}
          {isMobile ? (
            <>
              <img src="/images/mobile_rent_rcs_02.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
              <p className='rscdesc'>책임보험의 보상범위를 확대하여<br />
                <span>대인 무한, 대물 2억, 상해보험</span>까지 보장</p>
              <img src="/images/mobile_rent_rcs_03.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
              <img src="/images/mobile_rent_rcs_04.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
            </>
          ) : (
            <>
              <img src="/images/rcs_img_02.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
              <img src="/images/rcs_img_03.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
            </>
          )}
          <homeStyle.Button
            background={isMobile ? "#999999" : "#434343"}
            color="#fff"
            maxWidth="250px"
            padding={isMobile && '12px 37px'}
            mb="0"
          >
            보장 상세내용 확인
          </homeStyle.Button>
        </homeStyle.Area>
      </homeStyle.Section>
      <homeStyle.Section padding={isMobile ? "0 0 100px 0" : "126.5px 0 190px 0"}>
        <homeStyle.PageWidth>
          {/* 실제 보장사례 토글 메뉴 */}
          <TitleList noneNum noDesc subtitle='실제 보장사례' />
          <style.RscCaseList data-aos="fade-up" data-aos-duration="1800" >
            {rscCaseList.map(item => (
              <RscCaseItem item={item} key={item.id} />
            ))}
          </style.RscCaseList>
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 04. 렌트차 서비스 안내 */}

      <homeStyle.Section
        padding={isMobile ? "55px 0 100px 0" : "99px 0 100px 0"}
        background={isMobile && '#f8f8f8'}
        ref={(el) => (pageRef.current[3] = el)}
      >
        <homeStyle.PageWidth>
          <TitleList number="04" bold="렌트차 서비스 안내" />
          {isMobile ? (
            <RentService />
          ) : (
            <React.Fragment >
              <style.RentOptionList width="50%" data-aos="fade-up" data-aos-duration="1800" >
                {rentList04.map((item) => (
                  <li
                    key={item.id}
                    className={item.id === serviceTab ? 'active' : ''}
                    onClick={() => setServiceTab(item.id)}
                  >
                    {item.title}
                  </li>
                ))}
              </style.RentOptionList>
              <style.RnetOptionCont data-aos="fade-up" data-aos-duration="1800" >
                <img src={rentList04[serviceTab].imgUrl} alt="렌트 서비스 이미지" />
              </style.RnetOptionCont>
            </React.Fragment>
          )}
        </homeStyle.PageWidth>
      </homeStyle.Section>
    </>
  );
};

export default Rent;
