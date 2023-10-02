import * as React from 'react';

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import DialogContentText from '@mui/material/DialogContentText';

import {Context} from '../../../utils/context';

import check from '../../../assests/modal/check.png';

import CloseIcon from '@mui/icons-material/Close';

import './modal.scss';

export default function PayDialog() {
  const {open, handleClickOpen, handleClose} = React.useContext(Context);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open modal
      </Button>
      <Dialog
        style={{padding: '40px'}}
        id="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <CloseIcon
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            cursor: 'pointer',
            color: '#3b9efa',
          }}
          onClick={handleClose}
        />
        <DialogContent style={{textAlign: 'center'}} className="pay-modal">
          <img style={{paddingBottom: '20px'}} src={check} alt="Check img" />
          <DialogContentText
            style={{color: 'black', fontWeight: 'bold', fontSize: '28px', paddingBottom: '20px'}}>
            Вдало!
          </DialogContentText>
          <DialogContentText style={{fontSize: '18px', fontWeight: '700', color: 'black'}}>
            Ваш баланс поповнено на <span style={{color: '#3b9efa'}}>999.00грн</span>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
