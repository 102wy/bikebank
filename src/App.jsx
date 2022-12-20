import { useEffect, useMemo, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { mobileContext } from './utils/mobileContext';
import { ThemeProvider } from 'styled-components';
import useWindowDimensions from './hooks/useWindowDimensions';
import Home from './pages/Home';
import Layout from './components/common/Layout';
import Company from './pages/company/index';
import Rent from './pages/rent/index';
import Sale from './pages/sale/index';
import Customer from './pages/customer/index';
import Recruit from './pages/recruit/index';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import SaleBike from './pages/sale/salebike';
import Notice from './pages/notice';
import RentRSC from './pages/rent/rsc';
import Privacy from './pages/privacy';

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
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/company/:id' element={<Company />} />
            <Route path='/rent' element={<Rent />} />
            <Route path='/rent/:id' element={<Rent />} />
            <Route path='/rent/insu' element={<RentRSC />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/sale/:id' element={<Sale />} />
            <Route path='/sale/bike/:id' element={<SaleBike />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/customer/:id' element={<Customer />} />
            <Route path='/recruit' element={<Recruit />} />
            <Route path='/notice/:id' element={<Notice />} />
            <Route path='/privacy' element={<Privacy />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </mobileContext.Provider>
  );
}

export default App;
