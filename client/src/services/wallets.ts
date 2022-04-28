import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_API_URL } from '../utils/constants';
import { Wallet } from '../types/models';

export default createApi({
  reducerPath: 'wallets',
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_URL }),
  tagTypes: ['Wallet'],
  endpoints: build => ({
    createWallet: build.mutation<Wallet, Wallet>({
      query: body => ({
        url: 'wallets',
        method: 'POST',
        body,
      }),
    }),
    getWallets: build.query<Wallet[], void>({
      query: () => ({
        url: 'wallets',
      }),
    }),
    deleteWallet: build.mutation<Wallet, Wallet>({
      query: body => ({
        url: 'wallets',
        method: 'DELETE',
        body,
      }),
    }),
  }),
});
