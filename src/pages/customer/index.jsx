import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../components/customer/Map';
import SubTitleSection from '../../components/SubTitleSection';
import TitleList from '../../components/TitleList';
import * as homeStyle from '../Home/style';
import * as style from './styles';

const Customer = () => {
  return (
    <>
      {/* 공통 헤더부분 */}
      <SubTitleSection title="고객지원" />

      {/* 01. 서비스 문의하기 */}
      <homeStyle.Section padding='99px 0 275px 0'>
        <homeStyle.PageWidth>
          <TitleList
            number="01"
            bold="서비스 문의하기"
            desc1='고객센터에서는 바이크뱅크와 관련된 문의를 할 수 있습니다.'
            nonSubtitle
          />
          <style.CustomerCenter>
            <div>
              <p>고객센터<br /><span>1522-9008</span></p>
              <button><a href='tel:1522-9008'>전화하기</a></button>
            </div>
            <p className='bottom'>상담시간 평일 09:00 ~ 18:00   |   점심시간 12:30 ~ 13:30</p>
          </style.CustomerCenter>
        </homeStyle.PageWidth>
      </homeStyle.Section>

      {/* 02. 서비스 네트워크 */}
      <homeStyle.Section padding='99px 0 147px 0' background='#f8f8f8'>
        <homeStyle.PageWidth>
          <TitleList
            number="02"
            bold="서비스 네트워크"
            desc1='바이크뱅크의 전국 판매/서비스점을 확인하세요.'
            desc2='가까운 판매/서비스점에서 차량수리, 점검, 부품구입을 할 수 있습니다.'
            nonSubtitle
          />
          <Map />
        </homeStyle.PageWidth>
      </homeStyle.Section>
    </>
  );
};

export default Customer;
