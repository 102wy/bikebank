import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mobileContext } from './../../utils/mobileContext';
import MNavigation from './../mobile/MNavigation';

const Header = () => {
  const { isMobile, setNavigationShow, setNavigationHide, isMain } =
    useContext(mobileContext);
  const navigate = useNavigate();
  const handleShow = () => {
    setNavigationShow(true);
    setNavigationHide(false);
  };
  return (
    <HeaderStyle isMain={isMain} isMobile={isMobile}>
      <PageWidth>
        {/* 모바일 화면 */}
        {isMobile ? (
          <>
            <MNavigation />
            <img
              src="/images/mobile_logo.png"
              alt="바이크뱅크 로고"
              onClick={() => navigate(`/`)}
            />
            <Navigation>
              <button>
                <img
                  src="/images/btn_menu.png"
                  alt="버튼이미지"
                  onClick={handleShow}
                />
              </button>
            </Navigation>
          </>
        ) : (
          // 웹 화면
          <>
            <img
              src="/images/logo.png"
              alt="바이크뱅크 로고"
              onClick={() => navigate(`/`)}
            />
            <Navigation>
              <ul>
                <li>
                  <Link to="/company">회사소개</Link>
                </li>
                <li>
                  <Link to="/rent">렌트소개</Link>
                </li>
                <li>
                  <Link to="/sale">차량판매</Link>
                </li>
                <li>
                  <Link to="/customer">고객지원</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/recruit">채용</Link>
                </li>
                <li
                  onClick={() =>
                    window.open(`https://blog.naver.com/gobikebank`)
                  }
                >
                  블로그
                </li>
              </ul>
            </Navigation>
          </>
        )}
      </PageWidth>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  padding: 38px 0;
  border-bottom: 1px solid rgb(225, 225, 225);
  background-color: #fff;
  position: relative;
  display: block;
  ${(props) =>
    props.isMain &&
    css`
      position: fixed;
      top: 0;
      z-index: 99;
    `};
  ${(props) =>
    props.isMobile &&
    css`
      position: fixed;
      top: 0;
      z-index: 99;
    `};
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    height: 50px;
    padding: 0;
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
  }
`;

const PageWidth = styled.div`
  max-width: 1194px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 77px;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 0 30px;
    img {
      max-height: 13px;
    }
  }
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 84px;
    li {
      font-weight: 400;
      cursor: pointer;
      a {
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    ul {
      gap: 40px;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    justify-content: flex-end;
    button {
      img {
        width: 19px;
      }
    }
  }
`;
