import React, {useContext, useState} from 'react';

import './lanManager.scss';

import lanMgr from '../../assests/lanManager/lanMgr.png';

import fobosArrow from '../../assests/lanManager/fobosArrow.png';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import wifi from '../../assests/lanManager/iconWifi.png';

import search from '../../assests/lanManager/iconSearch.png';

import youtube from '../../assests/lanManager/iconYoutube.png';

import window from '../../assests/lanManager/iconWindow.png';

import fly from '../../assests/lanManager/iconFly.png';

import cloud from '../../assests/lanManager/iconCloud.png';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {NavLink} from 'react-bootstrap';

import {ROUTE_LANMANAGER} from '../../utils/constants';

import {useNavigate} from 'react-router-dom';

import {Context} from '../../utils/context';

export const LanManager = (props) => {
  const [btnDrop, setBtnDrop] = useState(props.expand);

  const [hideBtns, setHideBtns] = useState(props.hideBtns);

  const classCardWrappper = `lanmanager__cards-wrapper${btnDrop ? ' active' : ''}`;

  // const classMainlanmanager = `lanmanager${btnDrop ? ' active' : ''}`;

  const classDropBtn = `lanmanager__drop-btn${btnDrop ? ' active' : ''}`;

  const hideButtons = `lanmanager__btns${hideBtns ? ' hide' : ''}`;

  const navigate = useNavigate();

  const {isAuth} = useContext(Context);

  const ShowDropInfo = () => {
    setBtnDrop(!btnDrop);
  };

  const goToInfo = () => {
    navigate(ROUTE_LANMANAGER);
    setHideBtns(!hideBtns);
  };

  return (
    <section className="lanmanager">
      <div className="lanmanager__header">
        <div className="lanmanager__title">
          <h2>Програма помічник</h2>
        </div>
        <div className={hideButtons}>
          <div className={classDropBtn}>
            <KeyboardArrowDownRoundedIcon onClick={ShowDropInfo} />
          </div>
          <NavLink className="lanmanager__detail-btn" onClick={goToInfo}>
            Детальніше
            <ArrowForwardIosIcon className="lanmanager__btn-ico" />
          </NavLink>
        </div>
      </div>
      <div className="lanmanager__container">
        <img className="lanmanager__arrow-one arrow" src={fobosArrow} alt="Fobos Arrow img" />
        <img className="lanmanager__arrow-two arrow" src={fobosArrow} alt="Fobos Arrow img" />
        <img className="lanmanager__arrow-three arrow" src={fobosArrow} alt="Fobos Arrow img" />
        <div className="lanmanager__info">
          <div className="lanmanager__info_title">
            <h2>Програма помічник</h2>
            <h2>Fobos Lan Manager</h2>
          </div>
          <div className="lanmanager__info_text">
            <p>Надаємо вам нову програму для керування VPN-підключенням мережі Fobos</p>
          </div>

          <a className="lanmanager__info_btn" href={'/'}>
            Завантажити
            <ArrowCircleDownIcon className="lanmanager_ico" />
          </a>
        </div>
        <div className="lanmanager__img-holder">
          <img className="lanmanager__img" src={lanMgr} alt="Lan Manager img" />
        </div>
      </div>
      <div className={classCardWrappper}>
        <div className="lanmanager__card">
          <div className="lanmanager__icon-holder">
            <img className="lanmanager__ico" src={wifi} alt="Lanmanager img" />
          </div>
          <div className="lanmanager__text">
            <p>Простое подключение/отключение VPN-соединения</p>
          </div>
        </div>
        <div className="lanmanager__card">
          <div className="lanmanager__icon-holder">
            <img className="lanmanager__ico" src={search} alt="Lanmanager img" />
          </div>
          <div className="lanmanager__text">
            <p>Быстрый доступ к поисковым системам и ресурсам сети всего одним кликом</p>
          </div>
        </div>
        <div className="lanmanager__card">
          <div className="lanmanager__icon-holder">
            <img className="lanmanager__ico" src={youtube} alt="Lanmanager img" />
          </div>
          <div className="lanmanager__text">
            <p>Втроенный видео-проигрователь для просмотра IP-телевидения</p>
          </div>
        </div>
        <div className="lanmanager__card">
          <div className="lanmanager__icon-holder">
            <img className="lanmanager__ico" src={window} alt="Lanmanager img" />
          </div>
          <div className="lanmanager__text">
            <p>Очень легка в управлении</p>
          </div>
        </div>
        <div className="lanmanager__card">
          <div className="lanmanager__icon-holder">
            <img className="lanmanager__ico" src={fly} alt="Lanmanager img" />
          </div>
          <div className="lanmanager__text">
            <p>Оптимизировано быстродействие</p>
          </div>
        </div>
        <div className="lanmanager__card">
          <div className="lanmanager__icon-holder">
            <img className="lanmanager__ico" src={cloud} alt="Lanmanager img" />
          </div>
          <div className="lanmanager__text">
            <p>Имеет постоянную поддержку и систему автообновления</p>
          </div>
        </div>
      </div>
    </section>
  );
};
