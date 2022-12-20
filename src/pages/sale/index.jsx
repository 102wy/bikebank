import React, { useContext, useEffect, useRef } from 'react';
import Introduction from '../../components/sale/Introduction';
import MobileOption from '../../components/sale/MobileOption';
import Option from '../../components/sale/Option';
import Service from '../../components/sale/Service';
import SubNavigation from '../../components/SubNavigation';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import { mobileContext } from '../../utils/mobileContext';
import { serviceList } from '../../utils/sale/salelist';
import AOS from 'aos'
import * as homeStyle from '../Home/style';
import * as style from './styles';
import { useParams, useNavigate } from 'react-router-dom';

const Sale = () => {
  // 공통 네비게이션 관리부분
  const pageRef = useRef([]);
  const subNavList = [
    {
      listname: '라인업',
      height: pageRef.current[0]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '보증정책',
      height: pageRef.current[1]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '서비스 안내',
      height: pageRef.current[2]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
  ];
  // 모바일 유무 확인
  const { isMobile } = useContext(mobileContext);

  // url 파라미터값 가져오기
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 스크롤 이벤트를 위한 초기설정
    AOS.init({ duration: 1800 });
    // 경로에 따른 위치설정
    if (id == 1) return window.scrollTo(0, pageRef.current[0]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (id == 2) return window.scrollTo(0, pageRef.current[1]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (id == 3) return window.scrollTo(0, pageRef.current[2]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (!id) return window.scrollTo(0, 0)
  }, [id])

  return <>
    {/* 공통 헤더부분 */}
    <SubTitleSection title="차량판매" />
    <SubNavigation pageRef={pageRef} navlist={subNavList} />

    {/* 01. 완성차 라인업 */}
    <homeStyle.Section padding={isMobile ? '55px 0 0 0' : '100px 0 52px 0'} ref={el => pageRef.current[0] = el}>
      <homeStyle.PageWidth>
        <TitleList
          number="01"
          subtitle="판매용 완성차 라인업"
          bold={!isMobile && "바이크뱅크의 판매 전용 차량을 소개합니다."}
          noDesc
        />
      </homeStyle.PageWidth>
    </homeStyle.Section>

    {/* 컨텐츠 색이 달라서 따로 섹션 나눔 */}
    <homeStyle.Section padding={isMobile ? '0 0 100px 0' : '0 0 168px 0'} background={!isMobile && '#f8f8f8'}>
      <homeStyle.PageWidth>
        <Introduction />
      </homeStyle.PageWidth>
    </homeStyle.Section>

    {/* 02. 보증정책 */}
    <homeStyle.Section padding={isMobile ? '55px 0 100px 0' : '233px 0 103px 0'} ref={el => pageRef.current[1] = el}>
      <homeStyle.PageWidth>
        <TitleList
          number="02"
          subtitle={!isMobile && "보증 정책"}
          bold={isMobile ? "보증 정책" : "안전하고 만족스러운 서비스를 제공하겠습니다."}
          desc1={isMobile ? '안전하고 만족스러운 서비스를 제공하겠습니다.' : '구입하신 차량을 구성하는 각 부품의 제조상 불량이 발생한 경우'}
          desc2={!isMobile && '보증서에 표시된 기간과 조건에 따라 무상수리 서비스를 제공합니다.'}
        />
        {/* 모바일 유무에 따른 화면배치 변경 */}
        {isMobile ? (
          <MobileOption
            title1='제품보증기간'
            desc1='신차 구입 후 부품에 따라 1~2년 이내,<br/>또는 주행거리 10,000~20,000km<br/>(선도래 조건)'
            title2='보증대상부품'
            desc2='모터사이클을 구성하는 모든 부품<br/>(단 소모성 부품 및 유지류는 제외)'
            color='#e1e1e1'
          />
        ) : (
          <>
            <style.OptionList>
              <Option title='제품보증기간' desc='신차 구입 후 부품에 따라 1~2년 이내,<br/>또는 주행거리 10,000~20,000km<br/>(선도래 조건)' margin='0 0 20px 0'
                delay='0'
              />
              <Option title='보증대상부품' desc='모터사이클을 구성하는 모든 부품<br/>(단 소모성 부품 및 유지류는 제외)' margin='0 0 20px 0'
                delay='100'
              />
            </style.OptionList>
          </>
        )}
        <style.Exp>
          * 차량 모델에 따라 보증내용이 다를 수 있습니다.<br />* 신차 구입 후 당사 APP을 통한 신차 등록 시점부터 보증기간이 적용됩니다.<br />(신고필증 등록일자와 상이할 경우, 신고필증 기준)
        </style.Exp>
      </homeStyle.PageWidth>
    </homeStyle.Section >
    {/* 컨텐츠 색이 달라서 따로 섹션 나눔 */}
    <homeStyle.Section padding={isMobile ? '50px 0 83px 0' : '132px 0'} background='#f8f8f8' >
      <homeStyle.PageWidth>
        <TitleList
          subtitle={isMobile && "관리 어플리케이션"}
          bold={!isMobile && "관리 어플리케이션"}
          desc1='전용 APP을 통해 고객님에게 차량 관리 서비스를 제공하고 있습니다.'
          desc2={!isMobile && '차량 등록을 완료하신 후 판매점에 보증 등록 여부를 확인하고'}
          desc3={!isMobile && '다양한 혜택과 쿠폰 그리고 맞춤형 서비스를 받아보세요.'}
          noneNum
          nonSubtitle
        />
        {isMobile ? (
          <MobileOption
            title1='APP 설치 및 등록'
            desc1='신차 구입 후 동봉된 QR코드를 이용하여<br/>APP설치 후 신차 등록'
            title2='등록 혜택'
            desc2='체계적인 차량 관리를 위한 정보 제공과<br/>정기점검 쿠폰 및 무상 오일 교환'
            color='#ffdd6d'
          />
        ) : (
          <style.OptionList>
            <Option title='APP 설치 및 등록' desc='신차 구입 후 동봉된 QR코드를 이용하여<br/>APP설치 후 신차 등록' mb='50px'
              delay='0'
              margin='0 0 50px 0'
            />
            <Option title='등록 혜택' desc='체계적인 차량 관리를 위한 정보 제공과<br/>정기점검 쿠폰 및 무상 오일 교환' mb='50px'
              delay='100'
              margin='0 0 50px 0'
            />
          </style.OptionList>
        )}
        <style.App data-aos="fade-up" data-aos-duration="1800">
          <p>
            편리한 내 차 관리의 시작<br />
            <span>바이크뱅크 멤버쉽 APP</span>
          </p>
          <div className='appcontainer'>
            <button><img src="/images/btn_google.png" alt="구글 앱 버튼" /></button>
            <button><img src="/images/btn_apple.png" alt="애플 앱 버튼" /></button>
          </div>
        </style.App>
      </homeStyle.PageWidth>
    </homeStyle.Section>
    {/* 03. 차량 서비스 안내 */}
    < homeStyle.Section padding={isMobile ? '55px 0 92px 0' : '210px 0 364.5px 0'} ref={el => pageRef.current[2] = el} >
      <homeStyle.PageWidth>
        <TitleList
          number="03"
          subtitle={isMobile && "차량 서비스 안내"}
          bold={!isMobile && "차량 서비스 안내"}
          desc1='고객님께 만족스러운 서비스를 제공하겠습니다.'
          nonSubtitle
        />
        <style.ServiceWrap data-aos="fade-up" data-aos-duration="1800">
          {serviceList.map(item => <Service key={item.id} title={item.title} desc={item.desc} />)}
        </style.ServiceWrap>
        <style.Button onClick={() => navigate(`/customer/2`)}>판매/서비스점 찾기</style.Button>
      </homeStyle.PageWidth>
    </ homeStyle.Section>
  </>
};
export default Sale;