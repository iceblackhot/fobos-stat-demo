import {React, useContext} from 'react';

import {Context} from '../../utils/context';

import './burgerBtn.scss';

function BurgerBtn() {
  const {switchToggled, setSwitchToggled} = useContext(Context);

  const ToggleSwitch = () => setSwitchToggled(!switchToggled);

  const classNameBtn = `btn-burger${switchToggled ? ' active' : ''}`;

  return (
    <div className={classNameBtn} onClick={ToggleSwitch}>
      <span />
    </div>
  );
}
export default BurgerBtn;
