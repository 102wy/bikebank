import React from 'react';
import styled from 'styled-components';
const Service = ({ title, desc, margin, minHeight }) => {
    return (
        <ServiceList margin={margin} minHeight={minHeight}>
            <p className='title'>{title}</p>
            <p>{desc.split(`<br/>`).map((desc, index) => <React.Fragment key={index}>{desc}<br /></React.Fragment>)}</p>
        </ServiceList>
    );
};
export default Service;
const ServiceList = styled.li`
    display: flex;
    flex-direction: column;
    width: 50%;
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    border-radius: 15px;
    overflow: hidden;
    margin: ${props => props.margin};
    min-height: ${props => props.minHeight};
    .title {
        font-weight: 700;
        color: #000;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.6px;
        background-color: #ffe182;
        width: 100%;
        padding: 22px 0 21px 57px;
    }
    p{
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.45px;
        color: #5d5d5d;
        white-space: pre-wrap;
        padding: 21px 0 37px 57px;
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