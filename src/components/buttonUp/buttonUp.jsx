import React, {useState, useEffect} from 'react';

import './buttonUp.scss';

import {FaAngleDoubleUp} from 'react-icons/fa';

export const ButtonUp = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <div
      className={
        scroll > document.documentElement.clientHeight / 1.46
          ? 'button-up '
          : 'button-up  button-up_hidden'
      }
      onClick={() => window.scroll(0, 0)}>
      <i className="button-up__arrow">
        <FaAngleDoubleUp />
      </i>
    </div>
  );
};
