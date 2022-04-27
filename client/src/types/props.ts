import {
  Control,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';
import { Wallet } from './models';

export interface FormProps<T> {
  control: Control<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  handleSubmit: () => Promise<void>;
}

export interface WalletProps extends FormProps<Wallet> {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  data: Wallet[];
}