import { useEffect, useMemo, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { mobileContext } from './utils/mobileContext';
import { ThemeProvider } from 'styled-components';

import * as page from './pages'
import * as component from './components'
import * as style from './styles';
import * as hook from './hooks'

function App() {
  // 모바일 여부 
  const [isMobile, setMobile] = useState();
  // 모바일 네비게이션 show/hide 여부 
  const [navigationShow, setNavigationShow] = useState(false);
  const [navigationHide, setNavigationHide] = useState();
  // 현재 사용자의 스크롤 위치 
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

  // 사용자의 화면 너비
  const { width } = hook.useWindowDimensions();
  // 화면 너비에 따른 모바일 유무 확인
  useEffect(() => {
    width >= 764 ? setMobile(false) : setMobile(true);
  }, [width]);

  // 현재 url 파라미터
  const { pathname } = useLocation();
  // 메인화면인지 유무
  const [isMain, setMain] = useState(pathname === '/' ? true : false);

  useEffect(() => {
    pathname === '/' ? setMain(true) : setMain(false);
  }, [pathname]);

  // 사용자의 스크롤이 상단에 있는지 확인
  const [isTop, setIsTop] = useState();
  useEffect(() => {
    if (isMobile) {
      window.scrollY >= 300 ? setIsTop(true) : setIsTop(false);
    } else {
      window.scrollY >= 400 ? setIsTop(true) : setIsTop(false);
    }
  }, [window.scrollY]);

  return (
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
      <ThemeProvider theme={style.Theme}>
        <style.GlobalStyles />
        <Routes>
          <Route path='/' element={<component.Layout />} >
            <Route path='/' element={<page.Home />} />
            <Route path='/company' element={<page.Company />} />
            <Route path='/company/:id' element={<page.Company />} />
            <Route path='/rent' element={<page.Rent />} />
            <Route path='/rent/:id' element={<page.Rent />} />
            <Route path='/rent/insu' element={<page.RentRSC />} />
            <Route path='/sale' element={<page.Sale />} />
            <Route path='/sale/:id' element={<page.Sale />} />
            <Route path='/sale/bike/:id' element={<page.SaleBike />} />
            <Route path='/customer' element={<page.Customer />} />
            <Route path='/customer/:id' element={<page.Customer />} />
            <Route path='/recruit' element={<page.Recruit />} />
            <Route path='/notice/:id' element={<page.Notice />} />
            <Route path='/privacy' element={<page.Privacy />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </mobileContext.Provider>
  );
}

export default App;
