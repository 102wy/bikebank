import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as homeStyle from '../home/styles';
import * as style from './styles';
import * as utils from '../../utils';
import * as component from '../../components'

import AOS from 'aos';

const Customer = () => {
  const navigate = useNavigate();

  // subNavigation을 위한 ref
  const pageRef = useRef([]);
  const subNavList = [
    {
      listname: '문의하기',
      height: pageRef.current[0]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '서비스 네트워크',
      height: pageRef.current[1]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '자주 묻는 질문',
      height: pageRef.current[2]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
    {
      listname: '공지사항',
      height: pageRef.current[3]?.getBoundingClientRect().top + window.pageYOffset - 100,
    },
  ];

  // 모바일 유무 확인
  const { isMobile } = useContext(utils.mobileContext);

  // url 파라미터값 가져오기
  const { id } = useParams();

  useEffect(() => {
    // 스크롤 이벤트를 위한 설정
    AOS.init({ duration: 1800 });

    // 경로에 따른 위치설정
    if (id == 1) return window.scrollTo(0, pageRef.current[0]?.getBoundingClientRect().top + window.pageYOffset - 100)
    if (id == 2) return window.scrollTo(0, pageRef.current[1]?.getBoundingClientRect().top + window.pageYOffset)
    if (id == 3) return window.scrollTo(0, pageRef.current[2]?.getBoundingClientRect().top + window.pageYOffset)
    if (!id) return window.scrollTo(0, 0)
  }, [id])
  return (
    <>
      {/* 메타태그 */}
      <component.MetaTag title=':: 바이크뱅크 - 고객지원 ::' keywords='바이크뱅크 고객지원' description='바이크뱅크 고객지원' author=', 바이크뱅크' subject='바이크뱅크 고객지원' copyright='Copyrights 2020 BIKE BANK' url='http://www.bikebank.kr/customer' imgsrc='/images/snail' />

      {/* 공통 헤더부분 */}
      <component.SubTitleSection title="고객지원" />
      <component.SubNavigation pageRef={pageRef} navlist={subNavList} />

      {/* 01. 서비스 문의하기 */}
      <homeStyle.Section
        padding={isMobile ? '55px 0 100px 0' : '99px 0 275px 0'}
        ref={(el) => (pageRef.current[0] = el)}
      >
        <homeStyle.PageWidth>
          <component.TitleList
            id='customer'
            number="01"
            subtitle={isMobile && "서비스 문의하기"}
            bold={!isMobile && "서비스 문의하기"}
            desc1={isMobile ? '고객센터를 통해 궁금증을 해결하세요.' : '고객센터에서는 바이크뱅크와 관련된 문의를 할 수 있습니다.'}
            nonSubtitle={!isMobile}
          />
          <style.CustomerCenter isMobile={isMobile} data-aos="fade-up" data-aos-duration="1800">
            <div>
              <p>고객센터<br /><span>1522-9008</span></p>
              <button><a href='tel:1522-9008'>
                {isMobile ? <img src="/images/call_num_arrow.png" alt="전화하기 버튼" /> : '전화하기'}
              </a></button>
            </div>
            <p className='bottom'>상담시간 평일 09:00 ~ 18:00   |   점심시간 12:30 ~ 13:30</p>
          </style.CustomerCenter>
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 02. 서비스 네트워크 */}
      <homeStyle.Section
        padding={isMobile ? '55px 0 100px 0' : '99px 0 147px 0'} background={!isMobile && '#f8f8f8'}
        ref={(el) => (pageRef.current[1] = el)}
      >
        <homeStyle.PageWidth>
          <component.TitleList
            number="02"
            subtitle={isMobile && "서비스 네트워크"}
            bold={!isMobile && "서비스 네트워크"}
            desc1='바이크뱅크의 전국 판매/서비스점을 확인하세요.'
            desc2={isMobile ? '가까운 판매/서비스점에서 차량수리, 점검,' : '가까운 판매/서비스점에서 차량수리, 점검, 부품구입을 할 수 있습니다.'}
            desc3={isMobile && '부품구입을 할 수 있습니다.'}
            nonSubtitle={!isMobile}
          />
          <component.Map />
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 03. 자주 묻는 질문 */}
      <homeStyle.Section
        padding={isMobile ? '55px 0 100px 0' : '99px 0 253.5px 0'}
        ref={(el) => (pageRef.current[2] = el)}
      >
        <homeStyle.PageWidth>
          <component.TitleList
            number="03"
            subtitle={isMobile && "자주 묻는 질문"}
            bold={!isMobile && "자주 묻는 질문"}
            nonSubtitle={!isMobile}
            noDesc
          />
          <style.QuestionList data-aos="fade-up" data-aos-duration="1800">
            {utils.questionList.map(item => (
              <component.Question key={item.id} item={item} />
            ))}
          </style.QuestionList>
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 04. 공지사항 */}
      <homeStyle.Section
        padding={isMobile ? '55px 0 100px 0' : '99px 0 253.5px 0'} background={!isMobile && '#f8f8f8'}
        ref={(el) => (pageRef.current[3] = el)}
      >
        <homeStyle.PageWidth>
          <component.TitleList
            number="04"
            subtitle={isMobile && "공지사항"}
            bold={!isMobile && "공지사항"}
            nonSubtitle={!isMobile}
            noDesc
          />
          <style.NoticeList>
            <li onClick={() => navigate(`/notice/1`)}>
              <p>바이크뱅크 서류 양식 자료<span>2022.11.24</span></p>
            </li>
            <li onClick={() => navigate(`/notice/0`)}>
              <p>바이크뱅크 개인위치정보 이전 안내<span>2022.09.26</span></p>
            </li>
          </style.NoticeList>
        </homeStyle.PageWidth>
      </homeStyle.Section>
    </>
  );
};

export default Customer;