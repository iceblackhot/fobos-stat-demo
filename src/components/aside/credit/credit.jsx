import React, {useState} from 'react';
import './credit.scss';

export const Credit = () => {
  const [threeDays, setThreeDays] = useState(false);

  const [sevenDays, setSevenDays] = useState(false);

  const classNameThree = `fobos-credit__form_threedays${threeDays ? ' active' : ''}`;

  const classNameSeven = `fobos-credit__form_sevendays${sevenDays ? ' active' : ''}`;

  const handleThreeDays = () => {
    setSevenDays(false);
    setThreeDays(true);
  };

  const handleSevenDays = () => {
    setThreeDays(false);
    setSevenDays(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="fobos-credit">
      <div>
        <h2 className="fobos-credit__title">Активація довірчого платежу</h2>
      </div>
      <div className="fobos-credit__info">
        <p>
          Якщо у вас раптово закінчилися кошти на рахунку та немає часу/можливості внести оплату
          одразу, ви можете самостійно встановити кредит
        </p>
      </div>
      <form className="fobos-credit__form" onSubmit={handleSubmit}>
        <div className={classNameThree} onClick={handleThreeDays}>
          <div className="fobos-credit__form_title">
            <h2>3 Дні</h2>
          </div>
          <div className="fobos-credit__form_text">
            <span>Стандарт</span>
            <span>Вартість - 10грн.</span>
          </div>
          <div className="fobos-credit__form_btn">
            <label className="holder">
              <input type="radio" name="radio" checked={threeDays} onChange={handleThreeDays} />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className={classNameSeven} onClick={handleSevenDays}>
          <div className="fobos-credit__form_title">
            <h2>7 Днів</h2>
          </div>
          <div className="fobos-credit__form_text">
            <span>Розширений</span>
            <span>Вартість - 15грн.</span>
          </div>
          <div className="fobos-credit__form_btn">
            <label className="holder">
              <input type="radio" name="radio" checked={sevenDays} onChange={handleSevenDays} />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="fobos-credit__action">
          <button type="submit" className="fobos-credit__action_btn">
            Активувати
          </button>
          <div className="fobos-credit__action_text">
            <span>Увага!</span>
            <span>Даною послугою можна скористатися не більше одного разу поспіль</span>
          </div>
        </div>
      </form>
    </section>
  );
};
