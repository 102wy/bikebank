import styled, { css } from 'styled-components';
import AOS from 'aos';
import { useEffect } from 'react';

const ImgList = ({
  imgsrc,
  alt,
  title,
  desc1,
  desc2,
  desc3,
  width50,
  isApp,
  mobileImg,
  isMobile,
  aosDelay,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <List width50={width50} data-aos="fade-up" data-aos-delay={aosDelay}>
      {isMobile ? (
        <img src={mobileImg} alt={alt} />
      ) : (
        <img src={imgsrc} alt={alt} />
      )}
      <span>
        {title}
        <br />
        <p className="top">{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
      </span>
      <App isApp={isApp}>
        <button
          onClick={() =>
            window.open(
              `https://play.google.com/store/apps/details?id=com.bikebank.sharebike`
            )
          }
        ></button>
        <button
          onClick={() =>
            window.open(
              `https://apps.apple.com/kr/app/%EB%B0%94%EC%9D%B4%ED%81%AC%EB%B1%85%ED%81%AC-%EC%B0%A8%EB%9F%89%EA%B3%B5%EC%9C%A0/id1644014033`
            )
          }
        ></button>
      </App>
    </List>
  );
};

export default ImgList;

const List = styled.li`
  max-width: 33.3333%;
  width: 100%;
  box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  img {
    width: 100%;
  }
  span {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: 700;
    padding: 20px 30px 31px 30px;
    display: block;
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.45px;
      line-height: 28px;
      color: ${(props) => props.theme.gray02};
    }
  }
  ${(props) =>
    props.width50 &&
    css`
      max-width: 50%;
      span {
        padding: 20px 57px 29px 57px;
        p {
          &:last-child {
            display: none;
          }
        }
      }
    `}
  @media screen and (max-width: 1190px) {
    span {
      padding: 20px 0px 30px 30px;
      font-size: 22px;
      p {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    span {
      padding: 20px 0px 30px 15px;
      font-size: 20px;
      p {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    width: 100%;
    min-width: 305px;
    margin-bottom: 30px;
    span {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.45px;
      .top {
        margin-top: 11px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.56px;
      }
    }
  }
  ${(props) =>
    props.width50 &&
    css`
      span {
        padding: 20px 0px 29px 57px;
        p {
          &:last-child {
            display: block;
          }
        }
      }
    `}
`;

const App = styled.div`
  gap: 10px;
  align-items: center;
  margin: -7px 0 39px 36px;
  display: none;
  button {
    background: url('/images/btn_google.png') no-repeat center;
    width: 120px;
    height: 35px;
    background-color: #fff;
    box-shadow: 5px 0 10px 0 rgba(125, 125, 125, 0.16);
    border-radius: 4px;
    display: block;
    &:last-child {
      background: url('/images/btn_apple.png') no-repeat center;
      background-color: #fff;
    }
  }
  ${(props) =>
    props.isApp &&
    css`
      display: flex;
    `}
  @media screen and (max-width: 1190px) {
    margin: -10px 0 20px 20px;
  }
  @media screen and (max-width: 1000px) {
    button {
      width: 100px;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    margin: 0px 0 17.5px 20px;
  }
`;
