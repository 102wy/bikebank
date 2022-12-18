import React, { useContext } from 'react';
import { mobileContext } from '../../utils/mobileContext';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import GoTop from './GoTop';
import Footer from './Footer';

const Layout = () => {

    const { isMobile, isMain, isTop } = useContext(mobileContext)

    return (
        <>
            <Header />
            {isMobile ? (
                <div
                    style={
                        isMain || (!isMain && isTop)
                            ? { paddingTop: '50px' }
                            : { paddingTop: '0' }
                    }
                />
            ) : (
                <div
                    style={
                        isMain || (!isMain && isTop)
                            ? { paddingTop: '100px' }
                            : { paddingTop: '0' }
                    }
                />
            )}
            <Outlet />
            <GoTop />
            <Footer />
        </>
    );
};

export default Layout;