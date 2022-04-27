import * as yup from 'yup';
import { Wallet } from '../../types/models';

// @ts-ignore regression bug in 0.32.9 https://github.com/jquense/yup/issues/1389
export const walletSchema: yup.SchemaOf<Wallet> = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(4, 'Name must be between 4 and 24 characters long')
    .max(24, 'Name must be between 4 and 24 characters long'),
  description: yup.string(),
});
