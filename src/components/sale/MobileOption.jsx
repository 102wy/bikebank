import React from 'react';
import styled from 'styled-components';

const MobileOption = ({ title1, desc1, title2, desc2, color }) => {
    return (
        <>
            <Wrap color={color}>
                <div></div>
                <li>
                    <p className='title'>{title1}</p>
                    {desc1.split(`<br/>`).map(desc => <p>{desc}<br /></p>)}
                </li>
                <hr />
                <li>
                    <p className='title'>{title2}</p>
                    {desc2.split(`<br/>`).map(desc => <p>{desc}<br /></p>)}
                </li>
            </Wrap>
        </>
    );
};

export default MobileOption;

const Wrap = styled.ul`
    box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
    border-radius: 15px;
    margin-right: 30px;
    overflow: hidden;
    >div {
        width: 100%;
        height: 20px;
        background-color: ${props => props.color};
    }
    li {
        padding: 20px;
        .title {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.45px;
            font-weight: 700;
            color: #000;
        }
        p {
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.56px;
            color: #5d5d5d;
        }
    }
    hr {
        width: calc(100% - 40px);
        margin: 0 auto;
        border: 1px solid #e1e1e1
    }
`