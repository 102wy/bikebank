import React, { useEffect } from 'react';
import * as homestyle from '../../Home/style';
import * as style from './styles';
// swiper 사용을 위한 import 
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { useParams } from 'react-router-dom';


const SaleBike = () => {

    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <homestyle.Section padding='0 0 113px 0'>
                <homestyle.PageWidth>
                    {/* vs 125 일때 */}
                    {id === 'vs125' && (
                        <>
                            <img src="/images/vs_125_01.png" alt="vs이미지" style={{ width: '100%', marginBottom: '116px' }} />
                            <img src='/images/vs_125_features.png' alt='vs feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true} style={{ marginTop: '116px' }}>
                                <SwiperSlide><img src="/images/vs_125_color_01.png" alt="vs 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_color_02.png" alt="vs 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_color_03.png" alt="vs 색상 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vs_125_model_02.png" alt="vs 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_model_03.png" alt="vs 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_model_04.png" alt="vs 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_model_05.png" alt="vs 모델 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vs_125_detail_01.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_02.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_03.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_04.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_05.png" alt="vs 디테일 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                        </>
                    )}
                    {id === 'vs300' && (
                        <>
                            <img src="/images/vs_300_01.png" alt="vs이미지" style={{ width: '100%', marginBottom: '116px' }} />
                            <img src='/images/vs_300_features.png' alt='vs feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true} style={{ marginTop: '116px' }}>
                                <SwiperSlide><img src="/images/vs_300_color_01.png" alt="vs 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_300_color_02.png" alt="vs 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_300_color_03.png" alt="vs 색상 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vs_300_model_01.png" alt="vs300 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_300_model_02.png" alt="vs300 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_300_model_03.png" alt="vs300 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_300_model_04.png" alt="vs300 모델 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vs_125_detail_01.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_02.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_03.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_04.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_05.png" alt="vs 디테일 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                        </>
                    )}
                    {id === 'vsx125' && (
                        <>
                            <img src="/images/vsx_125_01.png" alt="vsx이미지" style={{ width: '100%', marginBottom: '116px' }} />
                            <iframe width="938" height="435" src="https://www.youtube.com/embed/MShNfdOX0Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ margin: '0 auto' }}></iframe>
                            <img src='/images/vsx_125_features.png' alt='vsx feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true} style={{ marginTop: '116px' }}>
                                <SwiperSlide><img src="/images/vsx_125_color_01.png" alt="vsx 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_color_02.png" alt="vsx 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_color_03.png" alt="vsx 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_color_04.png" alt="vsx 색상 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_color_05.png" alt="vsx 색상 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vsx_125_model_01.png" alt="vsx 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_model_02.png" alt="vsx 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_model_03.png" alt="vsx 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_model_04.png" alt="vsx 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_model_05.png" alt="vsx 모델 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_model_06.png" alt="vsx 모델 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vsx_125_detail_01.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_detail_02.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_detail_03.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_detail_04.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vsx_125_detail_05.png" alt="vsx 디테일 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                        </>
                    )}
                </homestyle.PageWidth>
            </homestyle.Section>
        </>
    );
};

export default SaleBike;