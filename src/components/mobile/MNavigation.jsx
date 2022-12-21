import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { mobileContext } from './../../utils/mobileContext';

const MNavigation = () => {
  const {
    navigationShow,
    setNavigationShow,
    navigationHide,
    setNavigationHide,
  } = useContext(mobileContext);

  // 네비게이션 숨기기
  const HandleHide = () => {
    setNavigationShow(false);
    setNavigationHide(true);
  };

  const navigate = useNavigate();
  return (
    <NavSection navigationShow={navigationShow} navigationHide={navigationHide}>
      <NavHeader>
        <button onClick={HandleHide}></button>
        <img src="/images/mobile_logo.png" alt="바이크 뱅크 로고" />
      </NavHeader>
      <NavList>
        <li
          onClick={() => {
            navigate(`/company`);
            setNavigationHide(true);
          }}
        >
          회사소개<i></i>
        </li>
        <li
          onClick={() => {
            navigate(`/rent`);
            setNavigationHide(true);
          }}
        >
          렌트소개<i></i>
        </li>
        <li
          onClick={() => {
            navigate(`/sale`);
            setNavigationHide(true);
          }}
        >
          차량판매<i></i>
        </li>
        <li
          onClick={() => {
            navigate(`/customer`);
            setNavigationHide(true);
          }}
        >
          고객지원<i></i>
        </li>
        <li
          onClick={() => {
            navigate(`/recruit`);
            setNavigationHide(true);
          }}
        >
          채용<i></i>
        </li>
        <li
          onClick={() => {
            window.open(`https://blog.naver.com/gobikebank`);
            setNavigationHide(true);
          }}
        >
          블로그<i></i>
        </li>
      </NavList>
    </NavSection>
  );
};

export default MNavigation;
const ShowAnimation = keyframes`
  0%{
    left: -100%
  }
  100%{
    left: 0%;
  }
`;

const HideAnimation = keyframes`
  0%{
    left: 0%
  }
  100%{
    left: -100%;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  left: -100%;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  ${(props) =>
    props.navigationShow &&
    css`
      animation: ${ShowAnimation} 0.5s ease;
      transform: all 0.5s;
      left: 0;
    `};
  ${(props) =>
    props.navigationHide &&
    css`
      animation: ${HideAnimation} 0.5s ease;
      transform: all 0.5s;
      left: -100%;
    `};
`;

const NavHeader = styled.header`
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 29.7px;
  button {
    width: 16px;
    height: 16px;
    background: url('/images/mobile_close.png') no-repeat center;
    img {
      object-fit: cover;
    }
  }
`;

const NavList = styled.ul`
  border-bottom: 1px solid #e1e1e1;
  width: 100%;
  li {
    font-size: 18px;
    letter-spacing: -0.45px;
    line-height: 76px;
    font-weight: 500;
    border-bottom: 1px solid #e1e1e1;
    margin: 0 15px 0 15.5px;
    display: flex;
    justify-content: space-between;
    i {
      background: url('/images/menu_arrow.png') no-repeat center;
      width: 6.7px;
      background-size: contain;
    }
    &:last-child {
      border: none;
    }
  }
`;
