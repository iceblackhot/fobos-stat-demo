import React, {useContext, useState} from 'react';

import {Context} from '../../utils/context';

import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

import './darkModeBtn.scss';

export const DarkModeBtn = () => {
  const {theme, setTheme, darkCalendar, setDarkCalendar} = useContext(Context);

  const classNameBtn = `toggle${theme === 'light' ? '' : ' active'}`;

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const calendarTheme = darkCalendar === 'lightPikr' ? 'darkPikr' : 'lightPikr';
    setTheme(newTheme);
    setDarkCalendar(calendarTheme);
  };

  return (
    <div className="toggle__wrapper">
      <div className="toggle__img-wrapper">
        {theme === 'light' ? <Brightness5RoundedIcon /> : <DarkModeRoundedIcon />}
      </div>
      <div className={classNameBtn} onClick={switchTheme}>
        <i className="indicator"></i>
      </div>
    </div>
  );
};
