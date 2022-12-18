import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { mobileContext } from '../../utils/mobileContext';

const GoTop = () => {
  const { scrollPosition } = useContext(mobileContext);
  const [isTop, setIsTop] = useState();
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    scrollPosition <= 0 ? setIsTop(true) : setIsTop(false);
  }, [scrollPosition]);
  return <Wrap onClick={handleScrollTop} isTop={isTop}></Wrap>;
};

export default GoTop;

const Wrap = styled.button`
  width: 60px;
  height: 60px;
  background: url('/images/go_top.png') no-repeat center;
  background-size: contain;
  position: fixed;
  right: 5%;
  bottom: 2%;
  z-index: 9;
  opacity: 1;
  transition: all 0.5s ease;
  ${(props) =>
    props.isTop &&
    css`
      opacity: 0;
    `}
`;
