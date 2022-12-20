import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperWrap = styled(Swiper)`
    width: 100%;
    margin-top: 20px;
    img {
        width: 100%;
    }
    .swiper-button-prev {
        width: 37px;
        height: 59px;
        margin-left: 92px;
        cursor: pointer;
        &:after {
        content: '';
        background: url('/images/bike_arrow_left.png') no-repeat center;
        width: 37px;
        height: 59px;
        background-size: cover;
        }
    }
    .swiper-button-next {
        width: 37px;
        height: 59px;
        margin-right: 92px;
        cursor: pointer;
        &:after {
        content: '';
        background: url('/images/bike_arrow_right.png') no-repeat center;
        width: 37px;
        height: 59px;
        background-size: cover;
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        .swiper-button-prev {
        width: 18.5px;
        height: 29.5px;
        margin-left: 0;
        &:after {
            width: 18.5px;
            height: 29.5px;
        }
    }
    .swiper-button-next {
        width: 18.5px;
        height: 29.5px;
        margin-right: 0;
        &:after {
            width: 18.5px;
            height: 29.5px;
        }
    }
    }
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    iframe {
        width: 100%;
        max-width: 938px;
        min-height: 100%;
    }
`