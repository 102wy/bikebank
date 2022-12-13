import React, { useContext, useEffect, useRef } from 'react';
import SubNavigation from '../../components/SubNavigation';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import { Area, PageWidth, Section } from '../Home/style';
import ImgList from '../../components/ImgList';
import * as style from './styles';
import CompanySlide from '../../components/CompanySlide';
import { mobileContext } from '../../utils/mobileContext';
import AOS from 'aos';
const Company = () => {
  const pageRef = useRef([]);

  const subNavList = [
    {
      listname: '바이크뱅크',
      height: pageRef.current[0]?.getBoundingClientRect().top,
    },
    {
      listname: '편리한 기술',
      height: pageRef.current[1]?.getBoundingClientRect().top,
    },
    {
      listname: '이륜차 인프라',
      height: pageRef.current[2]?.getBoundingClientRect().top,
    },
  ];

  const companyList01 = [
    {
      imgsrc: '/images/company_list_01_01.png',
      alt: '주행경험',
      title: '주행경험',
      desc1: '차량 뿐만 아니라 서비스와 인프라까지',
      desc2: '고객의 입장에서 이륜차 주행 경험을',
      desc3: '고민하여 솔루션을 제공하고자 합니다.',
    },
    {
      imgsrc: '/images/company_list_01_02.png',
      alt: '기술과 시스템',
      title: '기술과 시스템',
      desc1: '전자 계약 시스템과 APP을 이용하여',
      desc2: '계약부터 서비스 이용까지 모든 업무가',
      desc3: '편리해질 수 있도록 노력하고 있습니다.',
    },
    {
      imgsrc: '/images/company_list_01_03.png',
      alt: '서비스 인프라',
      title: '서비스 인프라',
      desc1: '고객 중심의 차량 관리와 사고 수리를 어디',
      desc2: '에서나 지원 받으며 모두가 믿고 이용할 수',
      desc3: '있는 서비스를 만들고자 합니다.',
    },
  ];
  const companyList02 = [
    {
      imgsrc: '/images/tech_01.png',
      alt: '편리한 계약',
      title: '편리한 계약',
      desc1: '별도의 방문 없이 공급계약이 가능하며 간단한',
      desc2: '휴대폰 인증으로 전자 계약을 진행할 수 있습니다.',
    },
    {
      imgsrc: '/images/tech_02.png',
      alt: '안전한 인증',
      title: '안전한 인증',
      desc1: '장소 및 시간에 상관없이 계약서 확인이 가능하며',
      desc2: '서명 시점 확인 및 위변조를 방지합니다.',
    },
  ];
  const companyList03 = [
    {
      imgsrc: '/images/tech_02_01.png',
      mobileImg: '/images/mobile_app_01.png',
      alt: '렌트차 신청',
      title: '렌트차 신청',
      desc1: '추가 라이더 모집으로 배달용 오토바이가',
      desc2: '필요할 때 차량 공유 앱을 통해 손쉽게 렌트',
      desc3: '차량을 신청해 보세요.',
      isApp: true,
    },
    {
      imgsrc: '/images/tech_02_02.png',
      mobileImg: '/images/mobile_app_02.png',
      alt: '차량관리',
      title: '차량관리',
      desc1: '정기 점검에서 사고 수리까지 체계적으로',
      desc2: '차량을 관리하는 방법. 믿을 수 있는 보증',
      desc3: '서비스를 제공합니다.',
      isApp: true,
    },
    {
      imgsrc: '/images/tech_02_03.png',
      mobileImg: '/images/mobile_app_03.png',
      alt: '소모품관리',
      title: '소모품관리',
      desc1: '안전한 라이딩을 위해 주기적으로 교환하는',
      desc2: '소모품. 바이크뱅크 소모품 앱을 통해',
      desc3: '가까운 정비점에서 관리받으세요.',
      isApp: true,
    },
  ];

  const mobileCompanyList = [
    {
      imgsrc: '/images/mobile_infra_01.png',
      alt: '차량출고',
      title: '차량출고',
      desc1: '주행이 바로 가능하도록 차량을 세팅하고',
      desc2: '전국 각지로 배송합니다.',
    },
    {
      imgsrc: '/images/mobile_infra_02.png',
      alt: '렌트운영',
      title: '렌트운영',
      desc1: '이륜차를 이용하고 관리하는데 필요한 운영',
      desc2: '업무에 대해 빠르고 정확하게 대응을 진행합니다.',
    },
    {
      imgsrc: '/images/mobile_infra_03.png',
      alt: '소모품교환',
      title: '소모품교환',
      desc1: '배달용 오토바이는 안전한 주행을 위해',
      desc2: '주기적으로 소모품을 교환해줘야 합니다.',
    },
    {
      imgsrc: '/images/mobile_infra_04.png',
      alt: '차량수리',
      title: '차량수리',
      desc1: '전국 서비스망을 통해 차량의 수리를 신속하게',
      desc2: '진행하고 안전하고 편리한 주행을 지원합니다.',
    },
    {
      imgsrc: '/images/mobile_infra_05.png',
      alt: '사고보장',
      title: '사고보장',
      desc1: '보다 안전하게 이륜차를 사용하기 위해서 보험 및',
      desc2: '보장으로 사고에 대비하는 것은 필수적입니다.',
    },
    {
      imgsrc: '/images/mobile_infra_06.png',
      alt: '차량수거',
      title: '차량수거',
      desc1: '사용이 끝난 이륜차를 안전하게 수거하여 필요에',
      desc2: '따라 리사이클 및 파츠별로 분해하게 됩니다.',
    },
  ];

  const { isMobile } = useContext(mobileContext);
  useEffect(() => {
    AOS.init({
      duration: 1800,
    });
  }, []);
  return (
    <>
      <SubTitleSection title="회사소개" />
      <SubNavigation pageRef={pageRef} navlist={subNavList} />
      <Section
        padding={isMobile ? '55px 0 99.5px 0' : '70px 0 143px 0'}
        ref={(el) => (pageRef.current[0] = el)}
      >
        <PageWidth>
          {isMobile ? (
            <TitleList
              number="01"
              subtitle="끊임없이 진화하는"
              bold=" 종합 이륜차 솔루션 기업"
              bold2="바이크뱅크"
              isMobile
              noDesc
            />
          ) : (
            <TitleList
              number="01"
              subtitle="바이크뱅크"
              bold="끊임없이 진화하는 종합 이륜차 솔루션 기업"
              desc1="바이크뱅크는 빠르게 변화하는 퍼스널 모빌리티 환경에서"
              desc2="문제점을 발견하여 솔루션을 제안합니다."
            />
          )}
          <style.CompanyListWrap>
            {companyList01.map((item, index) => (
              <ImgList
                imgsrc={item.imgsrc}
                alt={item.alt}
                title={item.title}
                desc1={item.desc1}
                desc2={item.desc2}
                desc3={item.desc3}
                aosDelay={index * 100}
              />
            ))}
          </style.CompanyListWrap>
        </PageWidth>
      </Section>
      <Section
        background={isMobile ? '#fff' : '#f8f8f8'}
        padding={isMobile ? '49px 0 101.5px 0' : '0 0 145.5px 0'}
      >
        <PageWidth>
          <TitleList
            bold="핵심 경쟁력"
            desc1="전문성과 업계 경험을 바탕으로"
            desc2="고객에게 종합 이륜차 솔루션을 제공합니다."
          />
          <img
            src={
              isMobile
                ? 'images/mobile_company_infra.png'
                : 'images/competition.png'
            }
            alt="핵심 경쟁력"
            className="infraImg"
            data-aos="fade-up"
          />
          <style.CompetitionList>
            <li>
              <p>인프라 & 네트워크</p>
              <p>전국 360여 개의 서비스 네트워크와</p>
              <p>직영점을 보유하고 있습니다.</p>
            </li>
            <li>
              <p>이륜차 전문성</p>
              <p>국내 최고 수준의 이륜차 전문 인력으로</p>
              <p>제조, 물류, 정비, 운영, 영업 등 분야별 전문가와 함께합니다.</p>
            </li>
            <li>
              <p>RCS 조직</p>
              <p>보험보장 전담 조직을 통하여</p>
              <p>이륜차에 최적화 된 RCS 보장을 제공합니다.</p>
            </li>
            <li>
              <p>운영 노하우</p>
              <p>전국 파트너를 대상으로 주문부터 관리까지</p>
              <p>다양한 노하우를 보유하고 있습니다.</p>
            </li>
          </style.CompetitionList>
        </PageWidth>
      </Section>
      <Section
        backgroundImg="url('/images/challenge_bg.png')"
        padding={isMobile ? '50px 0 100.5px 0' : '18px 0 159.5px 0'}
      >
        <PageWidth>
          <TitleList bold="도전과 성과" />
          <style.ChallengeList>
            <li data-aos="fade-up" data-aos-delay="0">
              <p>2021.</p>
              <p>매출 700억 달성</p>
              <p>서비스 네트워크 300점 돌파성</p>
              <p>딜버와 업무협약 체결</p>
              <p>콜25와 업무협약 체결</p>
              <p>만나플러스와 업무협약 체결</p>
              <p>디플러스와 업무협약 체결</p>
              <p>푸드바이크와 업무협약 체결</p>
              <p>고고라이더와 업무협약 체결</p>
              <p>예스런과 업무협약 체결</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="150">
              <p>2020.</p>
              <p>매출 400억 달성</p>
              <p>시장 점유율 1위 달성</p>
              <p>DB손해보험 업무협약 체결</p>
              <p>DB자동차보험손해사정 업무협약 체결</p>
              <p>바로고와 업무협약 체결</p>
              <p>모아콜과 업무협약 체결</p>
              <p>고고로 전기이륜차 충전스테이션 테스트 시작</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <p>2019.</p>
              <p>생각대로에 렌트차량 공급</p>
              <p>배달 맞춤형 이륜차 렌트상품 출시</p>
              <p>바이크뱅크 법인 설립</p>
            </li>
          </style.ChallengeList>
        </PageWidth>
      </Section>
      <Section
        padding={isMobile ? '55px 0 100px 0' : '219px 0 166px 0'}
        ref={(el) => (pageRef.current[1] = el)}
      >
        <PageWidth>
          {isMobile ? (
            <TitleList
              number="02"
              bold="비즈니스를 변화시키는"
              bold2="편리한 기술"
              isMobile
              noDesc
            />
          ) : (
            <TitleList
              number="02"
              subtitle="비즈니스를 변화시키는"
              bold="편리한 기술"
              desc1="서면으로 계약하는 불편함은 해소하고"
              desc2="휴대폰 인증으로 안전하고 편리하게 계약을 진행하세요."
            />
          )}
          <style.CompanyListWrap>
            {companyList02.map((item, index) => (
              <ImgList
                key={index}
                width50
                imgsrc={item.imgsrc}
                alt={item.alt}
                title={item.title}
                desc1={item.desc1}
                desc2={item.desc2}
                aosDelay={index * 150}
              />
            ))}
          </style.CompanyListWrap>
        </PageWidth>
      </Section>
      <Section
        padding={isMobile ? '50px 0 80.5px 0' : '176.5px 0 156.5px 0'}
        background="#f8f8f8"
      >
        <PageWidth>
          {isMobile ? (
            <TitleList
              isMobile
              noneNum
              bold="차량 신청과 관리"
              desc1="플레이 스토어에서 APP을 다운받으세요."
            />
          ) : (
            <TitleList
              noneNum
              nonSubtitle
              bold="차량 신청과 관리"
              desc1="플레이 스토어에서 APP을 다운받으세요."
              desc2="별도의 절차 없이 어디서나 차량 신청 및 관리가 가능합니다."
            />
          )}
          <style.CompanyListWrap>
            {companyList03.map((item, index) => (
              <ImgList
                key={index}
                imgsrc={item.imgsrc}
                alt={item.alt}
                title={item.title}
                desc1={item.desc1}
                desc2={item.desc2}
                desc3={item.desc3}
                isApp={item.isApp}
                mobileImg={item.mobileImg}
                isMobile={isMobile}
                aosDelay={index * 100}
              />
            ))}
          </style.CompanyListWrap>
        </PageWidth>
      </Section>
      {isMobile ? (
        <Section padding="52px 0 155px 0">
          <PageWidth>
            <TitleList
              noneNum
              bold="차량 공급 시스템"
              desc1="고객에게 빠르게 차량을 공급하기 위하여"
              desc2="차량 신청 후 출고까지 최적화 된 시스템을"
              desc3="구축하였습니다."
            />
          </PageWidth>
          <img
            data-aos="fade-up"
            src="/images/mobile_company_01.png"
            alt="차량 공급 시스템"
            className="imgWidth100"
            style={{ marginTop: '30px' }}
          />
        </Section>
      ) : (
        <>
          <Section padding={isMobile ? '52px 0 100px 0' : '103px 0 189px 0'}>
            <PageWidth>
              <TitleList
                noneNum
                nonSubtitle
                bold="차량 공급 시스템"
                desc1="고객에게 빠르게 차량을 공급하기 위하여"
                desc2="차량 신청 후 출고까지 최적화 된 시스템을 구축하였습니다."
              />
              <img
                data-aos="fade-up"
                src="/images/tech_03_01.png"
                alt="차량 공급 시스템"
                className="imgWidth100"
              />
            </PageWidth>
          </Section>
        </>
      )}
      <Section
        padding={isMobile ? '55px 0 150px 0' : '103px 0 215px 0'}
        ref={(el) => (pageRef.current[2] = el)}
      >
        <PageWidth>
          {isMobile ? (
            <>
              <TitleList
                number="03"
                subtitle="출고부터 수거까지"
                bold="준비된 이륜차 인프라"
                desc1="생활 속 편안한 주행 경험을 위해"
                desc2="차량 이용의 모든 과정에서 바이크뱅크의 관리를 받을 수 있습니다."
              />
              <style.CompanyListWrap>
                {mobileCompanyList.map((item, index) => (
                  <ImgList
                    key={index}
                    imgsrc={item.imgsrc}
                    alt={item.alt}
                    title={item.title}
                    desc1={item.desc1}
                    desc2={item.desc2}
                  />
                ))}
              </style.CompanyListWrap>
            </>
          ) : (
            <>
              <TitleList
                number="03"
                subtitle="출고부터 수거까지"
                bold="준비된 이륜차 인프라"
                desc1="생활 속 편안한 주행 경험을 위해"
                desc2="차량 이용의 모든 과정에서 바이크뱅크의 관리를 받을 수 있습니다."
              />
              <CompanySlide />
            </>
          )}
        </PageWidth>
      </Section>
      <Section
        padding={isMobile ? '0 0 100px 0' : '116.5px 0 156px 0'}
        background="#f8f8f8"
      >
        <PageWidth>
          {isMobile ? (
            <TitleList
              noneNum
              subtitle="권역별 물류 거점으로"
              bold="이륜차 인프라 확보"
              desc1="전국 어디에나 차량의 이동과 관리"
            />
          ) : (
            <TitleList
              noneNum
              subtitle="420개 이상의"
              bold="서비스망으로 확실하게"
              desc1="권역별로 서비스망을 확보하여 이륜차 운용에 필요한"
              desc2="소모품 교환과 사고발생 수리를 책임집니다."
            />
          )}
        </PageWidth>
        <Area>
          <img
            data-aos="fade-up"
            src={
              isMobile
                ? '/images/mobile_main_service_area.png'
                : '/images/main_service_area.png'
            }
            alt="서비스망 이미지"
          />
        </Area>
        <PageWidth>
          <style.Arealist isScroll={isMobile}>
            <li data-aos="fade-up" data-aos-delay="0">
              <img
                src={
                  isMobile
                    ? '/images/mobile_company_bb_01.png'
                    : '/images/company_spot_01.png'
                }
                alt="서비스망"
              />
              <p>서울차량물류</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="100">
              <img
                src={
                  isMobile
                    ? '/images/mobile_company_bb_02.png'
                    : '/images/company_spot_02.png'
                }
                alt="서비스망"
              />
              <p>대구차량물류</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <img
                src={
                  isMobile
                    ? '/images/mobile_company_bb_03.png'
                    : '/images/company_spot_03.png'
                }
                alt="서비스망"
              />
              <p>울산정비센터</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <img
                src={
                  isMobile
                    ? '/images/mobile_company_bb_04.png'
                    : '/images/company_spot_04.png'
                }
                alt="서비스망"
              />
              <p>대구정비센터</p>
            </li>
          </style.Arealist>
        </PageWidth>
      </Section>
    </>
  );
};

export default Company;
