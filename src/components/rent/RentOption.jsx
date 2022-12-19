import React from 'react';
import styled, { css } from 'styled-components';
import { rentOptionList01, rentOptionList02, rentOptionList03, rentOptionList04 } from '../../utils/rent/rentlist';

const RentOption = () => {

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