import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material';
import { Delete as DeleteIcon, Info } from '@mui/icons-material';
import { Buttons } from '../../../utils/constants';
import { Wallet } from '../../../types/models';
import { WalletsForm } from '../WalletsForm';
import { WalletProps } from '../../../types/props';

const rows: Wallet[] = [{ id: 1, name: 'My Wallet', description: '', created: new Date() }];

export const WalletsList: FC<WalletProps> = ({
  open,
  handleOpen,
  handleClose,
  errors,
  register,
  control,
  handleSubmit,
  data,
}) => (
  <>
    <Grid container justifyContent='flex-end' m='10px 0'>
      <Button variant='contained' onClick={handleOpen}>
        {Buttons.AddWallet}
      </Button>
    </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Description</TableCell>
            <TableCell align='center'>Created</TableCell>
            <TableCell align='center'>Edited</TableCell>
            <TableCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((row) => (
              <TableRow key={row.id || row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.description}</TableCell>
                <TableCell align='center'>{`${row.created}`}</TableCell>
                <TableCell align='center'>{row.edited?.toISOString() || ''}</TableCell>
                <TableCell align='right'>
                  <Button variant='contained'>
                    <Info />
                  </Button>
                  <Button variant='contained'>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <span>{`Data isn't exist`}</span>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    <WalletsForm
      open={open}
      handleClose={handleClose}
      errors={errors}
      control={control}
      register={register}
      handleSubmit={handleSubmit}
      handleOpen={handleOpen}
      data={data}
    />
  </>
);
