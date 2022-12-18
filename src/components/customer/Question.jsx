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
    background-color: ${props => props.isToggle ? '#f8f8f8' : '#fff'};
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        margin-right: 30px;
    }
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
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        border-top: 1px solid #000;
        padding: 14px 15px 39px 0;
        color: #000;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.6px;
        font-weight: 700;
        position: relative;
        &:after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            content: '';
            display: block;
            background: url('/images/mobile_btn_down.png') no-repeat center;
            width: 7.7px;
            height: 4.6px;
            background-size: cover;
            ${props => props.isToggle && css`
                background: url('/images/mobile_btn_up.png') no-repeat center;
                width: 7.7px;
                height: 4.6px;
                background-size: cover;
            `}
    }
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
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding: 17px 20px;
        font-size: 15px;
        letter-spacing: -0.6px;
        line-height: 24px;
    }
`