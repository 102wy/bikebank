import React from 'react';
import styled, { css } from 'styled-components';

const RentOption = () => {
    const rentOptionList01 = [
        {
            imgUrl: '/images/mobile_rent_bike_01.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_02.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_03.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_04.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_05.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_06.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_07.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_08.png',
        },
        {
            imgUrl: '/images/mobile_rent_bike_09.png',
        },
    ];

    const rentOptionList02 = [
        {
            imgUrl: '/images/mobile_rent_kind_01.png',
            title: '신 차',
            desc: '신차와 보험상품을 결합한 렌트 상품'
        },
        {
            imgUrl: '/images/mobile_rent_kind_02.png',
            title: '중고차',
            desc: '비교적 저렴한 가격의 중고차 렌트 상품'
        },
        {
            imgUrl: '/images/mobile_rent_kind_03.png',
            title: '만기 후 연장',
            desc: '1년 계약 종료 후 타던 차량을 연장 계약'
        },
        {
            imgUrl: '/images/mobile_rent_kind_04.png',
            title: '반납 후 재신청',
            desc: '1년 계약 종료 차량 반납 후 신차 재신청'
        },
    ];

    const rentOptionList03 = [
        {
            imgUrl: '/images/mobile_rent_return_01.png',
            title: '반납형',
        },
        {
            imgUrl: '/images/mobile_rent_return_02.png',
            title: '인수형',
        },
    ];

    const rentOptionList04 = [
        {
            imgUrl: '/images/mobile_rent_age_01.png',
            title: '전연령',
        },
        {
            imgUrl: '/images/mobile_rent_age_02.png',
            title: '만 19세 이상',
        },
        {
            imgUrl: '/images/mobile_rent_age_03.png',
            title: '만 21세 이상',
        },
        {
            imgUrl: '/images/mobile_rent_age_04.png',
            title: '만 24세 이상',
        },
        {
            imgUrl: '/images/mobile_rent_age_05.png',
            title: '만 26세 이상',
        },
        {
            imgUrl: '/images/mobile_rent_age_06.png',
            title: '만 30세 이상',
        },
        {
            imgUrl: '/images/mobile_rent_age_07.png',
            title: '만 24세 이상',
        },
    ];
    return (
        <Wrap>
            <p className='title'>차량 기종</p>
            <MobileRentOptionList isCenter>
                {rentOptionList01.map((item, idx) => (
                    <li key={idx}>
                        <img src={item.imgUrl} alt='차량 기종 이미지' className='option' />
                    </li>
                ))}
            </MobileRentOptionList>
            <p className='title'>렌트 종류</p>
            <MobileRentOptionList height='200px' isDesc>
                {rentOptionList02.map((item, idx) => (
                    <li key={idx}>
                        <img src={item.imgUrl} alt='렌트 종류 이미지' />
                        <p>{item.title}<br /><span>{item.desc}</span></p>
                    </li>
                ))}
            </MobileRentOptionList>
            <p className='title'>인수 여부</p>
            <MobileRentOptionList height='204px' imgHeight='150px'>
                {rentOptionList03.map((item, idx) => (
                    <li key={idx}>
                        <img src={item.imgUrl} alt='인수 여부 이미지' />
                        <p>{item.title}</p>
                    </li>
                ))}
            </MobileRentOptionList>
            <MobileRentOptionList height='204px' imgHeight='150px'>
                {rentOptionList04.map((item, idx) => (
                    <li key={idx}>
                        <img src={item.imgUrl} alt='인수 여부 이미지' />
                        <p>{item.title}</p>
                    </li>
                ))}
            </MobileRentOptionList>
        </Wrap>
    );
};

export default RentOption;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    .title {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.45px;
        font-weight: 700;
        &:first-child {
            margin-top: 50px;
        }
    }
`

const MobileRentOptionList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow: scroll;
  width: 100%;
  padding-right: 30px;
  ::-webkit-scrollbar {
      display: none;
    }
    li {
        border-radius: 10px;
        box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
        background-color: #fff;
        min-width: 305px;
        height: ${props => props.height || '277px'};
        margin: 20px 0 50px 0;
        display: flex;
        flex-direction: column;
        ${props => props.isCenter && css`
            align-items: center;
        `}
        img {
            width: 100%;
            height: ${props => props.imgHeight || 'auto'};
            &.option {
                height: 80%;
                margin-top: 20px;
                width: auto;
            }
        }
        p{
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.45px;
            font-weight:700;
            padding: 10px 0 0 20px;
            min-height:57px;
            span {
                font-size: 16px;
                line-height: 26px;
                letter-spacing: -0.4px;
                color: ${props => props.theme.gray02};
                font-weight:400;
            }            
        }
    }
`