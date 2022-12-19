import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { PageWidth } from '../pages/Home/style';
import { mobileContext } from '../utils/mobileContext';

const SubTitleSection = ({ title, background }) => {
  const { scrollPosition } = useContext(mobileContext);
  const [isTop, setTop] = useState(scrollPosition === 0 ? true : false);
  useEffect(() => {
    scrollPosition === 0 ? setTop(true) : setTop(false);
  }, [scrollPosition]);
  return (
    <Wrap isTop={isTop} background={background}>
      <PageWidth>
        <span>{title}</span>
      </PageWidth>
    </Wrap>
  );
};

export default SubTitleSection;

const Wrap = styled.div`
  background-color: ${props => props.background || '#ffdd6d'};
  width: 100%;
  span {
    font-size: 36px;
    line-height: 300px;
    letter-spacing: -0.9px;
    color: #434343;
    font-weight: 700;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    span {
      font-size: 18px;
      letter-spacing: -0.45px;
      line-height: 200px;
      color: #000;
      ${(props) =>
    props.isTop &&
    css`
          margin-top: 50px;
        `}
    }
  }
`;
