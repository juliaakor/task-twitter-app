import * as yup from 'yup';

export const loginSchema = yup
  .object({
    emailOrPhone: yup.string().nullable(),
    password: yup.string().nullable(),
  })
  .required();

export const defaultValuesSigninForm = {
  emailOrPhone: '',
  password: '',
};

export type DefaultValuesSigninForm = typeof defaultValuesSigninForm;
