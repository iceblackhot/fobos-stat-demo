import React from 'react';

import './contacts.scss';

export const Contacts = () => {
  return (
    <section className="fobos-contacts">
      <div className="fobos-contacts__title">
        <h2>Контакти</h2>
      </div>
      <div className="fobos-contacts__container">
        <div className="fobos-contacts__box">
          <div className="fobos-contacts__city">
            <p>Горішні Плавні:</p>
            <a href="tel:+30634220050">063-422-00-50</a>
            <a href="tel:+30678033933">067-803-39-33</a>
            <a href="tel:+30955141741">095-514-17-41</a>
          </div>
        </div>
        <div className="fobos-contacts__box">
          <div className="fobos-contacts__city">
            <p>Світловодськ:</p>
            <a href="tel:0523620777">(05236) 2-07-77</a>
            <a href="tel:+30986277056">098-627-70-56</a>
            <a href="tel:+30930372406">093-037-24-06</a>
          </div>
        </div>
        <div className="fobos-contacts__box">
          <div className="fobos-contacts__city">
            <p>Решетилівка:</p>
            <a href="tel:+30502197877">050-219-78-77</a>
            <a href="tel:+30634147990">063-414-79-90</a>
          </div>
        </div>
      </div>
    </section>
  );
};
