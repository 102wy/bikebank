import styled from 'styled-components';

export const Title = styled.p`
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.95px;
    color: #000;
    margin: ${props => props.margin || ''};
    font-weight: bold;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -1.1px;
    }
`

export const EnvironmentList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    img{
        width: 100%;
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding-right: 30px;
        gap: 10px;
        grid-template-columns: 1fr;
    }
`

export const WelfareList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-top: 50px;
    li {
        padding: 20px 176px 29px 50px;
        border-radius: 15px;
        box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
        background-color: #fff;
        P {
            font-size: 18px;
            color: #5d5d5d;
            line-height: 28px;
            letter-spacing: -0.45px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            span {
                font-size: 24px;
                font-weight: 700;
                line-height: 36px;
                letter-spacing: -0.6px;
                color: #000;
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        grid-template-columns: 1fr;
        gap: 0;
        margin-top: 50px;
        padding-right: 30px;
        li {
            box-shadow: none;
            border-top: 1px solid #e1e1e1;
            padding: 10px 0 39.5px 0;
            border-radius: 0;
            p {
                font-size: 16px;
                line-height: 26px;
                letter-spacing: -0.64px;
                color: #5d5d5d;
                span {
                    font-size: 18px;
                    line-height: 26px;
                    letter-spacing: -0.45px;
                }
            }
        }
    }
`

export const GrowthList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    li{
        &:first-child {
            margin-right: -25px;
        }
        &:last-child {
            margin-left: -25px;
        }
        img {
        width: 100%;
        }
    }
`
export const CheckListTitle = styled.p`
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: -0.6px;
    font-weight: 700;
    padding: 19.5px 0 20px 0;
`
export const CheckListDesc = styled.p`
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: -0.45px;
    color: #5d5d5d;
`

export const Button = styled.button`
    background-color: #434343;
    margin: 70px 13.5px 0 0;
    padding: 19px 41.5px 19px 42px;
    border-radius: 32.5px;
    color: #f8f8f8;
    font-size: 19px;
    font-weight: 500;
    max-width: 230px;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 14px;
        color: #fff;
        line-height: 26px;
        letter-spacing: -0.35px;
        height: 44px;
        width: 180px;
        padding: 0;
        margin: 82px auto 0;
    }
`


export const RecruitImg = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgba(125, 125, 125, 0.16);
    margin-right: 30px;
    padding: 27px 20px 27.5px;
    img {
        width: 100%;
    }
`

export const RecruitProcess = styled.div`
    p {
        border-bottom: 1px solid #999;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.45px;
        font-weight: 700;
        &:nth-child(2) {
            padding: 7px 0 53.5px 0;
        }
        &:nth-child(3) {
            padding: 9.5px 0 10px 0;
            border-bottom: 0;
        }
        &.title {
            font-size: 22px;
            line-height: 30px;
            letter-spacing: -1.1px;
            padding-bottom: 29.5px;
        }
        &.desc {
            font-size: 16px;
            line-height: 26px;
            letter-spacing: -0.64px;
            color: #5d5d5d;
            font-weight: 400;
            border-bottom: 0;
        }
    }
`

export const Blog = styled.div`
    background-color: #ffdd6d;
    padding: 55px 0 30px 40px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    p {
        font-size: 34px;
        line-height: 1.47;
        letter-spacing: -0.85px;
        color: #242424;
        font-weight: 700;
    }
    button {
            border-radius: 25px;
            background-color: #fff;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.55px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 66px;
            height: 50px;
            min-width: 268px;
            line-height: 50px;
            padding: 0 38px;
            img {
                margin-left: 15px;
            }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        padding: 20px 37px 20px 20px;
        margin-right: 30px;
        p {
            font-size: 18px;
            letter-spacing: -0.45px;
            line-height: 26px;
        }
        button {
            margin-top: 40px;
            height: 34px;
            min-width: 158px;
            font-size: 14px;
            line-height: 34px;
            letter-spacing: -0.35px;
            padding: 0 19px;
            img {
                margin-left: 10px;
                width: 7px;
                height: 7px;
                object-fit: cover;
            }
        }
    }
`
