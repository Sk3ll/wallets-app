import React, { FC } from 'react';
import { Header } from '../../components/Header';
import { WalletsListContainer } from '../../containers/Wallets';

export const HomePage: FC = () => (
  <>
    <Header />
    <WalletsListContainer />
  </>
);
