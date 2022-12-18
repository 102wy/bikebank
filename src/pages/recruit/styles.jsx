import styled from 'styled-components';

export const Title = styled.p`
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.95px;
    color: #000;
    margin: ${props => props.margin || ''};
    font-weight: bold;
`

export const EnvironmentList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    img{
        width: 100%;
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
`

export const Blog = styled.div`
     background-color: #ffdd6d;
     padding: 55px 552px 30px 40px;
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
`