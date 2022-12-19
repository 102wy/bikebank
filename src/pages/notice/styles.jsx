import styled from 'styled-components';

export const Title = styled.p`
    font-size: 38px;
    letter-spacing: -0.95px;
    font-weight: 700;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 18px;
        letter-spacing: -0.45px;
        font-weight: 400;
    }
`
export const Date = styled.p`
    font-size: 18px;
    color: #5d5d5d;
    font-weight: 500;
    letter-spacing: -0.45px;
    padding-bottom: 35px;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 15px;
        letter-spacing: 0.6px;
        color: #272727;
        padding-bottom: 55px;
    }
`
export const Desc = styled.div`
    border-top: 2px solid #707070;
    border-bottom: 2px solid #707070;
    background-color: #f8f8f8;
    width: 100%;
    padding: 41px 50px;
    margin-bottom: 105px;
    p {
        white-space: pre-wrap;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: #5d5d5d;
    }
    a {
        color: blue;
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding-bottom: 130px;
        border: 0;
        background-color: #fff;
        padding: 0;
        margin-right: 30px;
        p {
            font-size: 16px;
            letter-spacing: 0.64px;
            color: #5d5d5d;
            line-height: 26px;
        }
        a {

        }
    }
`

export const Button = styled.button`
    width: 228px;
    height: 65px;
    border-radius: 33px;
    background-color: #ffdd6d;
    text-align: center;
    font-size: 19px;
    color: #464749;
    margin: 0 auto;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        width: 180px;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
    }
`