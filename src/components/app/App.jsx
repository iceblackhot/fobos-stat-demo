import {React, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import {Context} from '../utils/context';
import {NotFoundPage} from '../utils/notFoundPage/notFoundPage';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import './main.scss';

import {
  ROUTE_ABOUT,
  ROUTE_CLIENTS,
  ROUTE_INET,
  ROUTE_MEGOGO,
  ROUTE_SERVICE,
  ROUTE_CREDIT,
  ROUTE_INFO,
  ROUTE_IPTV,
  ROUTE_LANMANAGER,
  ROUTE_MAIN,
  ROUTE_OPERATIONS,
  ROUTE_PAYMENT,
  ROUTE_STATISTICS,
} from '../utils/constants';

import {About} from '../header/about/about';
import {Service} from '../header/service/service';
import {Clients} from '../header/clients/clients';
import {Megogo} from '../header/megogo/megogo';
import {HomeInternet} from '../header/homeInternet/homeInternet';
import {Aside} from '../aside/aside';
import {Credit} from '../aside/credit/credit';
import {Iptv} from '../aside/iptv/iptv';
import {LanManager} from '../aside/lanManager/lanManager';
import {Main} from '../aside/main/main';
import {Operations} from '../aside/operations/operations';
import {Payment} from '../aside/payment/payment';
import {Statistics} from '../aside/statistics/statistics';
import {Info} from '../aside/info/info';

function App() {
  const [switchToggled, setSwitchToggled] = useState(false);
  const [btnDetailInf, setBtnBtnDetailInf] = useState(false);
  const [btnToggled, setBtnToggled] = useState(false);
  const [darkModeBtn, setDarkModeBtn] = useState(false);
  const [darkCalendar, setDarkCalendar] = useLocalStorage('flatpkr' ? 'flatpkr' : 'dark');
  const [theme, setTheme] = useLocalStorage('theme' ? 'theme' : 'dark');
  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Context.Provider
        value={{
          open,
          setOpen,
          handleClickOpen,
          handleClose,
          userInfo,
          setUserInfo,
          switchToggled,
          setSwitchToggled,
          isLoading,
          setLoading,
          btnDetailInf,
          setBtnBtnDetailInf,
          btnToggled,
          setBtnToggled,
          darkModeBtn,
          setDarkModeBtn,
          theme,
          setTheme,
          darkCalendar,
          setDarkCalendar,
        }}>
        <div className={'wrapper ' + theme}>
          <Header />
          <main>
            <Aside />
            <Routes>
              <Route path={ROUTE_MAIN} element={<Main expand={false} show_expand={true} />} />
              <Route path={ROUTE_CREDIT} element={<Credit />} />
              <Route path={ROUTE_IPTV} element={<Iptv />} />
              <Route
                path={ROUTE_LANMANAGER}
                element={<LanManager hideBtns={true} expand={true} show_expand={false} />}
              />
              <Route
                path={ROUTE_OPERATIONS}
                element={<Operations hideBtns={true} expand={true} show_expand={false} />}
              />
              <Route path={ROUTE_PAYMENT} element={<Payment />} />
              <Route path={ROUTE_STATISTICS} element={<Statistics theme={theme} />} />
              <Route
                path={ROUTE_INFO}
                element={<Info hideBtns={true} expand={true} show_expand={false} />}
              />
              <Route path={ROUTE_INET} element={<HomeInternet />} />
              <Route path={ROUTE_MEGOGO} element={<Megogo />} />
              <Route path={ROUTE_CLIENTS} element={<Clients />} />
              <Route path={ROUTE_SERVICE} element={<Service />} />
              <Route path={ROUTE_ABOUT} element={<About />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
