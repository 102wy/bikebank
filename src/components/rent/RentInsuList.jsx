import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { mobileContext } from '../../utils/mobileContext';

const RentInsuList = ({ item }) => {
    // 토글 유무 확인
    const [toggle, setToggle] = useState(false);
    // 모바일 유무 확인
    const { isMobile } = useContext(mobileContext);

    return (
        <Wrap onClick={() => setToggle(prev => !prev)}>
            <Title isToggle={toggle}>{item.title}</Title>
            <Desc isToggle={toggle}>
                <p>{item.desc}</p>
                {item.table && (
                    <table cellSpacing={'0'}>
                        <thead>
                            <tr>
                                <td>42일~69일 진단시</td>
                                <td>70일~139일 진단시</td>
                                <td>140일 이상 진단시</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1천만원</td>
                                <td>2천만원</td>
                                <td>3천만원</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {item.desc2 && <p>{item.desc2}</p>}
            </Desc>
        </Wrap>
    );
};

export default RentInsuList;

const Wrap = styled.li`
    table {
        margin: 50px 0;
        width: 100%;
        thead {
            background-color: #e1e1e1;
            tr {
                td {
                    border-bottom: 0;
                }
            }
        }
        tr {
            td {
                font-size: 22px;
                line-height: 42px;
                letter-spacing: -0.55px;
                color: #5d5d5d;
                text-align: center;
                width: 33.3333%;
                border: 1px solid #999;
                &:first-child {
                    border-right: 0;
                }
                &:nth-child(2) {
                    border-right: 0;
                }
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        table {
            tr {
                td {
                    font-size: 16px;
                    color: #000;
                    line-height: 27px;
                }
            }
        }
    }
`

const Title = styled.p`
    border-bottom: 1px solid #999;
    font-size: 24px;
    line-height: 84px;
    letter-spacing: -0.6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:after {
        content: '';
        display: block;
        background: url('/images/btn_down.png') no-repeat center;
        width: 21px;
        height: 13px;
        margin-right: 40px;
        ${props => props.isToggle && css`
            background: url('/images/btn_up.png') no-repeat center;
        `}
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.6px;
        color: #272727;
        height: 69px;
        display: block;
        position: relative;
        padding-top: 10px;
        &:after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 2%;
            margin: 0;
            background: url('/images/mobile_btn_down.png') no-repeat center;
            width: 8px;
            height: 5px;
            background-size: cover;
        }
    }
`
const Desc = styled.div`
    padding: 72px 40px 68px 40px;
    border-bottom: 1px solid #999;
    display: none;
    p {
        white-space: pre-wrap;
        font-size: 22px;
        line-height: 42px;
        letter-spacing: -0.55px;
        color: #5d5d5d;
    }
    ${props => props.isToggle && css`
        display: block;
    `}
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding: 19px 10.5px 59px 0;
        p{
            font-size: 16px;
            line-height: 26px;
            letter-spacing: -0.64px;
            color: #999;
        }
    }
`