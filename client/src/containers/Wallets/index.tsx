import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContent } from 'react-toastify';
import moment from 'moment';
import { LinearProgress } from '@mui/material';
import { WalletsList } from '../../components/Wallets/WalletsList';
import { useModal } from '../../hooks/useModal';
import { Wallet } from '../../types/models';
import { walletsApi } from '../../services';
import { walletSchema } from '../../utils/validation';
import { DEFAULT_DATE_FORMAT } from '../../utils/constants';

export const WalletsListContainer: FC = () => {
  const [getWallets, { data: wallets = [], isLoading }] = walletsApi.useLazyGetWalletsQuery();
  const [createWallet] = walletsApi.useCreateWalletMutation();
  const { open, handleOpen, handleClose } = useModal();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<Wallet>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
    },
    resolver: yupResolver(walletSchema),
  });

  const submitHandler: SubmitHandler<Wallet> = async (data) => {
    try {
      const wallet: Wallet = {
        ...data,
        created: moment().format(DEFAULT_DATE_FORMAT),
      };
      await createWallet(wallet).unwrap();
      toast.success(`Wallet ${data.name} created successfully`);
      handleClose();
      getWallets();
    } catch ({ error }) {
      toast.error(error as unknown as ToastContent);
    }
  };

  useEffect(() => {
    getWallets();
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <WalletsList
      data={wallets}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      errors={errors}
      control={control}
      register={register}
      handleSubmit={handleSubmit(submitHandler)}
    />
  );
};
