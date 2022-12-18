import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const RscCaseItem = ({ title, desc, RSCprice, normalPrice, isToggle, id }) => {
  const rscCaseList = [
    {
      id: 1,
      title: '횡단보도 보행자 충돌 사고',
      desc: '2020년 12월 04일 경기도 안산시 단원구 도로에서 라이더가 횡단보도 보행자와 충돌 (적색힌호 변경된 시점) 피해자 과실 10%',
      normalPrice: '라이더 부담 금액 \n총 23,411,700원',
      RSCprice: '라이더 부담 금액\n0원',
      isToggle: false,
    },
    {
      id: 2,
      title: '가로수와 충돌한 사고',
      desc: '2020년 09월 1일 경기도 부천시 도로에서 역주행하여 주행중 마주오던 차량을 피하려나 가로수와 충돌하여 사망하는 사고',
      normalPrice: '보상금액\n0원',
      RSCprice: '라이더 보상 금액\n50,000,000원',
      isToggle: false,
    },
    {
      id: 3,
      title: '교차로 신호위반 충돌',
      desc: '2020년 04월 21일 경기도 부천시 교차로에서 라이더가 신호위반하여 직전하던 차량과 충돌한 사고 (자차 과실 70%)',
      normalPrice: '라이더 부담 금액\n총 59,204,352원',
      RSCprice: '라이더 부담 금액\n0원',
      isToggle: false,
    },
    {
      id: 4,
      title: '횡단보도 보행자 충돌 사고',
      desc: '2020년 05월 11일 경기도 의정부시 평화로 소재 도로에서 횡단보도를 보행하던 피해자와 충돌한 사고. (횡단보도 사고) 자차 과실 50%',
      normalPrice: '라이더 부담 금액\n총 19,183,975원',
      RSCprice: '라이더 부담 금액\n0원',
      isToggle: false,
    },
    {
      id: 5,
      title: '교차로 비접촉 사고',
      desc: '2020년 08월 30일 서울시 강서구 도로에서 불법 유턴하는 택시를 피하려다 라이더가 넘어지는 비접촉 사고 (자차과실 0%)',
      normalPrice: '라이더 보상 금액\n총 0원',
      RSCprice: '라이더 보상 금액\n9,480,000원',
      isToggle: false,
    },
    {
      id: 6,
      title: '무단횡단 피해자와 충돌 사고',
      desc: '2020년 03월 9일 서울시 종로구 이면도로에서 라이더가 무단횡단을 하던 피해자와 충돌한 사고 (자차과실 20%)',
      normalPrice: '라이더 부담 금액\n총 31,769,040원',
      RSCprice: '라이더 부담 금액\n0원',
      isToggle: false,
    },
  ];
  const [toggle, setToggle] = useState(isToggle);

  console.log(isToggle);

  return (
    <RscCaseList>
      {rscCaseList.map((item) => (
        <Wrap
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <Title isToggle={isToggle}>
            [사례{id}] {title}
          </Title>
          <RscCaseCont>
            <p>{desc}</p>
            <div>
              <section>
                <p>일반 책임보험 차량 이용시</p>
                <p className="bold">{normalPrice}</p>
              </section>
              <section>
                <p className="primary">바이크뱅크 RCS 차량 이용시</p>
                <p className="bold primary">{RSCprice}</p>
              </section>
            </div>
          </RscCaseCont>
        </Wrap>
      ))}
    </RscCaseList>
  );
};

export default RscCaseItem;

const RscCaseList = styled.ul`
  display: flex;
`;

const Wrap = styled.li`
  cursor: pointer !important;
  background-color: #fff;
  p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    white-space: pre-wrap;
    cursor: pointer !important;
  }
`;

const Title = styled.p`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  line-height: 82px !important;
  font-size: 24px !important;
  color: #000 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '';
    background: url('/images/btn_down.png') no-repeat center;
    display: block;
    width: 19.7px;
    height: 11.9px;
    margin-right: 30px;
    ${(props) =>
      props.isToggle &&
      css`
        background: url('/images/btn_up.png') no-repeat center;
      `}
  }
`;

const RscCaseCont = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 36.3px 0 85.8px 0;
  > p {
    margin-bottom: 29.5px;
  }
  > div {
    padding-top: 29.7px;
    display: flex;
    border-top: 1px solid #999;
    section {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      p {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: ${(props) => props.theme.gray02};
        &.bold {
          font-weight: 700;
          color: #000;
          font-size: 24px;
          line-height: 36px;
          letter-spacing: -0.6px;
        }
        &.primary {
          color: ${(props) => props.theme.primary};
        }
      }
    }
  }
`;
