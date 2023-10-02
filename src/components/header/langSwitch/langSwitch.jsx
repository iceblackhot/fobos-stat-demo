import React, {useState} from 'react';

import ua from '../../assests/lang/ua.png';

import ru from '../../assests/lang/ru.png';

import en from '../../assests/lang/en.png';

import './langSwitch.scss';

export const LangSwitch = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);

  const options = ['ua', 'ru', 'en'];

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__img-wrapper">
        {selected === 'ua' ? (
          <img src={ua} alt="UA lang" />
        ) : '' || selected === 'ru' ? (
          <img src={ru} alt="RU lang" />
        ) : '' || selected === 'en' ? (
          <img src={en} alt="EN lang" />
        ) : (
          ''
        )}
      </div>
      <div
        className="dropdown__btn"
        onClick={(e) => {
          setIsActive(!isActive);
        }}>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown__content" onMouseLeave={closeMenu}>
          {options.map((option, ind) => (
            <div
              key={ind}
              className="dropdown__item"
              onClick={(e) => {
                if (option === 'ua') {
                  localStorage.setItem('lang', 'ua');
                }
                if (option === 'ru') {
                  localStorage.setItem('lang', 'ru');
                }
                if (option === 'en') {
                  localStorage.setItem('lang', 'en');
                }
                setSelected(option);
                setIsActive(false);
              }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
