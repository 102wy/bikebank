import styled, { css } from 'styled-components';

export const RentList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 57.5px;
  margin-bottom: 49.5px;
  li {
    display: flex;
    border-bottom: 1px solid #000;
    align-items: center;
    gap: 107.5px;
    padding-left: 20.5px;
    padding: 36px 0;
    p {
      white-space: pre-wrap;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.45px;
      color: ${(props) => props.theme.gray02};
      span {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.6px;
        font-weight: 700;
        color: #000;
      }
      &.number {
        border-radius: 48px;
        height: 48px;
        width: 48px;
        background-color: ${(props) => props.theme.gray01};
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-family: 'sf';
      }
    }
  }
  /* 모바일 일때 */
  ${props => props.isMobile && css`
    margin: 0 30px 0 0;
    li {
      border-bottom: 1px solid #e1e1e1;
      gap: 12px;
      padding: 29px 0;
      p {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.56px;
      span {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.45px;
      }
      &.number {
        min-width: 28px;
        max-width: 28px;
        height: 28px;
        line-height: 30px;
        border-radius: 28px;
      }
      }
    }
  `}
`;

export const RentOptionList = styled.ul`
  display: flex;
  gap: 25px;
  li {
    width: ${(props) => props.width || '25%'};
    font-size: 22px;
    letter-spacing: -0.55px;
    padding: 24px 34px;
    cursor: pointer;
    box-shadow: 5px 0 30px 0 rgba(191, 191, 191, 0.16);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.active {
      background-color: #ffe182;
    }
    &:after {
      content: '';
      background: url('/images/tab_arrow.png') no-repeat center;
      background-size: cover;
      width: 12.8px;
      height: 7.7px;
      display: block;
    }
  }
`;

export const RnetOptionCont = styled.div`
  min-height: 630px;
  max-width: 1194px;
  box-shadow: 5px 0 30px 0 rgba(191, 191, 191, 0.16);
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    margin-top: 36px;
    width: 100%;
    max-width: 1194px;
  }
  padding: 0 55px;
`;

export const RcsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1160px){
    gap: 20px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    gap: 10px;
    overflow: scroll;
    justify-content: flex-start;
    padding-right: 30px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

// RSC 왼쪽부분
export const RscCont = styled.div`
  box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  max-width: 572px;
  height: 550px;
  div {
    padding: 29px 0 57px 36px;
    height: 100%;
    p {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.45px;
      color: ${(props) => props.theme.gray02};
      &:first-child {
        color: #000;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.6px;
        font-weight: 700;
        margin-bottom: 22px;
      }
      &:last-child {
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width: 900px){
    div {
      p {
        font-size: 16px;
        &:first-child {
        margin-bottom: 30px;
      }
        &:last-child {
        margin-top: 80px;
      }
      }
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    height: 330px;
    margin-bottom: 170px;
    min-width: 305px;
    max-width: 305px;
    div {
      padding: 10px 0 0px 20px;
      p{
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.3px;
        &:first-child{
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.45px;
          margin-bottom: 10px;
        }
        &:last-child {
          margin-top: 14px;
        }
      }
    }
  }
`;

// RSC 오른쪽 부분
export const RscSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50%;
  height: 550px;
  max-width: 572px;
  max-height: 550px;
  @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    background-color: #fff;
    justify-content: flex-start;
    border-radius: 10px;
    height: 330px;
    padding: 30px 20px 0 20px;
    min-width: 305px;
    max-width: 305px;
  }
`;


export const RscDesc = styled.div`
  padding: 40px 0 50px 47px;
  box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
  background-color: #fff;
  width: 100%;
  height: 50%;
  max-width: 572px;
  max-height: 250px;
  border-radius: 15px;
  p {
    font-size: 20px;
    color: ${(props) => props.theme.gray02};
    line-height: 32px;
    letter-spacing: -0.5px;
    &.bold {
      font-weight: 700;
      color: #434343;
      margin: 10px 0 20px 0;
      font-size: 24px;
      letter-spacing: -0.6px;
      line-height: 40px;
    }
    &.primarybold {
      color: ${(props) => props.theme.primary};
      font-weight: 700;
      margin: 10px 0 20px 0;
      font-size: 24px;
      letter-spacing: -0.6px;
      line-height: 40px;
    }
    &:last-child {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.45px;
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    box-shadow: 0;
    gap: 0;
    box-shadow: none;
    padding: 0;
    height: 50%;
    p{
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.64px;
      color: #999;
      &.bold {
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.45px;
        color: #000;
        margin: 10px 0;
      }
      &.primarybold {
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.45px;
        color: ${props => props.theme.primary};
      }
      &:last-child {
      font-size: 14px;
      letter-spacing: -0.45px;
      color: ${props => props.theme.gray02};
      text-align: right;
    }
    }
  }
  &:first-child:after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${props => props.theme.gray02};
      display: block;
      margin-top: 10px;
    }
`;

export const RscCaseList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 49.5px;
  border-bottom: 1px solid #999;
`;
