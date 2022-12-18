import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const QuestionItem = ({ item }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <Wrap isToggle={toggle} onClick={() => setToggle((prev) => !prev)}>
            <Title isToggle={toggle}>
                {item.title}
            </Title>
            <Question isToggle={toggle}>
                {item.desc}
            </Question>
        </Wrap>
    );
};

export default QuestionItem;

const Wrap = styled.li`
    background-color: ${props => props.isToggle ? '#f8f8f8' : '#fff'}
`

const Title = styled.p`
    padding: 20px 56px;
    color: #5d5d5d;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    border-top: 1px solid #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:after {
        content: '';
        display: block;
        background: url('/images/btn_down.png') no-repeat center;
        width: 19.7px;
        height: 11.9px;
        background-size: contain;
        ${props => props.isToggle && css`
            background: url('/images/btn_up.png') no-repeat center;
        `}
    }
`

const Question = styled.p`
    padding: 38px 56px;
    white-space: pre-wrap;
    color: #5d5d5d;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    display: none;
    border-top: 1px solid #999;
    ${props => props.isToggle && css`
        display: flex;
    `}
`