import React, { useContext, useEffect, useRef, useState } from 'react';
import RentOption from '../../components/rent/RentOption';
import RentService from '../../components/rent/RentService';
import RscCaseItem from '../../components/rent/RscCaseItem';
import SubNavigation from '../../components/SubNavigation';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import { mobileContext } from '../../utils/mobileContext';
import { rentList01, rentList02, rentList04, rscCaseList } from '../../utils/rent/rentlist'
import * as homeStyle from '../Home/style';
import * as style from './styles';
import AOS from 'aos';
import { useNavigate, useParams } from 'react-router-dom';

const Rent = () => {
  // 네비게이션바의 위치를 알아내기위한 ref
  const pageRef = useRef([]);
  const subNavList = [
    {
      listname: '이용안내',
      height: pageRef.current[0]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '상품안내',
      height: pageRef.current[1]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '보장안내',
      height: pageRef.current[2]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '서비스 안내',
      height: pageRef.current[3]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
  ];

  // url 파라미터값 가져오기
  const { id } = useParams();
  // 모바일 여부
  const { isMobile } = useContext(mobileContext);
  // 몇번째 탭을 누르고 있는지 알기위한 상태
  const [currentTab, setCurrentTab] = useState(0);
  const [serviceTab, setServiceTab] = useState(0);
  // url 이동을 위한 변수
  const navigate = useNavigate();


  useEffect(() => {
    // 스크롤 이벤트를 위한 초기설정
    AOS.init({ duration: 1800 });

    // 경로에 따른 위치설정
    if (id == 1) return window.scrollTo(0, pageRef.current[0]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (id == 2) return window.scrollTo(0, pageRef.current[1]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (id == 3) return window.scrollTo(0, pageRef.current[2]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (id == 4) return window.scrollTo(0, pageRef.current[3]?.getBoundingClientRect().top + window.pageYOffset + 100)
    if (!id) return window.scrollTo(0, 0)
  }, [id]);

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

          {/* 웹일때만 이미지 보여줌 */}
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
            onClick={() => navigate('/customer/1')}
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
              <style.RscDesc data-aos="fade-up" data-aos-duration="1800" data-aos-delay="600">
                <p>일반 책임보험 차량 이용시</p>
                <p className="bold">
                  라이더 부담 금액 <br />총 74,144,696원
                </p>
                {isMobile ? <p>&#42;벌금 라이더 부담</p> : <p>&#60;벌금 라이더 부담&#62;</p>}
              </style.RscDesc>
              <style.RscDesc data-aos="fade-up" data-aos-duration="1800" data-aos-delay="1200">
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
            // 모바일일때
            <>
              <img src="/images/mobile_rent_rcs_02.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
              <p className='rscdesc'>책임보험의 보상범위를 확대하여<br />
                <span>대인 무한, 대물 2억, 상해보험</span>까지 보장</p>
              <img src="/images/mobile_rent_rcs_03.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
              <img src="/images/mobile_rent_rcs_04.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
            </>
          ) : (
            // 웹일때
            <>
              <img src="/images/rcs_img_02.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
              <img src="/images/rcs_img_03.png" alt="RSC 보장 범위" data-aos="fade-up" data-aos-duration="1800" />
            </>
          )}
          <homeStyle.Button
            onClick={() => navigate(`/rent/insu`)}
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