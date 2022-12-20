import React, { useContext, useEffect } from 'react';
import * as homestyle from '../../Home/style';
import * as style from './styles';
// swiper 사용을 위한 import 
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { useParams } from 'react-router-dom';
import { mobileContext } from '../../../utils/mobileContext';


const SaleBike = () => {
    // url 파라미터값을 가져온다.
    const { id } = useParams();
    // 모바일 유무 확인
    const { isMobile } = useContext(mobileContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <homestyle.Section padding={isMobile ? '0 0 13px 0' : '0 0 113px 0'}>
                {/* vs 125 일때 */}
                {id === 'vs125' && (
                    <>
                        {/* 모바일 일때 */}
                        {isMobile && (
                            <>
                                <img src="/images/mobile_vs_125_header.png" alt="vs이미지" style={{ width: '100%', marginBottom: '20px' }} />
                                <img src='/images/mobile_vs_125_feature.png' alt='vs feature 이미지' style={{ width: '100%', marginTop: '100px' }} />
                            </>
                        )}
                        {/* 웹일때 */}
                        {!isMobile && (
                            <homestyle.PageWidth>
                                <img src="/images/vs_125_01.png" alt="vs이미지" style={{ width: '100%', marginBottom: '116px' }} />
                                <img src='/images/vs_125_features.png' alt='vs feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                            </homestyle.PageWidth>
                        )}
                        <div style={{ width: '100%' }}>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true} style={{ marginTop: '116px' }}>
                                {isMobile ? (
                                    <>
                                        <SwiperSlide><img src="/images/mobile_vs_125_color_01.png" alt="vs 색상 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/mobile_vs_125_color_02.png" alt="vs 색상 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/mobile_vs_125_color_03.png" alt="vs 색상 사진" /></SwiperSlide>
                                    </>
                                ) : (
                                    <>
                                        <SwiperSlide><img src="/images/vs_125_color_01.png" alt="vs 색상 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/vs_125_color_02.png" alt="vs 색상 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/vs_125_color_03.png" alt="vs 색상 사진" /></SwiperSlide>
                                    </>
                                )}
                            </style.SwiperWrap>
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                {isMobile ? (
                                    <>
                                        <SwiperSlide><img src="/images/mobile_vs_125_model_01.png" alt="vs 모델 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/mobile_vs_125_model_02.png" alt="vs 모델 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/mobile_vs_125_model_03.png" alt="vs 모델 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/mobile_vs_125_model_04.png" alt="vs 모델 사진" /></SwiperSlide>
                                    </>
                                ) : (
                                    <>
                                        <SwiperSlide><img src="/images/vs_125_model_02.png" alt="vs 모델 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/vs_125_model_03.png" alt="vs 모델 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/vs_125_model_04.png" alt="vs 모델 사진" /></SwiperSlide>
                                        <SwiperSlide><img src="/images/vs_125_model_05.png" alt="vs 모델 사진" /></SwiperSlide>
                                    </>
                                )}
                            </style.SwiperWrap>
                            {isMobile ? (
                                <div style={{ padding: '24px 30px 0 30px' }}>
                                    <img src="/images/mobile_vs_125_detail.png" alt="vs 125 디테일 사진" style={{ width: '100%' }} />
                                </div>
                            ) : (
                                <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                    <SwiperSlide><img src="/images/vs_125_detail_01.png" alt="vs 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_125_detail_02.png" alt="vs 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_125_detail_03.png" alt="vs 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_125_detail_04.png" alt="vs 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_125_detail_05.png" alt="vs 디테일 사진" /></SwiperSlide>
                                </style.SwiperWrap>
                            )}
                        </div>
                    </>
                )}

                {/* vs300일때 */}
                {id === 'vs300' && (
                    <>
                        {isMobile &&
                            <>
                                <img src="/images/mobile_vs_300_header.png" alt="vs이미지" style={{ width: '100%', marginBottom: '20px' }} />
                                <img src='/images/mobile_vs_300_feature.png' alt='vs feature 이미지' style={{ width: '100%', marginTop: '100px' }} />
                            </>}
                        {!isMobile && (
                            <homestyle.PageWidth>
                                <img src="/images/vs_300_01.png" alt="vs이미지" style={{ width: '100%', marginBottom: '116px' }} />
                                <img src='/images/vs_300_features.png' alt='vs feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                            </homestyle.PageWidth>
                        )}
                        <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true} style={{ marginTop: '116px' }}>
                            {isMobile ? (
                                <>
                                    <SwiperSlide><img src="/images/mobile_vs_125_color_01.png" alt="vs 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vs_125_color_02.png" alt="vs 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vs_125_color_03.png" alt="vs 색상 사진" /></SwiperSlide>
                                </>
                            ) : (
                                <>
                                    <SwiperSlide><img src="/images/vs_300_color_01.png" alt="vs 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_300_color_02.png" alt="vs 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_300_color_03.png" alt="vs 색상 사진" /></SwiperSlide>
                                </>
                            )}
                        </style.SwiperWrap>
                        <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                            {isMobile ? (
                                <>
                                    <SwiperSlide><img src="/images/mobile_vs_125_model_01.png" alt="vs 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vs_125_model_02.png" alt="vs 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vs_125_model_03.png" alt="vs 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vs_125_model_04.png" alt="vs 모델 사진" /></SwiperSlide>
                                </>
                            ) : (
                                <>
                                    <SwiperSlide><img src="/images/vs_300_model_01.png" alt="vs300 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_300_model_02.png" alt="vs300 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_300_model_03.png" alt="vs300 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vs_300_model_04.png" alt="vs300 모델 사진" /></SwiperSlide>
                                </>
                            )}
                        </style.SwiperWrap>
                        {isMobile ? (
                            <div style={{ padding: '24px 30px 0 30px' }}>
                                <img src="/images/mobile_vs_125_detail.png" alt="vs 125 디테일 사진" style={{ width: '100%' }} />
                            </div>
                        ) : (
                            <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                <SwiperSlide><img src="/images/vs_125_detail_01.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_02.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_03.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_04.png" alt="vs 디테일 사진" /></SwiperSlide>
                                <SwiperSlide><img src="/images/vs_125_detail_05.png" alt="vs 디테일 사진" /></SwiperSlide>
                            </style.SwiperWrap>
                        )}
                    </>
                )}

                {/* vsx125일때 */}
                {id === 'vsx125' && (
                    <>
                        {isMobile ? (
                            <style.Top>
                                <img src="/images/mobile_vsx_125_header.png" alt="vsx이미지" style={{ width: '100%', marginBottom: '116px' }} />
                                <iframe width="337" height="300" src="https://www.youtube.com/embed/MShNfdOX0Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ margin: '0 auto' }}></iframe>
                                <img src='/images/mobile_vsx_125_feature.png' alt='vsx feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                            </style.Top>
                        ) : (
                            <style.Top>
                                <img src="/images/vsx_125_01.png" alt="vsx이미지" style={{ width: '100%', marginBottom: '116px' }} />
                                <iframe width="938" height="435" src="https://www.youtube.com/embed/MShNfdOX0Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ margin: '0 auto' }}></iframe>
                                <homestyle.PageWidth>
                                    <img src='/images/vsx_125_features.png' alt='vsx feature 이미지' style={{ width: '100%', marginTop: '77px' }} />
                                </homestyle.PageWidth>
                            </style.Top>
                        )}
                        <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true} style={{ marginTop: '116px' }}>
                            {isMobile ? (
                                <>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_color_01.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_color_02.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_color_03.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_color_04.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_color_05.png" alt="vsx 색상 사진" /></SwiperSlide>
                                </>
                            ) : (
                                <>
                                    <SwiperSlide><img src="/images/vsx_125_color_01.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_color_02.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_color_03.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_color_04.png" alt="vsx 색상 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_color_05.png" alt="vsx 색상 사진" /></SwiperSlide>
                                </>
                            )}
                        </style.SwiperWrap>
                        <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                            {isMobile ? (
                                <>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_model_01.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_model_02.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_model_03.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_model_04.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_model_05.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/mobile_vsx_125_model_06.png" alt="vsx 모델 사진" /></SwiperSlide>
                                </>
                            ) : (
                                <>
                                    <SwiperSlide><img src="/images/vsx_125_model_01.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_model_02.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_model_03.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_model_04.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_model_05.png" alt="vsx 모델 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_model_06.png" alt="vsx 모델 사진" /></SwiperSlide>
                                </>
                            )}
                        </style.SwiperWrap>
                        {isMobile ? (
                            <div style={{ padding: '24px 30px 0 30px' }}>
                                <img src="/images/mobile_vsx_125_detail.png" alt="vsx 125 디테일 사진" style={{ width: '100%' }} />
                            </div>
                        ) : (
                            <>
                                <style.SwiperWrap loop={true} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={true} navigation={true}>
                                    <SwiperSlide><img src="/images/vsx_125_detail_01.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_detail_02.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_detail_03.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_detail_04.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                    <SwiperSlide><img src="/images/vsx_125_detail_05.png" alt="vsx 디테일 사진" /></SwiperSlide>
                                </style.SwiperWrap>
                            </>
                        )}
                    </>
                )}
            </homestyle.Section>
        </>
    );
};

export default SaleBike;