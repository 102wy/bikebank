import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { mobileContext } from '../../utils/mobileContext';

const Introduction = () => {
    const { isMobile } = useContext(mobileContext);
    return (
        <>
            <BikeList>
                <li><img src="/images/a_vsx125.png" alt="vsx125 사진" /></li>
                <li><img src="/images/a_vs125.png" alt="vs125 사진" /></li>
                <li><img src="/images/a_vs300.png" alt="vs300 사진" /></li>
            </BikeList>
            <Wrap isMobile={isMobile}>
                <SwiperWrap loop={true} slidesPerView={1} spaceBetween={92} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                    <SwiperSlide>
                        <div className='swipercont'>
                            <p>VSX 125</p>
                            <img src="/images/vs_125.png" alt="vsx125 사진" />
                            <Button>자세히 보기</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipercont'>
                            <p>VS 125</p>
                            <img src="/images/vs_125.png" alt="vs125 사진" />
                            <Button>자세히 보기</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipercont'>
                            <p>VS 300</p>
                            <img src="/images/vs_300.png" alt="vs300 사진" />
                            <Button>자세히 보기</Button>
                        </div>
                    </SwiperSlide>
                </SwiperWrap>
            </Wrap>
        </>
    );
};

export default Introduction;

const BikeList = styled.ul`
    display: flex;
    gap: 27px;
    margin-top: 155px;
    width: 100%;
    padding-right: 30px;
    li {
        background-color: #fff;
        max-width: 380px;
        /* height: 430px; */
        border-radius: 15px;
        padding: 31.5px 49px 27px 48px;
        box-shadow: 5px 0 30px 0 rgba(191, 191, 191, 0.16);
        img {
            width: 100%;
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        margin-top: 30px;
        gap: 10px;
        li {
            padding: 11px;
            padding-bottom: 19px;
            width: 33%;
        }
    }
`

const Wrap = styled.div`
    ${props => props.isMobile && css`
        padding-right: 30px;
    `}
`

const SwiperWrap = styled(Swiper)`
    background-color: #fff;
    box-shadow: 5px 0 30px 0 rgba(191, 191, 191, 0.16);
    width: 100%;
    border-radius: 15px;
    margin-top: 30px;
    .swipercont {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        height: 712px;
        padding: 129px 92px 52px 92px;
        justify-content: space-between;
        p{
        color: #0c76d2;
        font-size: 44px;
        line-height: 69px;
        letter-spacing: -2.2px;
        font-family: 'NanumSquare';
        font-weight: 700;
        text-align: left;
        width: 100%;
        }
        img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
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
        box-shadow: none;
        margin-top: 0;
        .swipercont {
            padding: 26px 15px;
            height: 574px;
            p {
                font-size: 22px;
                line-height: 30px;
                letter-spacing: -1.1px;
            }
            img {
                max-width: 700px;
                width: 100%;
                top: 0;
                transform: none;
                margin-top: -10px;
            }
        }
    .swiper-button-prev {
        width: 18.5px;
        height: 29.5px;
        margin-left: 0;
        top: 200px;
        &:after {
            width: 18.5px;
            height: 29.5px;
        }
    }
    .swiper-button-next {
        width: 18.5px;
        height: 29.5px;
        margin-right: 0;
        top: 200px;
        &:after {
            width: 18.5px;
            height: 29.5px;
        }
    }
}
    @media screen and (max-width: 700px){
        .swipercont {
            height: 500px;
            p {

            }   
            img {
                max-width: 600px;
            } 
        }
        .swiper-button-prev {
            top: 35%;
        }
        .swiper-button-next {
            top: 35%;
        }
    }
    @media screen and (max-width: 600px){
        .swipercont {
            height: 400px;
            p {

            }   
            img {
                max-width: 500px;
            } 
        }
    }
    @media screen and (max-width: 500px){
        .swipercont {
            height: 350px;
            p {

            }   
            img {
                max-width: 400px;
            } 
        }
    }
`


const Button = styled.button`
    background-color: #fff;
    border: 1px solid #707070;
    border-radius: 32.5px;
    padding: 0 51px;
    font-size: 19px;
    height: 65px;
    width: 227.5px;
    color: #464749;
    margin-top: -35px;
    @media screen and (max-width: ${props => props.theme.breakpoint.mobile}){
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.56px;
        width: 180px;
        height: 44px;
    }
    
`