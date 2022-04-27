import React, { FC, CSSProperties } from 'react';
import { Button, Dialog, DialogActions, DialogTitle, Typography, TextField, Grid } from '@mui/material';
import { Controller } from 'react-hook-form';
import { WalletForm } from '../../../utils/constants';
import { WalletProps } from '../../../types/props';

const style: CSSProperties = { margin: '0 24px', display: 'flex', flexDirection: 'column', rowGap: '10px' };

export const WalletsForm: FC<WalletProps> = ({ open, handleClose, control, errors, handleSubmit }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{WalletForm.Title}</DialogTitle>
    <form style={style}>
      <Controller
        shouldUnregister
        name='name'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <TextField
            variant='standard'
            placeholder={WalletForm.Name}
            label={WalletForm.Name}
            value={value}
            onChange={onChange}
            error={!!errors.name}
          />
        )}
      />
      <Typography>{errors.name?.message}</Typography>

      <Controller
        shouldUnregister
        name='description'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <TextField
            variant='standard'
            placeholder={WalletForm.Description}
            label={WalletForm.Description}
            value={value}
            onChange={onChange}
            error={!!errors.description}
          />
        )}
      />
      <Typography>{errors.description?.message}</Typography>
    </form>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </DialogActions>
  </Dialog>
);
