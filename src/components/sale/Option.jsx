import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Option = ({ title, desc, mb, delay }) => {
    useEffect(() => {
        AOS.init({ duration: 1800, });
    }, []);
    return (
        <Content mb={mb} data-aos="fade-up" data-aos-duration="1800" data-aos-delay={delay}>
            <p className='title'>{title}</p>
            <p className='desc'>
                {desc.split(`<br/>`).map(txt => (
                    <p>
                        {txt}
                        <br />
                    </p>
                ))}
            </p>
        </Content>
    );
};

export default Option;

const Content = styled.li`
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    overflow: hidden;
    width: 100%;
    max-width: 572px;
    margin-bottom: ${props => props.mb || '0'};
    .title {
        font-size: 26px;
        line-height: 40px;
        letter-spacing: -0.65px;
        background-color: #ffe182;
        font-weight: 700;
        padding: 22px 0 21px 57px;
    }
    .desc {
        white-space: pre-wrap;
        color: #5d5d5d;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.45px;
        padding: 21px 0 37px 57px;
    }
`