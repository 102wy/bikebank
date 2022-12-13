import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobileContext } from '../../utils/mobileContext';

const Footer = () => {
  const { isMobile } = useContext(mobileContext);
  return (
    <FooterStyle>
      <PageWidth>
        {isMobile ? (
          <FooterNav>
            <li>
              <Link to="/company">바이크뱅크</Link>
              <span></span>
            </li>
            <li>
              <Link to="/rent">렌트소개</Link>
              <span></span>
            </li>
            <li>
              <Link to="/sale">차량판매</Link>
              <span></span>
            </li>
            <li>
              <Link to="/customer">고객지원</Link>
              <span></span>
            </li>
            <li>
              <Link to="/recruit">채용</Link>
              <span></span>
            </li>
            <li onClick={() => window.open(`https://pf.kakao.com/_MSxhUs`)}>
              블로그
              <span></span>
            </li>
            <Address>
              <address>
                바이크뱅크 주식회사 <br />
                사업자 등록번호 : 171-86-01585 <br />
                대구광역시 달서구 성서공단로 11길 62, 5층 <br />
                고객센터 1522-9008
              </address>
              <Privacy
                onClick={() =>
                  window.open(`http://www.bikebank.kr/privacy.html`)
                }
              >
                개인정보처리방침
              </Privacy>
              <img src="/images/footer_logo.png" alt="바이크뱅크 하단로고" />
            </Address>
          </FooterNav>
        ) : (
          <>
            <FooterNav>
              <ul>
                <li>
                  <Link to="/company">바이크뱅크</Link>
                </li>
                <li>바이크뱅크</li>
                <li>편리한 기술</li>
                <li>이륜차 인프라</li>
              </ul>
              <ul>
                <li>
                  <Link to="/rent">렌트소개</Link>
                </li>
                <li>이용안내</li>
                <li>상품안내</li>
                <li>보장안내</li>
                <li>서비스 안내</li>
              </ul>
              <ul>
                <li>
                  <Link to="/sale">차량소개</Link>
                </li>
                <li>라인업</li>
                <li>보증정책</li>
                <li>서비스 안내</li>
              </ul>
              <ul>
                <li>
                  <Link to="/customer">고객지원</Link>
                </li>
                <li>서비스 문의</li>
                <li>서비스 네트워크</li>
                <li>자주 묻는 질문</li>
              </ul>
              <ul>
                <li>
                  <Link to="/recruit">채용</Link>
                </li>
                <li>채용안내</li>
              </ul>
              <ul>
                <li>Follow us</li>
                <li onClick={() => window.open(`https://pf.kakao.com/_MSxhUs`)}>
                  KaKao
                </li>
                <li
                  onClick={() =>
                    window.open(`https://blog.naver.com/gobikebank`)
                  }
                >
                  Blog
                </li>
              </ul>
            </FooterNav>
            <Address>
              <img src="/images/footer_logo.png" alt="바이크뱅크 하단로고" />
              <address>
                바이크뱅크 주식회사 | 사업자 등록번호 : 171-86-01585 |
                대구광역시 달서구 성서공단로 11길 62,5층 | 고객센터 1522-9008
              </address>
            </Address>
            <Privacy
              onClick={() => window.open(`http://www.bikebank.kr/privacy.html`)}
            >
              개인정보처리방침
            </Privacy>
          </>
        )}
      </PageWidth>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: ${(props) => props.theme.gray01};
  color: ${(props) => props.theme.white};
  padding: 50px 0 47.5px 0;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 20px 30px 31px 30px;
  }
`;

export const PageWidth = styled.div`
  max-width: 1194px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
  }
`;

const FooterNav = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  ul {
    display: flex;
    flex-direction: column;
    width: 16.666667%;
    li {
      line-height: 30px;
      letter-spacing: -0.4px;
      font-weight: 400;
      cursor: pointer;
      &:first-child:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #999;
        margin: 9px 0 8px 0;
      }
      a {
        color: ${(props) => props.theme.white};
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    li {
      border-bottom: 1px solid #707070;
      font-size: 14px;
      letter-spacing: -0.56px;
      line-height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:first-child:after {
        display: none;
      }
      a {
        color: white;
      }
      span {
        background: url('/images/arrow_footer.png') no-repeat;
        width: 9.1px;
        height: 15.1px;
        display: block;
        background-size: contain;
      }
    }
  }
`;

const Address = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
  margin: 80px 0 0 0;
  address {
    line-height: 20px;
    font-style: normal;
    text-align: right;
    cursor: default;
  }
  img {
    object-fit: contain;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    flex-direction: column;
    margin: 29.5px 0 23px 0;
    address {
      text-align: left;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: -0.3px;
      line-height: 20px;
    }
    img {
      height: 18px;
      width: 127px;
    }
  }
`;

const Privacy = styled.p`
  line-height: 20px;
  text-align: right;
  font-weight: 200;
  font-size: 14px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    padding: 20px 0;
  }
`;
