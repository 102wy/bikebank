import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './style';
import HomeSectionTitle from '../../components/HomeSectionTitle';
import HomeCheckList from '../../components/HomeCheckList';
import { mobileContext } from './../../utils/mobileContext';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VisibilitySensor from 'react-visibility-sensor';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  const navigate = useNavigate();
  // 모바일 유무 확인
  const { isMobile } = useContext(mobileContext);
  useEffect(() => {
    // 스크롤 이벤트를 위한 설정
    AOS.init({ duration: 1800 });
    // 스크롤 최상단
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Swiper loop={true} slidesPerView={1}>
        <SwiperSlide>
          <style.Visual>
            <style.PageWidth gap="65px" isMain flexEnd>
              <style.Title>
                No. 1
                <br />
                비즈니스 이륜차 솔루션
                <br />
                <span>바이크뱅크</span>
              </style.Title>
              <style.Button onClick={() => navigate(`/rent`)}>
                렌트상품 알아보기
              </style.Button>
            </style.PageWidth>
          </style.Visual>
        </SwiperSlide>
      </Swiper>
      {/* 모바일 유무에 따라 다르게 보여짐 */}
      {/* 모바일일때 */}
      {isMobile ? (
        <>
          <style.Section borderBt padding="100px 0">
            <HomeSectionTitle
              title="solution"
              subtitle="기술과 인프라로"
              bold="이륜차 솔루션을 제공합니다."
            />
            <style.SolutionUl data-aos="fade-up">
              <li>
                <img
                  src="/images/mobile_main_solution_01.png"
                  alt="이륜차 렌트"
                />
                <p>이륜차 렌트</p>
              </li>
              <li>
                <img
                  src="/images/mobile_main_solution_02.png"
                  alt="이륜차 판매"
                />
                <p>이륜차 판매</p>
              </li>
              <li>
                <img
                  src="/images/mobile_main_solution_03.png"
                  alt="서비스 네트워크"
                />
                <p>서비스 네트워크</p>
              </li>
            </style.SolutionUl>
          </style.Section>
          <style.Section padding="50px 0 100px 0">
            <HomeSectionTitle
              title="rent"
              subtitle="국내 이륜차 렌트 점유율 1위"
              bold="최고의 상품을 공급합니다."
              desc1="출고부터 관리, 사고 보장까지 한 번에."
            />
            <img
              src="/images/mobile_main_rent_01.png"
              alt="렌트 이미지"
              className="imgWidth100"
              data-aos="fade-up"
            />
            <style.CountUpList data-aos="fade-up" data-aos-duration="1800">
              <li>
                <p>운영도시</p>
                <CountUp start={0} end={70} startOnMount={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span> +</span>
              </li>
              <li>
                <p>사용점</p>
                <CountUp start={0} end={2100} startOnMount={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span> +</span>
              </li>
              <li>
                <p>렌트수</p>
                <CountUp start={0} end={8000} startOnMount={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span> +</span>
              </li>
            </style.CountUpList>
          </style.Section>
          <style.Section background="#f8f8f8" padding="49.5px 0 100px 0">
            <HomeSectionTitle
              title="partners"
              subtitle="비즈니스 파트너들에게"
              bold="이륜차 솔루션을 제공합니다."
            />
            <img
              src="/images/mobile_rent_box_list.png"
              alt="파트너 이미지"
              className="imgWidth100"
              data-aos="fade-up"
            />
          </style.Section>
          <style.Section
            backgroundImg="url('/images/check_bg.jpg')"
            padding="50px 0 67px 0"
          >
            <HomeSectionTitle
              title="check point"
              subtitle="배달용 렌트의 기준"
              bold="세 가지를 꼭 체크하세요"
              subcolor="#fff"
              sbblod
              color="#fff"
            />
            <style.CheckPointList>
              <li data-aos="fade-up" data-aos-duration="1800" data-aos-delay="0">
                <p>01.</p>
                <p>보험보장</p>
                <p>합리적인 가격과 폭 넓은 보장 범위</p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1800" data-aos-delay="1000">
                <p>02.</p>
                <p>관리편의성</p>
                <p>이륜차에 특화된 관리서비스</p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1800" data-aos-delay="2000">
                <p>03.</p>
                <p>렌트비용</p>
                <p>합리적인 가격과 폭 넓은 보장 범위</p>
              </li>
            </style.CheckPointList>
          </style.Section>
          <style.Section padding="164px 0">
            <HomeCheckList
              title1="배달용 이륜차 선택할 때"
              title2="핵심은 보장 범위"
              number="01"
            />
            <style.InsuranceList>
              <ul data-aos="fade-up">
                <li>
                  <p>대인보장</p>
                  <span>무 한</span>
                </li>
                <li>
                  <p>대물보장</p>
                  <span>2억원</span>
                </li>
                <li>
                  <p>라이더 추가보장</p>
                  <span>상해보험</span>
                </li>
              </ul>
            </style.InsuranceList>
            <style.InsuranceSubtitle>RCS 보장사례</style.InsuranceSubtitle>
            <style.RCSList data-aos="fade-up">
              <li>
                <p>바이크뱅크 RCS 이용시</p>
                <p>
                  <span>7,400만원</span>
                  <br />
                  보상 받은 사연
                </p>
                <p>횡단보도 보행자 충돌 사고</p>
              </li>
              <li>
                <p>책임보험만 가입시</p>
                <p>
                  <span>5,900만원</span>
                  <br />
                  부담 한 사연
                </p>
                <p>불법 유턴 하는 택시와 비접촉 사고</p>
              </li>
            </style.RCSList>
          </style.Section>
          <style.Section padding="0 0 174px 0">
            <HomeCheckList
              title1="전국 360개 이상의"
              title2="서비스망으로 확실하게"
              desc1="이륜차 소모품 교환과 사고 수리."
              number="02"
            />
            <img
              src="/images/mobile_main_service_area.png"
              alt="서비스망 이미지"
              className="imgWidth100"
              data-aos="fade-up"
            />
          </style.Section>
          <style.Section imgPadding="0 30px" padding="0 0 154px 0">
            <HomeCheckList
              title1="배달용 오토바이 필요할 때"
              title2="비용 부담을 줄이도록"
              number="03"
            />
            <img
              src="/images/mobile_main_price_down.png"
              alt="비용절감 이미지"
              className="imgWidth100"
              data-aos="fade-up"
            />
          </style.Section>
        </>
      ) : (
        // 모바일 끝
        // 웹화면일때
        <>
          <style.Section borderBt padding="163px 0">
            <style.PageWidth isMain>
              <HomeSectionTitle
                title="solution"
                subtitle="기술과 인프라를 바탕으로 제공하는"
                bold="이륜차 솔루션을 이용해보세요"
              />
              <style.SolutionUl data-aos="fade-up" data-aos-duration="1800">
                <li>
                  <img src="/images/main_solution_01.png" alt="이륜차 렌트" />
                  <p>이륜차 렌트</p>
                </li>
                <li>
                  <img src="/images/main_solution_02.png" alt="이륜차 판매" />
                  <p>이륜차 판매</p>
                </li>
                <li>
                  <img
                    src="/images/main_solution_03.png"
                    alt="서비스 네트워크"
                  />
                  <p>서비스 네트워크</p>
                </li>
              </style.SolutionUl>
            </style.PageWidth>
          </style.Section>
          <style.Section padding="140px 0 141px 0">
            <style.PageWidth imgMargin="50.5px 0 20px 0" isMain>
              <HomeSectionTitle
                title="rent"
                subtitle="국내 이륜차 렌트 점유율 1위 업체로서"
                bold="최고 수준의 배달용 렌트 상품을 공급합니다"
                desc1="전국 8,000여대의 렌트 이륜차를 운용하며 출고부터 관리, 사고 보장까지 한 번에"
                desc2="어려운 오토바이 관리를 바이크뱅크에서 편하게 이용하세요.
                "
              />
              <img
                src="/images/main_rent.png"
                alt="렌트 이미지"
                data-aos="fade-up"
                data-aos-duration="1800"
              />
              <style.CountUpList data-aos="fade-up" data-aos-duration="1800">
                <li>
                  <p>운영도시</p>
                  <CountUp start={0} end={70} startOnMount={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span> +</span>
                </li>
                <li>
                  <p>사용점</p>
                  <CountUp start={0} end={2100} startOnMount={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span> +</span>
                </li>
                <li>
                  <p>렌트수</p>
                  <CountUp start={0} end={8000} startOnMount={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span> +</span>
                </li>
              </style.CountUpList>
            </style.PageWidth>
          </style.Section>
          <style.Section background="#f8f8f8" padding="130.5px 0 131px 0">
            <style.PageWidth imgMargin="50px 0 0 0" isMain>
              <HomeSectionTitle
                title="partners"
                subtitle="바이크뱅크는 다양한 비즈니스 파트너들에게"
                bold="이륜차 솔루션을 제공합니다"
                desc1="* 2022년 11월 기준"
              />
              <img
                src="/images/parners_img.png"
                alt="파트너 이미지"
                data-aos="fade-up"
                data-aos-duration="1800"
              />
            </style.PageWidth>
          </style.Section>
          <style.Section
            padding="141.5px 0"
            backgroundImg="url('/images/check_bg.jpg')"
          >
            <style.PageWidth gap="238.5px" isMain>
              <HomeSectionTitle
                width="0%"
                title="check point"
                subtitle="배달용 렌트의 기준"
                bold="세 가지를 꼭 체크하세요"
                subcolor="#fff"
                sbblod
                color="#fff"
              />
              <style.CheckPointList>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-delay="0"
                >
                  <p>01.</p>
                  <p>보험보장</p>
                  <p>합리적인 가격과 폭 넓은 보장 범위</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-delay="1000"
                >
                  <p>02.</p>
                  <p>관리편의성</p>
                  <p>이륜차에 특화된 관리서비스</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-delay="2000"
                >
                  <p>03.</p>
                  <p>렌트비용</p>
                  <p>합리적인 가격과 폭 넓은 보장 범위</p>
                </li>
              </style.CheckPointList>
            </style.PageWidth>
          </style.Section>
          <style.Section padding="165.5px 0 237.2px 0">
            <style.PageWidth isMain>
              <HomeCheckList
                title1="배달용 이륜차 선택할 때"
                title2="핵심은 보장 범위"
                number="01"
                desc1="긴 시간을 주행하는 라이더에게는 사고 발생시 보장 범위가 중요합니다."
                desc2="보장 범위를 비교하고 상품을 선택하세요."
              />
              <style.InsuranceList>
                <ul>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-delay="0"
                  >
                    <p>대인보장</p>
                    <span>무한</span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-delay="1000"
                  >
                    <p>대물보장</p>
                    <span>2억원</span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-delay="2000"
                  >
                    <p>라이더 추가보장</p>
                    <span>상해보험</span>
                  </li>
                </ul>
                <style.Button onClick={() => navigate(`/rent`)}>
                  보험보장 상세내용
                </style.Button>
              </style.InsuranceList>
              <style.InsuranceSubtitle>RCS 보장사례</style.InsuranceSubtitle>
              <style.RCSList data-aos="fade-up">
                <li>
                  <p>바이크뱅크 RCS 이용시</p>
                  <p>
                    <span>7,400만원</span>
                    <br />
                    보상 받은 사연
                  </p>
                  <p>횡단보도 보행자 충돌 사고</p>
                </li>
                <li>
                  <p>책임보험만 가입시</p>
                  <p>
                    <span>5,900만원</span>
                    <br />
                    부담 한 사연
                  </p>
                  <p>불법 유턴 하는 택시와 비접촉 사고</p>
                </li>
              </style.RCSList>
            </style.PageWidth>
          </style.Section>
          <style.Section padding="118.5px 0 124px 0" background="#f8f8f8">
            <style.PageWidth isMain>
              <HomeCheckList
                title1="전국 420개 이상의"
                title2="서비스망으로 확실하게"
                number="02"
                desc1="배달 권역별로 서비스망을 확보하여 이륜차 운용에 필요한"
                desc2="소모품 무료 교환과 사고 발생시 수리를 책임집니다."
              />
            </style.PageWidth>
            <style.Area isMain>
              <img
                src="/images/main_service_area.png"
                alt="서비스망 이미지"
                data-aos="fade-up"
              />
            </style.Area>
          </style.Section>
          <style.Section padding="168px 0 251.5px 0">
            <style.PageWidth isMain>
              <HomeCheckList
                title1="배달용 오토바이 필요할 때"
                title2="비용 부담을 줄이도록"
                number="03"
                desc1="오토바이 구입비에 보험 가입비까지"
                desc2="갑작스러운 비용 증가가 부담된다면 바이크뱅크 렌트 상품"
                margin="0 0 52px 0"
              />
              <img
                src="/images/main_price_area.png"
                alt="렌트비 이미지"
                data-aos="fade-up"
              />
              <style.HomePriceDesc>
                * 23세 남자/ 125cc/ 소모품 교체기준, 차량에 따라 달라질 수
                있습니다.
              </style.HomePriceDesc>
            </style.PageWidth>
          </style.Section>
        </>
      )}
    </>
  );
};
export default Home;
