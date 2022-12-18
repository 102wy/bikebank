import React, { useContext } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { mobileContext } from '../../utils/mobileContext';

const RscCaseItem = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const { isMobile } = useContext(mobileContext);
  return (
    <>
      <Wrap
        key={item.id}
        onClick={() => setToggle(prev => !prev)}
      >
        <Title isToggle={toggle}>
          [사례{item.id}] {item.title}
        </Title>
      </Wrap>
      <RscCaseCont isToggle={toggle}>{item.children.map(children => <React.Fragment key={children.id}>
        <p>{children.desc}</p>
        <div>
          <section>
            <p>일반 책임보험 차량 이용시</p>
            <p className="bold">{children.normalPrice}</p>
          </section>
          <section>
            <p className="primary">바이크뱅크 RCS 차량 이용시</p>
            <p className={isMobile ? "boldB" : "bold primary"}>{children.RSCprice}</p>
          </section>
        </div>
      </React.Fragment>)}</RscCaseCont>
    </>
  );
};

export default RscCaseItem;

const Wrap = styled.li`
  cursor: pointer !important;
  background-color: #fff;
  position: relative;
`;

const Title = styled.p`
  border-top: 1px solid #999;
  line-height: 82px;
  font-size: 24px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.isToggle &&
    css`
        border-bottom: 1px solid #999;
      `}
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
  @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    font-size:15px;
    line-height:22px;
    letter-spacing:-0.6px;
    padding: 9.5px 0 38.5px 0;
    font-weight:bold;
    color: #272727;
    &:after {
      background: url('/images/mobile_btn_down.png') no-repeat center;
      background-size: cover;
      width: 8px;
      height:5px;
      position:absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    ${(props) =>
    props.isToggle &&
    css`
        background: url('/images/mobile_btn_up.png') no-repeat center;
        background-size: cover;
    `}
    }
  }
`;

const RscCaseCont = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 36.3px 0 85.8px 0;
  display: none;
  > p {
    margin-bottom: 29.5px;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    white-space: pre-wrap;
    cursor: pointer !important;
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
  ${props => props.isToggle && css`
    display: block;
  `}
  @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    padding: 10px 20px 25px 20px;
    >p {
      font-size: 15px;
      line-height:24px;
      letter-spacing:-0.6px;
      padding: 0 33.5px 0 0;
      color:#5d5d5d;
      margin-bottom: 26.5px;
    }
    >div {
      flex-direction: column;
      padding-top: 0;
      section {
        width: 100%;
        gap: 10px;
        padding: 30px 0;
        &:first-child {
          border-bottom: 1px solid #999;
        }
        p {
          color: #000;
          font-size:16px;
          line-height:26px;
          letter-spacing:-0.64px;
          white-space: pre-wrap;
          &.bold {
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.45px;
            color: #5d5d5d;
          }
          &.primary {
            color: ${props => props.theme.primary};
          }
          &.boldB {
            color: #000;
            font-weight:700;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.45px;
          }
        }
      }
    }
  }
`;