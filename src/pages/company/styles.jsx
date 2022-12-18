import styled, { css } from 'styled-components';

export const CompanyListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 27px;
  width: 100%;
  @media screen and (max-width: 1190px) {
    gap: 15px;
  }
  @media screen and (max-width: 1000px) {
    gap: 10px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    margin-top: 20px;
    gap: 10px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CompetitionList = styled.ul`
  display: grid;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  gap: 0 21px;
  margin-top: 59px;
  li {
    border-top: 1px solid black;
    padding: 19.5px 0 49.5px 0;
    p {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.45px;
      color: ${(props) => props.theme.gray02};
      &:first-child {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.6px;
        color: black;
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    li {
      padding: 11.5px 0 35.5px 0;
      margin-right: 30px;
      p {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.56px;
        &:first-child {
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.4px;
        }
      }
    }
  }
`;

export const ChallengeList = styled.ul`
  display: grid;
  width: 100%;
  max-width: 1080px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  margin-top: -22px;
  li {
    p {
      font-size: 20px;
      line-height: 40px;
      letter-spacing: -0.5px;
      color: ${(props) => props.theme.gray02};
      &:first-child {
        color: ${(props) => props.theme.primary};
        font-size: 72px;
        letter-spacing: -2.88px;
        font-weight: 700;
        line-height: 86px;
        &:after {
          content: '';
          display: block;
          width: 100%;
          max-width: 314px;
          height: 2px;
          background-color: ${(props) => props.theme.primary};
          margin: 30.5px 0;
        }
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: flex;
    overflow: scroll;
    gap: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
    li {
      min-width: 255px;
      p {
        font-size: 14px;
        line-height: 32px;
        letter-spacing: -0.56px;
        &:first-child {
          font-size: 30px;
          line-height: 30px;
          letter-spacing: -1.5px;
          &:after {
            margin: 9px 0 19px 0;
          }
        }
      }
    }
  }
`;

export const Arealist = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  li {
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
      width: 100%;
    }
    p {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.45px;
      color: ${(props) => props.theme.gray02};
    }
  }
  ${(props) =>
    props.isScroll &&
    css`
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      gap: 10px;
      li {
        min-width: 335px;
        width: 100%;
        p {
          font-size: 14px;
          line-height: 22px;
          letter-spacing: -0.56px;
          padding-left: 30px;
        }
      }
    `}
`;
