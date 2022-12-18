import React from 'react';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import * as homeStyle from '../Home/style';
import * as style from './styles';

const Recruit = () => {
  return <>
    {/*  공통헤더부분 */}
    <SubTitleSection title="채용안내" />

    {/* 더 나은 이륜차 시장을 만듭니다. */}
    <homeStyle.Section padding='190px 0 178px 0'>
      <homeStyle.PageWidth>
        <TitleList
          bold='더 나은 이륜차 시장을 만듭니다.'
          desc1='바이크뱅크는 배달용 이륜차 시장을 선도하는 기업으로'
          desc2='고객 만족을 위해 임직원이 함께 노력하며 성장하고 있습니다.'
        />
        <style.Title margin='157px 0 40px 0'>근무 환경과 복지</style.Title>
        <style.EnvironmentList>
          <li><img src="/images/recruit_02_01.png" alt="근무환경 사진" /></li>
          <li><img src="/images/recruit_02_02.png" alt="근무환경 사진" /></li>
          <li><img src="/images/recruit_02_03.png" alt="근무환경 사진" /></li>
          <li><img src="/images/recruit_02_04.png" alt="근무환경 사진" /></li>
        </style.EnvironmentList>
        <style.WelfareList>
          <li><p><span>열심히 일한 당신. 성과를 나누자!</span>성과연봉제, 인센티브 제도</p></li>
          <li><p><span>자기 개발을 적극적으로 응원합니다!</span>자기 개발을 적극적으로 응원합니다!</p></li>
          <li><p><span>함께하는 시간을 가져요.</span>분기별 직원 문화활동 지원</p></li>
          <li><p><span>연휴는 마음 편히 보내요.</span>명절 선물/귀향비, 여름휴가비 지급</p></li>
          <li><p><span>업무에 필요한 환경을 지원해요.</span>업무 장비, 중식비, 음료 및 간식 지원</p></li>
          <li><p><span>주차 스트레스는 이제 그만.</span>주차장 및 주차비 지원</p></li>
        </style.WelfareList>
      </homeStyle.PageWidth>
    </homeStyle.Section>

    {/*  */}
    <homeStyle.Section padding='142px 0 180px 0' background='#f5f5f5'>
      <homeStyle.PageWidth>
        <style.Title>바이크뱅크의 성장</style.Title>
      </homeStyle.PageWidth>
      <homeStyle.Area>
        <style.GrowthList>
          <li><img src="/images/growth_01.png" alt="성장 이미지" /></li>
          <li><img src="/images/growth_02.png" alt="성장 이미지" /></li>
        </style.GrowthList>
      </homeStyle.Area>
      <homeStyle.PageWidth>
        <style.Title margin='190px 0 22px 0'>입사과정</style.Title>
        <img src="/images/recruit_process.png" alt="입사과정 이미지" style={{ margin: '0 36px 60px 36px', maxWidth: '100%' }} />
        <hr />
        <style.CheckListTitle>체크리스트</style.CheckListTitle>
        <style.CheckListDesc>
          - 입사 지원시 본인의 성명, 연락처, 이메일 주소 등을 정확하게 기입하세요.<br />
          이력서에 기재된 학력 및 경력 사항이 거짓일 경우 합격이 취소될 수 있습니다.<br />
          - 직무 특성에 따라 사전 과제, 면접, 레퍼런스 체크 등이 추가될 수 있습니다.<br />
          - 종합적인 결과를 바탕으로 최종 심사를 거쳐 결과를 합격자에게 개별 안내합니다.
        </style.CheckListDesc>
        <style.Button onClick={() => window.open(`https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=THlTNTZRY3VQWHZTL3BrMTQwODhZdz09`)}>채용정보 바로가기</style.Button>
      </homeStyle.PageWidth>
    </homeStyle.Section>

    {/*  */}
    <homeStyle.Section padding='200px 0'>
      <homeStyle.PageWidth>
        <style.Blog>
          <p>바이크뱅크의 소식이 궁금하신가요?<br />
            블로그를 통해 살펴보세요.</p>
          <button>바이크뱅크 블로그<img src="/images/blog_arrow.png" alt="화살표 아이콘" /></button>
        </style.Blog>
      </homeStyle.PageWidth>
    </homeStyle.Section>
  </>;
};

export default Recruit;
