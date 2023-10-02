import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {StringPreloader} from '../../preloader/stringPreloder/stringPreloader';
import {ROUTE_OPERATIONS} from '../../utils/constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {FaAngleDoubleUp} from 'react-icons/fa';
import {Link} from '@mui/material';
import './operations.scss';

export const Operations = (props) => {
  const [btnDrop, setBtnDrop] = useState(props.expand);

  const [hideBtns, setHideBtns] = useState(props.hideBtns);

  const [usrOperation, setUsrOperation] = useState([]);

  const [noMore, setNoMore] = useState(true);

  const hideButtons = `fobos-operations__btns${hideBtns ? ' hide' : ''}`;

  const classDropBtn = `fobos-operations__drop-btn${btnDrop ? ' active' : ''}`;

  const classNameViewport = `fobos-operations__viewport${btnDrop ? ' active' : ''}`;

  const goToOperations = () => {
    setHideBtns(!hideBtns);
  };

  const ShowDropOperations = () => {
    setBtnDrop(!btnDrop);
  };

  return (
    <section className="fobos-operations">
      <div className="fobos-operations__header">
        <div className="fobos-operations__title">
          <h2>Фінансові операції</h2>
        </div>
        <div className={hideButtons}>
          <div className={classDropBtn}>
            <KeyboardArrowDownRoundedIcon onClick={ShowDropOperations} />
          </div>
          <NavLink
            to={ROUTE_OPERATIONS}
            className="fobos-operations__detail-btn"
            onClick={goToOperations}>
            Детальніше
            <ArrowForwardIosIcon className="lanmanager__btn-ico" />
          </NavLink>
        </div>
      </div>
      <ul className="fobos-operations__table-head">
        <li className="fobos-operations__table-title">Дата</li>
        <li className="fobos-operations__table-title">Операція</li>
        <li className="fobos-operations__table-title">Сума</li>
      </ul>
      <div className={classNameViewport} id="operations">
        <InfiniteScroll
          dataLength={usrOperation.length}
          hasMore={noMore}
          loader={<StringPreloader />}
          endMessage={
            <Link href="#scrollTop" className="fobos-operations__scrollup-btn">
              <FaAngleDoubleUp style={{paddingTop: '3px', color: 'white', width: '100%'}} />
            </Link>
          }
          scrollableTarget="operations">
          <div id="scrollTop"></div>
          {usrOperation.map((item, ind) => (
            <ul key={ind} className="fobos-operations__table-list">
              <li className="fobos-operations__table-item">
                <div className="fobos-operations__table-cell">
                  <span className="fobos-operations__respnsv">Дата</span>
                  <span>{item.date}</span>
                </div>
                <div className="fobos-operations__table-cell">
                  <span className="fobos-operations__respnsv">Операція</span>
                  <span id="statPay">{item.dsc}</span>
                </div>
                <div className="fobos-operations__table-cell">
                  <span className="fobos-operations__respnsv">Сума</span>
                  <span> {item.sum + ' грн'}</span>
                </div>
              </li>
              <span className="fobos-operations__table-separator"></span>
            </ul>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};
