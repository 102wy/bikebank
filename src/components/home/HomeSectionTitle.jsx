import React from 'react';
import styled, { css } from 'styled-components';

const HomeSectionTitle = ({
  title,
  subtitle,
  desc1,
  desc2,
  bold,
  subcolor,
  width,
  sbblod,
  color,
}) => {
  return (
    <SectionTitle
      subcolor={subcolor}
      width={width}
      sbblod={sbblod}
      color={color}
    >
      <h2>{title || ''}</h2>
      <p>
        {subtitle || ''}
        <br />
        <span>{bold || ''}</span>
      </p>
      <Desc>{desc1 || ''}</Desc>
      <br />
      <Desc>{desc2 || ''}</Desc>
    </SectionTitle>
  );
};

export default HomeSectionTitle;
const SectionTitle = styled.div`
  width: 100%;
  h2 {
    color: ${(props) => props.color || '#ffce30'};
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -1.9px;
    margin: ${(props) => props.margin || '20px 0 21.5px 0'};
    position: relative;
    color: ${(props) => props.subcolor || '#000'};
    font-weight: ${(props) => props.sbblod && '700'};
    &::after {
      content: '';
      max-width: 345px;
      width: ${(props) => props.width || '100%'};
      height: 3px;
      background-color: ${(props) => props.theme.primary};
      position: absolute;
      right: 0;
      top: 0;
    }
    span {
      font-weight: 700;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding-left: 30px;
    h2 {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.35px;
    }
    p {
      font-size: 22px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: -1.1px;
      margin: 10px 0;
      &::after {
        display: none;
      }
    }
  }
`;

export const Desc = styled.span`
  font-size: 20px !important;
  letter-spacing: -0.5px;
  line-height: 26px;
  color: ${(props) => props.color || '#5d5d5d'};
  margin: ${(props) => props.margin || ''};
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    font-size: 16px !important;
    letter-spacing: -0.64px;
    line-height: 24px;
    display: block;
    ${props => props.descright && css`
    text-align: right;
    padding-right: 29px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.56px;
  `}
  }
`;
