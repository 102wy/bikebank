import styled, { css } from 'styled-components';

export const CustomerCenter = styled.div`
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    border-radius: 15px;
    overflow: hidden;
    margin-right: 30px;
    div {
        background: url('/images/background_yellow_02.jpg') no-repeat center;
        background-size: cover;
        padding: 43px 57px 65px 57px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        p {
            font-size: 24px;
            line-height: 36px;
            letter-spacing: -0.6px;
            font-weight: 700;
            span {
                line-height: 52px;
                font-size: 38px;
                letter-spacing: -0.95px;
                font-weight: 700;
            }
        }
        button {
            background-color: #fff;
            max-height: 70px;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: -0.6px;
            padding: 18px 90px 17px 91px;
            border-radius: 15px;
            ${props => props.isMobile && css`
                padding: 0;
                background-color: inherit;
            `}
            img {
                width: 11.8px;
                height: 19.6px;
            }
        }
    }
    .bottom {
        background-color: #fff;
        color: #5d5d5d;
        letter-spacing: -0.5px;
        font-size: 20px;
        line-height: 32px;
        padding: 35px 0 36px 57px;
    }

@media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
    div {
        padding: 33px 20px 30px 20px;
        p {
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.45px;
            span {
                font-size: 20px;
                line-height: 30px;
                letter-spacing: -1.1px;
            }
        }
    }
    .bottom {
        padding: 16px 0 20px 20px;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.56px;
    }
}
`

export const QuestionList = styled.ul`
    margin-top: 50px;
    border-bottom: 1px solid #999;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        border-bottom: 1px solid black;
    }
`

export const NoticeList = styled.ul`
    margin-top: 50px;
    border-bottom: 1px solid #999;
    li {
        border-top: 1px solid #999;
        padding: 22px 53px;
        cursor: pointer;
        p {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            letter-spacing: -0.45px;
            color: #5d5d5d;
            cursor: pointer;
            span {
                font-size: 18px;
                letter-spacing: -0.45px;
                color: #5d5d5d;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        margin-top: 0;
        margin-right: 30px;
        li {
            padding: 14px 0;
            p {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: -0.5px;
                flex-direction: column;
                color: #000;
                line-height: 22px;
                span {
                    font-weight: normal;
                    font-size: 15px;
                }  
            }
        }
    }
`