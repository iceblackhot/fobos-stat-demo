import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Context} from '../../utils/context';
import {ROUTE_CREDIT, ROUTE_INFO, ROUTE_PAYMENT} from '../../utils/constants';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import IOSSwitch from '../../iosSwitch/swich';
import './info.scss';

export const Info = (props) => {
  const [btnDrop, setBtnDrop] = useState(props.expand);

  const [hideBtns, setHideBtns] = useState(props.hideBtns);

  const [connect, setConnect] = useState(false);

  const ConnectSwitch = () => {
    setConnect(!connect);
  };

  const ShowDropInfo = () => {
    setBtnDrop(!btnDrop);
  };

  const classFobosInfo = `fobos-info${btnDrop ? ' active' : ''}`;

  const classMainInfo = `grid-info${btnDrop ? ' active' : ''}`;

  const classDropBtn = `fobos-info__dropBtn${btnDrop ? ' active' : ''}`;

  const hideButtons = `fobos-info__btns${hideBtns ? ' hide' : ''}`;

  const goToInfo = () => {
    setHideBtns(!hideBtns);
    setLoading(true);
  };

  const {userInfo, setLoading} = useContext(Context);

  let uan = ' грн';

  let tp_speed = ' Мб/c';

  let connectInfoStyle = {
    color: '#55dd6d',
  };

  let connectInfo = '';

  let conectIndicator = {
    background: '#55dd6d',
  };

  if (userInfo.disable === 0) {
    connectInfoStyle = {
      color: '#55dd6d',
    };

    connectInfo = 'Активно';
  } else {
    connectInfoStyle = {
      color: '#f57c1f',
    };

    connectInfo = 'Не активно';

    conectIndicator = {
      background: '#f57c1f',
    };
  }

  return (
    <section className={classFobosInfo}>
      <div className="fobos-info__header">
        <div className="fobos-info__title-holder">
          <h2>Інформація</h2>
        </div>
        <div className={hideButtons}>
          <div className={classDropBtn}>
            <KeyboardArrowDownRoundedIcon onClick={ShowDropInfo} />
          </div>
          <NavLink to={ROUTE_INFO} className="fobos-info__btn" onClick={goToInfo}>
            Детальніше
            <ArrowForwardIosIcon className="fobos-info__btn_ico" />
          </NavLink>
        </div>
      </div>
      <div className="fobos-info__statusinfo">
        <div className="fobos-info__box status">
          <span className="fobos-info__box_title">Статус підключення:</span>
          <span style={connectInfoStyle} className="fobos-info__box_info">
            <span style={conectIndicator} id="conectStat"></span>
            {connectInfo}
          </span>
        </div>
        <div className="fobos-info__box  balance">
          <span className="fobos-info__box_title">Баланс:</span>
          <span className="fobos-info__box_info">
            {userInfo.deposit}
            {uan}
          </span>
        </div>
        <div className="fobos-info__box credit">
          <span className="fobos-info__box_title">Особовий рахунок:</span>
          <span className="fobos-info__box_info">u{userInfo.contract_id}</span>
        </div>
        <div className="fobos-info__box  payment">
          <span className="fobos-info__box_title">Остання оплата:</span>
          <span className="fobos-info__box_info">/--/--/--/</span>
        </div>
      </div>
      <div className={classMainInfo}>
        <div className="grid-info_cell">Статус підключення</div>
        <div className="grid-info_cell">
          <div style={{width: '140px'}}>
            {connect ? (
              <span style={{color: '#f57c1f'}}>Не підключено</span>
            ) : (
              <span style={{color: '#55dd6d'}}>Підключено</span>
            )}
          </div>

          <div
            className="grid-info__switch"
            style={{display: 'flex', justifyContent: 'center', width: '55px'}}>
            <span onClick={ConnectSwitch}>
              <IOSSwitch />
            </span>
          </div>
        </div>
        <div className="grid-info_cell">Баланс коштів</div>
        <div className="grid-info_cell">
          <span>
            {userInfo.deposit}
            {uan}
          </span>
          <NavLink to={ROUTE_PAYMENT}>Поповнити</NavLink>
        </div>
        <div className="grid-info_cell">Абонплата</div>
        <div className="grid-info_cell">
          {userInfo.month_fee}
          {uan}
        </div>
        <div className="grid-info_cell">Довірчий платіж</div>
        <div className="grid-info_cell">
          <span>00.0грн</span> <NavLink to={ROUTE_CREDIT}>Активувати</NavLink>
        </div>
        <div className="grid-info_cell">Ф.І.П</div>
        <div className="grid-info_cell">{userInfo.fio}</div>
        <div className="grid-info_cell">Номер особового рахунку</div>
        <div className="grid-info_cell">{userInfo.bill_id}</div>
        <div className="grid-info_cell">Номер телефона</div>
        <div className="grid-info_cell">{userInfo.phone}</div>
        <div className="grid-info_cell">Адреса підключення</div>
        <div className="grid-info_cell">{userInfo.address}</div>
        <div className="grid-info_cell">Тарифний план</div>
        <div className="grid-info_cell">{userInfo.tp_name}</div>
        <div className="grid-info_cell">IP Адрес</div>
        <div className="grid-info_cell">{userInfo.ip}</div>
        <div className="grid-info_cell">Макс. швидкість</div>
        <div className="grid-info_cell">
          {userInfo.tp_speed}
          {tp_speed}
        </div>
        <div className="grid-info_cell">MAC-Адрес</div>
        <div className="grid-info_cell">{userInfo.cid}</div>
      </div>
    </section>
  );
};
