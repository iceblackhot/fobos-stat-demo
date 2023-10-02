import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Context} from '../../utils/context';
import {ROUTE_PAYMENT} from '../../utils/constants';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import './userInfo.scss';

export const UserInfo = () => {
  const {btnToggled, setBtnToggled, userInfo} = useContext(Context);

  const BtnSwitch = () => setBtnToggled(!btnToggled);

  const classNameBtn = `nav-btn__wrapper${btnToggled ? ' active' : ''}`;

  const classNameInfo = `user-info${btnToggled ? ' active' : ''}`;

  const classNameUser = `user${btnToggled ? ' active' : ''}`;

  const navigate = useNavigate();

  const goToPay = () => {
    navigate(ROUTE_PAYMENT);
  };

  let conectStyle = {};

  if (userInfo.disable === 0) {
    conectStyle = {
      background: '#55dd6d',
    };
  } else {
    conectStyle = {
      background: '#f57c1f',
    };
  }

  let uan = ' грн';

  return (
    <>
      <section className="usr-info">
        <div className="nav-btn">
          <div className={classNameBtn}>
            <DoubleArrowRoundedIcon className="fobos-btn" onClick={BtnSwitch} />
            <div className={classNameUser}>
              <span id="status">Active</span>
              <span id="green-circle" style={conectStyle}></span>
              <span id="balance">Balance</span>
              <span id="balanceColor">{userInfo.deposit}</span>
              <PaidRoundedIcon id="usd" onClick={goToPay} />
            </div>
          </div>
        </div>
        <div className={classNameInfo}>
          <span className="user-info__hello">Вітаемо,</span>
          <h2 className="user-info__name">{userInfo.fio}</h2>
          <div className="user-info__balance">
            <span className="user-info__title">Баланс: </span>
            <span className="user-info__money">
              {userInfo.deposit}
              {uan}
            </span>
          </div>
          <span className="user-info__ip">IP: {userInfo.ip}</span>
          <NavLink to={ROUTE_PAYMENT} className="user-info__btn">
            Поповнити
          </NavLink>
        </div>
      </section>
    </>
  );
};
