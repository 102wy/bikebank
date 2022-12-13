import styled, { css } from 'styled-components';

export const Visual = styled.main`
  width: 100%;
  height: 970px;
  background: url('/images/main_visual_bg_01.jpg') no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    max-height: 570px;
    background-size: cover;
  }
`;

export const PageWidth = styled.div`
  max-width: 1194px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '0'};
  img {
    margin: ${(props) => props.imgMargin || ''};
  }
  justify-content: ${(props) => props.isCenter && 'center'};
  ${(props) =>
    props.isMain &&
    css`
      max-width: ${(props) => props.theme.contentWidth};
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding-left: 30px;
    gap: ${props => props.gap || '30px'};
  }
  .infraImg {
    margin: 0 auto;
    width: 100%;
    max-width: 933px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
      padding-right: 15px;
      margin-left: -15px;
    }
  }
  .rentImg {
    box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 38px 57px;
    border-radius: 15px;
    width:100%;
    img{
      width:100%;
    }
  }
  .rscdesc {
    text-align: right;
    color: #999;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.4px;
    margin: 16px 0 10px 0;
  }
  .rscSubtitle {
    font-size:16px;
    line-height:22px;
    letter-spacing:-0.64px;
    color: #272727;
    margin: 10px 0 30px 0;
    font-weight:700;
  }
`;

export const Title = styled.p`
  font-size: 60px;
  line-height: 75px;
  letter-spacing: -1.5px;
  color: white;
  span {
    font-weight: 600;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Button = styled.button`
  border-radius: 32.5px;
  background-color: ${(props) => props.background || '#ffce30'};
  padding: 19px 40px;
  font-weight: 500;
  font-size: 19px;
  max-width: ${(props) => props.maxWidth || '227.5px'};
  margin-bottom: ${(props) => props.mb || '151px'};
  color: ${(props) => props.color || '#000'};
  ${(props) =>
    props.isCenter &&
    css`
      margin: 0 auto;
      padding: 19px 78.5px;
    `}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    margin-bottom: 60px;
    border-radius: 22px;
    padding: ${props => props.padding || '11px 18px'};
    font-size: 14px;
  }
`;

export const Section = styled.section`
  padding: ${(props) => props.padding || ''};
  background-color: ${(props) => props.background || 'white'};
  border-bottom: ${(props) => props.borderBt && '1px solid #e1e1e1'};
  background-image: ${(props) => props.backgroundImg || ''};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    .imgWidth100 {
      width: 100%;
      padding: ${(props) => props.imgPadding || ''};
    }
  }
`;

export const SolutionUl = styled.ul`
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: scroll;
  li {
    width: 31%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    p {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: -0.5px;
      color: ${(props) => props.theme.black};
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    gap: 10px;
    li {
      width: 335px;
      img {
        height: 280px;
        object-fit: cover;
      }
      p {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.64px;
        color: ${(props) => props.theme.gray02};
        margin-left: 30px;
      }
    }
  }
`;

export const CountUpList = styled.ul`
  display: flex;
  margin-top: 20px;
  li {
    width: 33.33333%;
    p {
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.6px;
      font-weight: 500;
      color: ${(props) => props.theme.primary};
    }
    span {
      font-size: 70px;
      line-height: 84px;
      letter-spacing: -1.75px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    flex-direction: column;
    padding: 30px;
    li {
      width: 100%;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 23px;
      p {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.72px;
        margin: 20px 0 10px 0;
      }
      span {
        font-size: 42px;
        line-height: 33px;
        letter-spacing: -1.05px;
      }
    }
  }
`;

export const CheckPointList = styled.ul`
  display: flex;
  gap: 24px;
  color: white;
  li {
    width: 33.33333%;
    font-size: 24px;
    line-height: 28px;
    p {
      font-weight: 700;
      &:first-child {
        font-family: 'SF Pro Display';
        font-weight: 700;
        letter-spacing: -0.6px;
        &:after {
          content: '';
          width: 100%;
          display: block;
          height: 2px;
          background-color: white;
          margin: 8px 0 10px 0;
        }
      }
      &:last-child {
        font-size: 18px;
        letter-spacing: -0.45px;
        margin-top: 4.5px;
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    flex-direction: column;
    margin: 0 30px;
    gap: 37px;
    li {
      width: 100%;
      font-size: 20px;
      line-height: 30px;
      p {
        &:first-child {
          line-height: 28px;
        }
        &:last-child {
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.64px;
          font-weight: 500;
        }
      }
    }
  }
`;

export const InsuranceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 50px 0 62px 0;
  ul {
    display: flex;
    gap: 24px;
    width: 100%;
    li {
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      gap: 4px;
      box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
      align-items: center;
      padding: 51px 0;
      border-radius: 15px;
      p {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.6px;
      }
      span {
        color: ${(props) => props.theme.primary};
        font-size: 38px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: -0.95px;
      }
    }
  }
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #999;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 0 30px;
    margin: 0;
    &:after {
      display: none;
    }
    ul {
      flex-direction: column;
      li {
        width: 100%;
        box-shadow: none;
        align-items: flex-start;
        gap: 5px;
        border-bottom: 1px solid #e1e1e1;
        padding: 20px 0 23px 0;
        border-radius: 0;
        p {
          color: ${(props) => props.theme.primary};
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.72px;
        }
        span {
          color: #000;
          font-size: 38px;
          letter-spacing: -0.95px;
          line-height: 55px;
        }
      }
    }
  }
