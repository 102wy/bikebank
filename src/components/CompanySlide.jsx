import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';

const CompanySlide = () => {
  const infraList = [
    {
      imgsrc: '/images/infra_img_01.png',
      title: '차량출고',
      alt: '인프라 이미지',
      desc1: '주행이 바로 가능하도록 차량을 세팅하고',
      desc2: '전국 각지로 배송합니다.',
    },
    {
      imgsrc: '/images/infra_img_02.png',
      title: '렌트운영',
      alt: '인프라 이미지',
      desc1: '이륜차를 이용하고 관리하는데 필요한 운영 업무에 대해',
      desc2: '빠르고 정확하게 대응을 진행합니다.',
    },
    {
      imgsrc: '/images/infra_img_03.png',
      title: '소모품교환',
      alt: '인프라 이미지',
      desc1: '일 평균 8시간 이상 운행되는 배달용 오토바이는 안전한 주행을 위해',
      desc2: '주기적으로 소모품을 교환해줘야 합니다.',
    },
    {
      imgsrc: '/images/infra_img_04.png',
      title: '차량수리',
      alt: '인프라 이미지',
      desc1: '전국 서비스망을 통해 차량의 수리를 신속하게 진행하고',
      desc2: '안전하고 편리한 주행을 지원합니다.',
    },
    {
      imgsrc: '/images/infra_img_05.png',
      title: '사고보장',
      alt: '인프라 이미지',
      desc1: '보다 안전하게 이륜차를 사용하기 위해서 보험 및 보장으로',
      desc2: '사고에 대비하는 것은 필수적입니다.',
    },
    {
      imgsrc: '/images/infra_img_06.png',
      title: '차량수거',
      alt: '인프라 이미지',
      desc1: '사용이 끝난 이륜차를 안전하게 수거하여',
      desc2: '필요에 따라 리사이클 및 파츠별로 분해하게 됩니다.',
    },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + infraList[index].title + '</span>'
      );
    },
  };
  return (
    <Wrap>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        loop
        autoplay={true}
      >
        {infraList.map((item, index) => (
          <SwiperSlide key={index}>
            <Content>
              <img src={item.imgsrc} alt={item.alt} />
              <p className="title">{item.title}</p>
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  );
};

export default CompanySlide;

const Wrap = styled.div`
  width: 100%;
  padding: 30px 57px 30px 57px;
  box-shadow: 5px 0 30px 0 rgba(191, 191, 191, 0.16);
  border-radius: 15px;
  .swiper-pagination {
    width: 100%;
    display: flex;
    margin-top: 57px;
    position: relative;
    gap: 37px;
    z-index: 5;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    font-size: 16px;
    color: #000;
    line-height: 30px;
    text-align: left;
    margin: 0 !important;
    background: none;
    width: auto;
    height: auto;
  }
  .swiper-pagination-bullet-active {
    background: none;
    color: ${(props) => props.theme.primary};
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    top: 100%;
    transform: translateY(-50%);
  }
  .swiper-button-prev {
    left: auto;
    right: 80px;
    bottom: 0%;
    &:after {
      font-size: 0;
      background: url('/images/infra_left.png') no-repeat center;
      width: 18.2px;
      height: 30.6px;
      background-size: contain;
    }
  }
  .swiper-button-next {
    top: 100%;
    transform: translateY(-50%);
    &:after {
      font-size: 0;
      background: url('/images/infra_right.png') no-repeat center;
      width: 18.2px;
      height: 30.6px;
      background-size: contain;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  img {
  }
  p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: ${(props) => props.theme.gray02};
  }
  .title {
    color: black;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: 700;
    margin: 20.5px 0 20px 0;
  }
`;
