import React from 'react';
import styled from 'styled-components';
import { Desc } from './HomeSectionTitle';

const HomeCheckList = ({ title1, title2, number, desc1, desc2, margin }) => {
  return (
    <HomeCheckTitle margin={margin}>
      <TitleWrap>
        <p>
          {title1}
          <br />
          {title2}
        </p>
        <p>{number}</p>
      </TitleWrap>
      <Desc>{desc1}</Desc>
      <Desc>{desc2}</Desc>
    </HomeCheckTitle>
  );
};

export default HomeCheckList;

const HomeCheckTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin};
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 0 30px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  p {
    font-size: 38px;
    font-weight: 700;
    letter-spacing: -0.95px;
    line-height: 52px;
    &:last-child {
      font-family: 'sf' !important;
      font-weight: 700;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    flex-direction: column-reverse;
    margin-bottom: 10px;
    gap: 10px;
    p {
      font-size: 22px;
      line-height: 30px;
      letter-spacing: -1.1px;
      &:last-child {
        font-size: 30px;
        letter-spacing: -1.5px;
      }
    }
  }
`;
