import {React, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Context} from '../utils/context';
import {UserInfo} from './userInfo/userInfo';
import './aside.scss';

import {
  ROUTE_AUTH,
  ROUTE_CREDIT,
  ROUTE_INFO,
  ROUTE_IPTV,
  ROUTE_LANMANAGER,
  ROUTE_MAIN,
  ROUTE_OPERATIONS,
  ROUTE_PAYMENT,
  ROUTE_STATISTICS,
} from '../utils/constants';

import credit from '../assests/icons/credit.png';
import home from '../assests/icons/home.png';
import iptv from '../assests/icons/iptv.png';
import lanmgr from '../assests/icons/lanmgr.png';
import logout from '../assests/icons/logout.png';
import moneystat from '../assests/icons/moneystat.png';
import profile from '../assests/icons/profile.png';
import stat from '../assests/icons/stat.png';
import wallet from '../assests/icons/wallet.png';

export const Aside = () => {
  const classNameLink = 'fobos-nav__link';

  const classNameItem = 'fobos-nav__item';

  const {switchToggled, setSwitchToggled, btnToggled} = useContext(Context);

  const classNameAside = `fobos-nav__aside${btnToggled ? ' active' : ''}`;

  const ASIDE_ITEMS = [
    {
      path: ROUTE_MAIN,
      func: ToggleSwitch,
      label: <span>Головна</span>,
      classes: ' fobos-nav__link',
      icons: home,
    },

    {
      path: ROUTE_INFO,
      func: ToggleSwitch,
      label: <span>Інформація</span>,
      classes: ' fobos-nav__link',
      icons: profile,
    },
    {
      path: ROUTE_PAYMENT,
      func: ToggleSwitch,
      label: <span>Оплата послуг</span>,
      classes: ' fobos-nav__link',
      icons: wallet,
    },
    {
      path: ROUTE_CREDIT,
      label: <span>Довірчий платіж</span>,
      func: ToggleSwitch,
      classes: ' fobos-nav__link',
      icons: credit,
    },
    {
      path: ROUTE_IPTV,
      func: ToggleSwitch,
      label: <span>Megogo</span>,
      classes: ' fobos-nav__link',
      icons: iptv,
    },
    {
      path: ROUTE_OPERATIONS,
      func: ToggleSwitch,
      label: <span>Фінансові операції</span>,
      classes: ' fobos-nav__link',
      icons: moneystat,
    },
    {
      path: ROUTE_STATISTICS,
      func: ToggleSwitch,
      label: <span>Статистика</span>,
      classes: ' fobos-nav__link',
      icons: stat,
    },
    {
      path: ROUTE_LANMANAGER,
      func: ToggleSwitch,
      label: <span>Програма помічник</span>,
      classes: ' fobos-nav__link',
      icons: lanmgr,
    },
    {
      path: ROUTE_AUTH,
      label: <span>Вихід</span>,
      classes: ' fobos-nav__link',
      icons: logout,
    },
  ];

  function ToggleSwitch() {
    setSwitchToggled(!switchToggled);
  }

  return (
    <section
      className={`fobos-nav${btnToggled ? ' activePC' : ''}${switchToggled ? ' activeMob' : ' '}`}>
      <aside className={classNameAside}>
        <ul className="fobos-nav__list">
          <UserInfo />
          {ASIDE_ITEMS.map((item, ind) => (
            <li key={ind} className={classNameItem}>
              <NavLink to={item.path} className={classNameLink} onClick={item.func}>
                <img className="fobos-nav__icon" src={item.icons} alt="Menu icon"></img>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
