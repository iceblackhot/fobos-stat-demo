import {React, useContext, useState} from 'react';

import {NavLink, useNavigate} from 'react-router-dom';

import {Context} from '../utils/context';

import logo from '../assests/fobos_logo.png';

import './header.scss';

import BurgerBtn from './burger/burgerBtn';

import Button from '@mui/material/Button';

import {ButtonGroup} from '@mui/material';

import {
  ROUTE_INET,
  ROUTE_MEGOGO,
  ROUTE_CLIENTS,
  ROUTE_SERVICE,
  ROUTE_ABOUT,
  ROUTE_MAIN,
} from '../utils/constants';

import {DarkModeBtn} from './darkMode/darkModeBtn';

import {LangSwitch} from './langSwitch/langSwitch';

export const Header = () => {
  const [selected, setSelected] = useState(localStorage.getItem('lang'));

  const {switchToggled, setSwitchToggled} = useContext(Context);

  const MENU_ITEMS = [
    {path: ROUTE_INET, label: 'Інтернет на дому', classes: 'inet-page fobos-header__link'},
    {path: ROUTE_MEGOGO, label: 'Megogo', classes: 'orbita-page fobos-header__link'},
    {
      path: ROUTE_CLIENTS,
      label: 'Корпоративним клієнтам',
      classes: 'clients-page fobos-header__link',
    },
    {path: ROUTE_SERVICE, label: 'Сервісний центр', classes: 'service-page fobos-header__link'},
    {path: ROUTE_ABOUT, label: 'Про компанію', classes: 'about-page fobos-header__link'},
  ];

  let navigate = useNavigate();
  const goToMain = () => {
    navigate(ROUTE_MAIN);
  };

  return (
    <>
      <header className={`fobos-header${switchToggled ? ' active' : ''}`}>
        <div className="container">
          <BurgerBtn switchToggled={switchToggled} setSwitchToggled={setSwitchToggled} />
          <div className="fobos-header__logo-holder">
            <img className="fobos-header__logo" src={logo} onClick={goToMain} alt="Fobos logo" />
          </div>
          <nav className="fobos-header__nav">
            <ul className="fobos-header__list">
              {MENU_ITEMS.map((item, ind) => (
                <li key={ind} className="fobos-header__item">
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button className="fobos-header__btn">
                      <NavLink to={item.path} className={item.classes}>
                        {item.label}
                      </NavLink>
                    </Button>
                  </ButtonGroup>
                </li>
              ))}
            </ul>
          </nav>
          <div className="fobos-header__switchers">
            <LangSwitch selected={selected} setSelected={setSelected} />
            <DarkModeBtn />
          </div>
        </div>
      </header>
    </>
  );
};