`;

export const InsuranceSubtitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.6px;
  margin-bottom: 32.5px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => props.theme.gray02};
    letter-spacing: -0.64px;
    font-weight: 400;
    margin: 32px 0 0 31px;
  }
`;

export const RCSList = styled.ul`
  display: flex;
  gap: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
    p {
      font-size: 30px;
      font-weight: 500;
      line-height: 42px;
      text-align: center;
      color: ${(props) => props.theme.gray02};
      width: 100%;
      &:first-child {
        font-size: 26px;
        background-color: ${(props) => props.theme.gray02};
        color: white;
        padding: 34.5px 57.5px;
        width: 100%;
        margin-bottom: 30.7px;
      }
      &:last-child {
        font-size: 26px;
        color: ${(props) => props.theme.gray02};
        margin: 29.5px 57.5px 0 57.5px;
        line-height: 97.1px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &:before {
          content: '';
          height: 1px;
          width: 80%;
          min-width: 54.5px;
          background-color: ${(props) => props.theme.gray02};
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        &:after {
          content: '';
          background: url('/images/after_guar.png') no-repeat center;
          background-size: contain;
          width: 9.5px;
          height: 15.8px;
          display: block;
          margin-left: 20px;
        }
      }
      span {
        font-size: 44px;
        line-height: 52px;
        letter-spacing: -1.1px;
      }
    }
    &:first-child {
      p {
        &:first-child {
          background-color: #0c76d2;
        }
        &:nth-child(2) {
          color: #0c76d2;
        }
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    gap: 30px;
    li {
      p {
        &:last-child {
          font-size: 22px;
          &:after {
            margin-left: 10px;
            width: 8.5px;
            height: 14px;
            margin-top: 1px;
          }
        }
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    width: 100%;
    flex-wrap: nowrap;
    overflow: scroll;
    gap: 9px;
    padding: 10px 30px 100px 30px;
    justify-content: space-between;
    li {
      min-width: 306px;
      p {
        font-size: 22px;
        line-height: 32px;
        &:first-child {
          font-size: 18px;
          line-height: 54px;
          letter-spacing: -0.45px;
          padding: 0;
        }
        &:last-child {
          font-size: 16px;
          line-height: 55px;
          letter-spacing: -0.64px;
          padding: 0 33px;
          margin-top: 14.5px;
          &:after {
            background: url('/images/arrow_rcs.png') no-repeat center;
            background-size: contain;
            width: 6.6px;
            height: 10.9px;
            margin-left: 10px;
          }
        }
      }
      span {
        font-size: 35px;
        line-height: 46px;
        letter-spacing: -0.88px;
      }
    }
  }
`;

export const Area = styled.div`
  max-width: 1284px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
  .rscdesc{
        text-align: left;
        width: 100%;
        color: #272727;
        font-weight: 700;
        line-height: 22px;
        font-size: 16px;
        letter-spacing: -0.64px;
        padding: 30px 0 30px 30px;
        span {
          color: #d60000;
        }
      }
  ${(props) =>
    props.isMain &&
    css`
      max-width: 1170px;
      
    `}
`;

export const HomePriceDesc = styled.p`
  text-align: right;
  margin-top: 8.5px;
`;
