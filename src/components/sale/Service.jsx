import React from 'react';
import styled from 'styled-components';
const Service = ({ title, desc }) => {
    return (
        <ServiceList>
            <p className='title'>{title}</p>
            <p>{desc}</p>
        </ServiceList>
    );
};
export default Service;
const ServiceList = styled.li`
    display: flex;
    padding: 10px 57px 63px 10px;
    border-top: 1px solid #999;
    .title {
        font-weight: 700;
        color: #000;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.6px;
    }
    p{
        width: 50%;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.45px;
        color: #5d5d5d;
        white-space: pre-wrap;
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding: 19px 0 20px 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-top: 1px solid #e1e1e1;
        &:last-child {
            border-bottom: 1px solid #e1e1e1;
        }
        .title {
            font-size: 18px;
            letter-spacing: -0.45px;
            line-height: 26px;
        }
        p {
            font-size: 16px;
            letter-spacing: -0.64px;
            line-height: 26px;
        }
    }
`