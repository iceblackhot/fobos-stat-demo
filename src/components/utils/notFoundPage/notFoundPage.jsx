import React from 'react';

import './notFoundPage.scss';

import notFoundPage from '../../assests/404.png';

import {ROUTE_MAIN} from '../constants';

import {NavLink} from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <section className="not-found">
      <div className="not-found__title">
        <h1>Вибачте, сторінку не знайдено!</h1>
      </div>
      <div className="not-found__img-wrapper">
        <img className="not-found__img" src={notFoundPage} alt="Not found page img" />
      </div>

      <NavLink to={ROUTE_MAIN}>
        <button className="not-found__btn">На Головну</button>
      </NavLink>
    </section>
  );
};
