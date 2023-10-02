import React, {useState} from 'react';
import {StatPreloader} from './preloader/preloader';
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import {Ukranian} from 'flatpickr/dist/l10n/uk.js';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import './statistics.scss';
import './flatpikr.scss';

export const Statistics = () => {
  const [selectedData, setSelectedData] = useState({
    date: new Date(),
    startDate: null,
    endDate: null,
  });

  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(false);

  const flatpkrDarkTheme = (_, __, fp) => {
    let darkMode = JSON.parse(localStorage.getItem('flatpkr'));
    console.log(darkMode);

    if (darkMode === 'darkPikr') {
      console.log(darkMode);
      // require('flatpickr/dist/themes/dark.css');
      fp.calendarContainer.classList.add('dark');
      // fp.prevMonthNav.classList.add('dark');
    } else {
      console.log(darkMode);
      // require('flatpickr/dist/themes/material_blue.css');
      fp.calendarContainer.classList.remove('dark');
    }
  };

  return (
    <section className="statistics">
      <div className="statistics__title">
        <h2>Статистика</h2>
      </div>
      <form>
        <div className="statistics__calendar-wrapper">
          <CalendarMonthOutlinedIcon className="statistics__calendar-ico" />
          <Flatpickr
            placeholder="Оберіть дату"
            id="Flatpickr"
            value={selectedData.date}
            options={{
              mode: 'range',
              defaultDate: 'today',
              minDate: '01.01.2020',
              maxDate: 'today',
              dateFormat: 'd-m-Y',
              locale: Russian,
            }}
            onChange={(selected, str, inst) => {
              var from = inst.formatDate(selected[0], 'Y-m-d');
              selectedData.startDate = from;
              var tmp_from = selected[1] == null ? new Date() : selected[1];
              var to = inst.formatDate(tmp_from, 'Y-m-d');
              selectedData.endDate = to;
              setSelectedData({...selectedData, from, to});
            }}
            onOpen={flatpkrDarkTheme}
          />
          <input type="submit" value="Відправити" className="statistics__input-send" />
        </div>
      </form>
      <ul className="statistics__table-head">
        <li className="statistics__table-title">Начало</li>
        <li className="statistics__table-title">Загальний час</li>
        <li className="statistics__table-title">Отримано</li>
        <li className="statistics__table-title">Відправлено</li>
        <li className="statistics__table-title">IP-адреса</li>
        <li className="statistics__table-title">ID Станції</li>
      </ul>
      {!loading ? (
        <div className="statistics__viewport" id="statistics">
          {userData.map((item, ind) => (
            <ul key={ind} className="statistics__table-list">
              <li className="statistics__table-item">
                <span className="statistics__table-cell">
                  <span className="statistics__respnsv">Начало</span>
                  {item.start}
                </span>
                <span className="statistics__table-cell">
                  <span className="statistics__respnsv">Загальний час</span>
                  {item.duration}
                </span>
                <span className="statistics__table-cell">
                  <span className="statistics__respnsv">Отримано</span>
                  {item.sent}
                </span>
                <span className="statistics__table-cell">
                  <span className="statistics__respnsv">Відправлено</span>
                  {item.recv}
                </span>
                <span className="statistics__table-cell">
                  <span className="statistics__respnsv">IP-адреса</span>
                  {item.ip}
                </span>
                <span className="statistics__table-cell">
                  <span className="statistics__respnsv">ID Станції</span>
                  {item.cid}
                </span>
              </li>
              <span className="statistics__table-separator"></span>
            </ul>
          ))}
        </div>
      ) : (
        <StatPreloader />
      )}
    </section>
  );
};
