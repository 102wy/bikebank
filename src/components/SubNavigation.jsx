import React, { useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { PageWidth } from '../pages/Home/style';
import { mobileContext } from './../utils/mobileContext';

const SubNavigation = ({ navlist, pageRef }) => {
  const { isTop, scrollPosition, isMobile } = useContext(mobileContext);

  return (
    <Wrap isTop={isTop}>
      <PageWidth isCenter>
        <SubNav>
          {navlist.map((list, index) => (
            <SubNavList
              isMobile={isMobile}
              list={navlist}
              pageRef={pageRef}
              key={index}
              scrollPosition={scrollPosition}
              height={list.height + scrollPosition}
              onClick={() =>
                pageRef.current[index].scrollIntoView({ behavior: 'smooth' })
              }
            >
              {list.listname}
            </SubNavList>
          ))}
        </SubNav>
      </PageWidth>
    </Wrap>
  );
};

export default SubNavigation;

const Wrap = styled.div`
  background-color: #fff;
  height: 100px;
  width: 100%;
  box-shadow: 0 8px 15px 0 rgba(212, 212, 212, 0.16);
  z-index: 9;
  margin-bottom: 29px;
  ${(props) =>
    props.isTop &&
    css`
      position: fixed;
      top: 0;
    `}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    height: 60px;
    ${(props) =>
    props.isTop &&
    css`
        position: fixed;
        top: 50px;
        margin-bottom: 30px;
      `}
  }
`;

const SubNav = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
`;

const SubNavList = styled.li`
  font-size: 16px;
  line-height: 24px;
  border-radius: 21.5px;
  padding: 9px 37px 10px 37px;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s;
  &:nth-child(1) {
    background-color: #ffe182;
  }
  &:nth-child(2) {
    background-color: #fff;
  }
  &:nth-child(3) {
    background-color: #fff;
  }
  /* 스크롤 위치에 따른 컬러 변경
   */
  ${(props) => {
    if (
      props.scrollPosition < props.list[1].mobileHeight ||
      props.scrollPosition === 0
    ) {
      return css`
        &:nth-child(1) {
          background-color: #ffdd6d;
        }
        &:nth-child(2) {
          background-color: #fff;
        }
        &:nth-child(3) {
          background-color: #fff;
        }
      `;
    } else if (
      props.list[1].mobileHeight <= props.scrollPosition &&
      props.scrollPosition < props.list[2].mobileHeight
    ) {
      return css`
        &:nth-child(1) {
          background-color: #fff;
        }
        &:nth-child(2) {
          background-color: #ffdd6d;
        }
        &:nth-child(3) {
          background-color: #fff;
        }
      `;
    } else if (props.list[2].mobileHeight <= props.scrollPosition) {
      return css`
        &:nth-child(1) {
          background-color: #fff;
        }
        &:nth-child(2) {
          background-color: #fff;
        }
        &:nth-child(3) {
          background-color: #ffdd6d;
        }
      `;
    }
  }}
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    font-size: 14px;
    letter-spacing: -0.56px;
    font-weight: 500;
    border-radius: 22px;
    white-space:nowrap;
    width:100%;
    max-width:107px;
    max-height: 44px;
    padding: 0;
    line-height:44px;
    text-align:center;
  }
`;
