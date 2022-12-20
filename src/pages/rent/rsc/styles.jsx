import styled from 'styled-components';

export const Title = styled.p`
    font-size: 20px;
    line-height: 34px;
    letter-spacing: -0.3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 38px;
        line-height: 52px;
        letter-spacing: -0.95px;
        font-weight: 700;
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.64px;
        padding-right: 30px;
        span {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.45px;
            font-weight: 700;
        }
    }
`

export const InsuList = styled.ul`
    margin-top: 40px;
    border-top: 2px solid #707070;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        margin-top: 35px;
        margin-right: 30px;
    }
`

export const Footer = styled.div`
    background-color: #666;
    padding: 90px 0;
    width: 100%;
    display: flex;
    justify-content: center;
        @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
            display: none;
        }
`

export const Button = styled.button`
    background-color: #fff;
    width: 230px;
    height: 65px;
    text-align: center;
    color: #464749;
    font-size: 19px;
    line-height: 65px;
    border-radius: 32.5px;
`

export const MobileImgWrap = styled.div`
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
        width: 100%;
    }
`