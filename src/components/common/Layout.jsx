import React, { useContext } from 'react';
import { mobileContext } from '../../utils/mobileContext';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import GoTop from './GoTop';
import Footer from './Footer';

const Layout = () => {
    // 모바일여부 , 메인화면여부 , 사용자의 스크롤이 가장 꼭대기에 있는지 여부 확인
    const { isMobile, isMain, isTop } = useContext(mobileContext);
    // 현재 url 파라미터값 받아옴
    const { pathname } = useLocation();

    return (
        <>
            {pathname !== '/privacy' && (
                <>
                    <Header />
                    {isMobile ? (
                        // 모바일일때
                        <div style={isMain || (!isMain && isTop) ? { paddingTop: '50px' } : { paddingTop: '0' }} />
                    ) : (
                        // 웹화면일때
                        <div style={isMain || (!isMain && isTop) ? { paddingTop: '100px' } : { paddingTop: '0' }} />
                    )}
                    <Outlet />
                    <GoTop />
                    <Footer />
                </>
            )}

            {/* 개인정보 보호 페이지의경우 공통 레이아웃이 필요없기때문에 따로 빼줌 */}
            {pathname == '/privacy' && <Outlet />}
        </>
    );
};

export default Layout;