import React, {useContext} from 'react';

import {Context} from '../../utils/context';

import {Info} from '../info/info';

import {Operations} from '../operations/operations';

import {LanManager} from '../lanManager/lanManager';

import {Contacts} from '../../contacts/contacts';

import {Buttons} from '../../fobosBtns/buttons';

import {ButtonUp} from '../../buttonUp/buttonUp';

import './main.scss';

export const Main = () => {
  return (
    <section className="fobos-main">
      <Info />
      <Buttons />
      <Operations />
      <LanManager />
      <Contacts />
      <ButtonUp />
    </section>
  );
};
