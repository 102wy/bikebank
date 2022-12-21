import React from 'react';
import styled, { css } from 'styled-components';
import { Desc } from '../home/HomeSectionTitle';

const TitleList = ({
  number,
  subtitle,
  bold,
  bold2,
  desc1,
  desc2,
  desc3,
  nonSubtitle,
  noneNum,
  noDesc,
  isMobile,
  descright
}) => {
  return (
    <Wrap nonSubtitle={nonSubtitle} isMobile={isMobile}>
      <Number noneNum={noneNum}>{number}</Number>
      <span>
        {subtitle}
        <p>{bold}</p>
        <p>{bold2}</p>
      </span>
      <DescWrap noDesc={noDesc}>
        <Desc descright={descright}>{desc1}</Desc>
        <Desc>{desc2}</Desc>
        <Desc>{desc3}</Desc>
      </DescWrap>
    </Wrap>
  );
};

export default TitleList;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 38px;
    letter-spacing: -0.95px;
    p {
      font-weight: 700;
      letter-spacing: -0.95px;
      &:last-child {
        display: none;
        ${(props) =>
    props.isMobile &&
    css`
            display: block;
          `}
      }
    }
  }
  ${(props) =>
    props.nonSubtitle &&
    css`
      span {
        font-size: 0;
        p {
          font-size: 38px;
        }
      }
    `}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 0;
    span {
      font-size: 22px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: -1.1px;
      margin-bottom: 10px;
    }
  }
`;

const Number = styled.p`
  font-size: 100px;
  line-height: 119px;
  letter-spacing: -2.5px;
  margin-bottom: 82px;
  font-family: 'sf' !important;
  font-weight: bold !important;
  ${(props) =>
    props.noneNum &&
    css`
      font-size: 0;
      line-height: 0;
      margin-bottom: 0!important;
    `}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    font-size: 50px;
    line-height: 60px;
    letter-spacing: -2.5px;
    font-weight: bold;
    margin-bottom: 55px;
  }
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 0 50px 0;
  span {
    line-height: 32px;
  }
  ${(props) =>
    props.noDesc &&
    css`
      display: none;
      padding: 0;
      span {
        line-height: 0;
      }
    `}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 10px 0 0 0;
    span {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.64px;
      font-weight: 400;
      margin: 0;
    }
  }
`;
