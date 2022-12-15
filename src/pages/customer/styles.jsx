import styled from 'styled-components';

export const CustomerCenter = styled.div`
    box-shadow: 5px 0 30px 0 rgba(149, 149, 149, 0.16);
    border-radius: 15px;
    overflow: hidden;
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
`