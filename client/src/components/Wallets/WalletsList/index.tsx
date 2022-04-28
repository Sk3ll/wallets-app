import React, { FC } from 'react';
import { Grid, Button, Typography, Card, CardHeader, CardContent, CardActions, IconButton } from '@mui/material';
import { Info as InfoIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import moment from 'moment';
import { Buttons, CARD_DATE_FORMAT } from '../../../utils/constants';
import { WalletsForm } from '../WalletsForm';
import { WalletProps } from '../../../types/props';

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
  <Grid m='0 10px'>
    <Grid container justifyContent='flex-end' m='10px 0'>
      <Button variant='contained' onClick={handleOpen}>
        {Buttons.AddWallet}
      </Button>
    </Grid>

    <Grid container direction='row' gap='20px'>
      {data.length > 0 &&
        data.map((wallet) => (
          <Card key={wallet.id} sx={{ maxWidth: 345, minWidth: 345 }}>
            <Grid container direction='column' justifyContent='space-between' height='100%'>
              <CardHeader
                title={wallet.name}
                subheader={
                  wallet.edited
                    ? `Edited ${moment(wallet.edited).format(CARD_DATE_FORMAT)}`
                    : moment(wallet.created).format(CARD_DATE_FORMAT)
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {wallet.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </CardActions>
            </Grid>
          </Card>
        ))}
    </Grid>

    {!data.length && <Typography>{`Data isn't exist`}</Typography>}

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
  </Grid>
);
