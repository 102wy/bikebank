import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { PageWidth } from '../../pages/home/styles';
import { mobileContext } from '../../utils/mobileContext';

const SubTitleSection = ({ title, background, color, desc }) => {
  const { scrollPosition } = useContext(mobileContext);
  const [isTop, setTop] = useState(scrollPosition === 0 ? true : false);
  useEffect(() => {
    scrollPosition === 0 ? setTop(true) : setTop(false);
  }, [scrollPosition]);
  return (
    <Wrap isTop={isTop} background={background} color={color}>
      <PageWidth>
        <p><span>{title}</span>{desc && desc}</p>
      </PageWidth>
    </Wrap>
  );
};

export default SubTitleSection;

const Wrap = styled.div`
  background-color: ${props => props.background || '#ffdd6d'};
  width: 100%;
  p {
    font-size: 36px;
    color: #272727;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    span {
    font-size: 36px;
    line-height: 54px;
    letter-spacing: -0.9px;
    color: ${props => props.color || '#434343'};
    font-weight: 700;    
    display: block;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    p {
      font-size: 18px;
      letter-spacing: -0.45px;
      color: #000;
      height: 200px;
      font-weight: 700;
        span {
        font-size: 18px;
        letter-spacing: -0.45px;
        color: #000;
        line-height: 32px;
        }
      ${(props) =>
    props.isTop &&
    css`
          margin-top: 50px;
        `}
    }
    }
`;
