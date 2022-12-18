import React, { useContext, useEffect, useRef } from 'react';
import SubNavigation from '../../components/SubNavigation';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import { Area, PageWidth, Section } from '../Home/style';
import ImgList from '../../components/ImgList';
import CompanySlide from '../../components/CompanySlide';
import { mobileContext } from '../../utils/mobileContext';
import { companyList01, companyList02, companyList03, mobileCompanyList } from '../../utils/company/companylist'
import * as style from './styles';

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
