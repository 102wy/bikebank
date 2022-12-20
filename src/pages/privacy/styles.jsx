import styled from 'styled-components';

export const Wrap = styled.div`
padding: 0 5px;
    p {
        font-size: 14px;
        color: #666;
    }
    h1 {
        font-size: 16px;
        padding-top: 20px;
        font-weight: bold;
        color: #333;
    }
`

export const Title = styled.p`
    text-align: center;
    padding: 20px 0;
    font-size: 18px !important;
    font-weight: 700;
    color: black !important;
    line-height: 18px;
`

export const Table = styled.table`
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
    thead{
        background-color: #efefef;
        text-align: center;
        tr {
            td {
                font-size: 14px;
                font-weight: bold;
                color: #333;
                padding: 5px 0;
                border: 1px solid #ccc;
                border-bottom: 0;
                border-right: 0;
                &:last-child {
                    border-right: 1px solid #ccc;
                }
            }
        }
    }
    tbody {
        text-align: center;
        tr {
            td {
                font-size: 14px;
                color: #666;
                padding: 5px 0;
                border: 1px solid #ccc;
                border-bottom: 0;
                &:nth-child(1) {
                    border-right: 0;
                }
                &:nth-child(2) {
                    border-right: 0;
                }
                &:nth-child(3) {
                    border-right: 0;
                }
                &:nth-child(4) {
                    border-right: 0;
                }
                &:nth-child(5) {
                    border-right: 0;
                }
                &:nth-child(6) {
                    border-right: 0;
                }
                &:nth-child(7) {
                    border-right: 0;
                }
                &:last-child {
                    border-right: 1px solid #ccc;
                }
            }
        }
    }
`