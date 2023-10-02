import React, {useState} from 'react';
import PayDialog from './modal/modal';
import privatImg from '../../assests/Privat24/privat24.png';
import './payment.scss';

export const Payment = () => {
  const [series, setSeries] = useState('');

  const [pinCode, setPinCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('send request');
  };

  function handleChangeSeries(e) {
    let str = e.target.value.match(/^([A-Za-z])(\d{0,6})$/m);
    if (str != null) {
      setSeries(str[1] + str[2]);
    } else {
      setSeries('');
    }
  }

  function handleChangePinCode(e) {
    let str = e.target.value
      .replace(/[^\d]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    if (str != null) {
      setPinCode(str);
    } else {
      setPinCode('');
    }
    console.log(str.length);
  }

  return (
    <section className="fobos-pay">
      <PayDialog />
      <div className="fobos-pay__title">
        <h2>Оплата послуг</h2>
      </div>
      <div className="fobos-pay__wrapper">
        <div className="fobos-pay__box">
          <div className="fobos-pay__box_title">
            <h2>Поповнити баланс онлайн</h2>
            <h2>через Приват 24</h2>
          </div>
          <img src={privatImg} alt="Privat24 img" />
          <a className="fobos-pay__box_btn" href={'/'}>
            Перейти до поповнення
          </a>
        </div>
        <div className="fobos-pay__box">
          <div className="fobos-pay__box_title">
            <h2>Поповнити баланс</h2>
            <h2>скретч-карткою</h2>
          </div>
          <form className="fobos-pay__form" onSubmit={handleSubmit}>
            <input
              className="fobos-pay__form_input"
              type="text"
              placeholder="Серія"
              value={series}
              maxLength="7"
              onChange={handleChangeSeries}
            />
            <input
              className="fobos-pay__form_input"
              type="text"
              placeholder="Пін-код"
              value={pinCode}
              maxLength="19"
              onChange={handleChangePinCode}
            />
            <input className="fobos-pay__box_btn" type="submit" value="Відправити" />
          </form>
        </div>
      </div>
    </section>
  );
};
