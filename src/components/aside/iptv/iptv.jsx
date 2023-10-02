import React from 'react';
import './iptv.scss';
import crazyDed from '../../assests/iptv/crazyded.png';
import chudak from '../../assests/iptv/chudak.png';
import girl from '../../assests/iptv/girl.png';
import checkOk from '../../assests/iptv/checkOk.png';
import lock from '../../assests/iptv/Lock.png';
import unlock from '../../assests/iptv/Unock.png';

export const Iptv = () => {
  return (
    <section className="fobos-iptv">
      <div className="fobos-iptv__title">
        <h2>Активація IP Телебачення</h2>
      </div>
      <div className="fobos-iptv__grid">
        <div className="fobos-iptv__grid_cell">Статус підключення</div>
        <div className="fobos-iptv__grid_cell">Не Активно</div>
        <div className="fobos-iptv__grid_cell">Тариф IPTV</div>
        <div className="fobos-iptv__grid_cell">Не вибраний</div>
        <div className="fobos-iptv__grid_cell">Посилання на плейлист</div>
        <div className="fobos-iptv__grid_cell">____</div>
      </div>
      <div className="fobos-iptv__grid-wrapper">
        <article className="fobos-iptv__card">
          <div className="fobos-iptv__img-holder">
            <img src={crazyDed} className="fobos-iptv__img" alt="IPTV img" />
          </div>
          <div className="fobos-iptv__grid-title">
            <h2>Мінімальний</h2>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <h2>183 Канали</h2>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Національні канали HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Канали з фільмами</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Дитячий контент</span>
          </div>
          <div className="fobos-iptv__grid-info">
            <div className="fobos-iptv__grid-imglock">
              <img src={unlock} alt="check ok img" />
            </div>
            <span>Культовi фiльми Disney, Universal, Paramount, Sony</span>
          </div>
          <a className="fobos-iptv__grid-btn" href={'/'}>
            Підключити
          </a>
        </article>
        <article className="fobos-iptv__card">
          <div className="fobos-iptv__img-holder">
            <img src={chudak} className="fobos-iptv__img" alt="IPTV img" />
          </div>
          <div className="fobos-iptv__grid-title">
            <h2>Середній</h2>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <h2>233 Канали</h2>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Національні канали HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Преміальні канали HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Канали з фільмами HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Дитячий контент</span>
          </div>
          <div className="fobos-iptv__grid-info">
            <div className="fobos-iptv__grid-imglock">
              <img src={unlock} alt="check ok img" />
            </div>
            <span>Культовi фiльми Disney, Universal, Paramount, Sony</span>
          </div>
          <a className="fobos-iptv__grid-btn" href={'/'}>
            Підключити
          </a>
        </article>
        <article className="fobos-iptv__card">
          <div className="fobos-iptv__img-holder">
            <img src={girl} className="fobos-iptv__img" alt="IPTV img" />
          </div>
          <div className="fobos-iptv__grid-title">
            <h2>Максимальний</h2>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <h2>260 Канали</h2>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Національні канали HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Преміальні канали HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Канали з фільмами HD</span>
          </div>
          <div className="fobos-iptv__grid-options">
            <div className="fobos-iptv__grid-imgok">
              <img src={checkOk} alt="check ok img" />
            </div>
            <span>Дитячий контент</span>
          </div>
          <div className="fobos-iptv__grid-info">
            <div className="fobos-iptv__grid-imglock">
              <img src={unlock} alt="check ok img" />
            </div>
            <span>Культовi фiльми Disney, Universal, Paramount, Sony</span>
          </div>
          <a className="fobos-iptv__grid-btn" href={'/'}>
            Підключити
          </a>
        </article>
      </div>
    </section>
  );
};
