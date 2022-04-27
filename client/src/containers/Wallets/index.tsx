import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContent } from 'react-toastify';
import { WalletsList } from '../../components/Wallets/WalletsList';
import { useModal } from '../../hooks/useModal';
import { Wallet } from '../../types/models';
import { walletsApi } from '../../services';
import { walletSchema } from '../../utils/validation';

export const WalletsListContainer: FC = () => {
  const { data: wallets = [], isLoading } = walletsApi.useGetWalletsQuery(5);
  const [createWallet, createdWallet] = walletsApi.useCreateWalletMutation();
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
      console.log(createdWallet);
      const wallet = {
        ...data,
        createdDate: new Date()
      };
      await createWallet(wallet).unwrap();
      toast.success(`Wallet ${data.name} created successfully`);
      handleClose();
    } catch ({ error }) {
      toast.error(error as unknown as ToastContent);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
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
