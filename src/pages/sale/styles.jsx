import styled from 'styled-components';

export const OptionList = styled.ul`
    display: flex;
    gap: 50px;
`

export const Exp = styled.p`
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #5d5d5d;
        margin-top: -10px;
    }
`

export const App = styled.div`
    background: url('/images/bg_app.png') no-repeat center;
    padding: 94px 0 81px 57px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    p {
        color: #fff;
        font-size: 32px;
        line-height: 45px;
        letter-spacing: -0.8px;
        span {
            font-weight: 700;
        }
    }
    .appcontainer{
        display: flex;
        gap: 13px;
        button {
            background-color: #fff;
            width: 150px;
            height: 44px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        margin-right: 30px;
        padding: 22px 0 20px 20px;
        gap: 57px;
        p {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.45px;
            font-weight: 700;
        }
        .appcontainer{
        display: flex;
        gap: 9px;
        button {
            background-color: #fff;
            width: 105px;
            height: 31px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1px 6px;
        }
    }
    }
`

export const ServiceWrap = styled.ul`
    
`

export const Button = styled.button`
    background-color: #434343;
    border: 1px solid #707070;
    border-radius: 32.5px;
    font-size: 19px;
    height: 65px;
    width: 227.5px;
    color: #f8f8f8;
    margin: 0 auto;
    cursor: pointer;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.56px;
        color: #5d5d5d;
        background-color: #fff;
        border: 1px solid #707070;
        width: 180px;
        height: 44px;
    }
`