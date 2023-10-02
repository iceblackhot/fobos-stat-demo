import React from 'react';

import {NavLink} from 'react-router-dom';

import {ROUTE_CREDIT} from '../utils/constants';

import {ROUTE_IPTV} from '../utils/constants';

import {ROUTE_PAYMENT} from '../utils/constants';

import './buttons.scss';

import wallet from '../assests/icons/MainBtnLinks/btnWallet.png';

import credit from '../assests/icons/MainBtnLinks/btnCredit.png';

import iptv from '../assests/icons/MainBtnLinks/btnIptv.png';

export const Buttons = () => {
  return (
    <section className="fobos-buttons">
      <NavLink to={ROUTE_PAYMENT} className="fobos-buttons__btn">
        Поповнення рахунку
        <img className="fobos-buttons__btn_ico" src={wallet} alt="Wallet img" />
      </NavLink>
      <NavLink to={ROUTE_CREDIT} className="fobos-buttons__btn">
        Довірчий платіж
        <img className="fobos-buttons__btn_ico" src={credit} alt="Credit img" />
      </NavLink>
      <NavLink to={ROUTE_IPTV} className="fobos-buttons__btn">
        Megogo
        <img className="fobos-buttons__btn_ico" src={iptv} alt="Credit img" />
      </NavLink>
    </section>
  );
};
