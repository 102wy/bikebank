import Header from './components/common/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/common/Footer';
import { useEffect, useMemo, useState } from 'react';
import { mobileContext } from './utils/mobileContext';
import useWindowDimensions from './hooks/useWindowDimensions';
import GoTop from './components/common/GoTop';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [isMobile, setMobile] = useState();
  const [navigationShow, setNavigationShow] = useState(false);
  const [navigationHide, setNavigationHide] = useState();
  const [scrollPosition, setScrollPosition] = useState();

  // 사용자의 스크롤 위치 확인
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useMemo(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { width } = useWindowDimensions();

  // 화면 너비에 따른 모바일 유무 확인
  useEffect(() => {
    width >= 764 ? setMobile(false) : setMobile(true);
  }, [width]);

  // 메인화면인지 유무
  const { pathname } = useLocation();
  const [isMain, setMain] = useState(pathname === '/' ? true : false);
  useEffect(() => {
    pathname === '/' ? setMain(true) : setMain(false);
  }, [pathname]);

  // 사용자의 스크롤이 최상단에 있는지 확인
  const [isTop, setIsTop] = useState();
  useEffect(() => {
    if (isMobile) {
      scrollPosition >= 300 ? setIsTop(true) : setIsTop(false);
    } else {
      scrollPosition >= 400 ? setIsTop(true) : setIsTop(false);
    }
  }, [scrollPosition]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <mobileContext.Provider
        value={{
          isMobile,
          setMobile,
          navigationShow,
          setNavigationShow,
          navigationHide,
          setNavigationHide,
          scrollPosition,
          isMain,
          setMain,
          isTop,
          setIsTop,
        }}
      >
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
      </mobileContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
