import * as yup from 'yup';
import { InferType } from 'yup';

export const baseSchema = yup.object({
  day: yup.string().required('Day is required').min(1, 'Day is not valid').max(31, 'Day is not valid'),
  month: yup.string().required('Month is required'),
  name: yup.string().required('Name is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  year: yup
    .string()
    .required('Year is required')
    .test('valid-year', 'Year is not valid', (value) => {
      const year = parseInt(value || '', 10);

      return !Number.isNaN(year) && year >= new Date().getFullYear() - 100 && year <= new Date().getFullYear();
    }),
});

export const emailSpecificSchema = baseSchema.shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const phoneSpecificSchema = baseSchema.shape({
  phone: yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
});

export const defaultValuesSignupForm = {
  day: '',
  email: '',
  month: '',
  name: '',
  password: '',
  phone: '',
  year: '',
};

export type SignupFormDataWithPhone = InferType<typeof phoneSpecificSchema>;
export type SignupFormDataWithEmail = InferType<typeof emailSpecificSchema>;

export type SignupFormData = SignupFormDataWithPhone | SignupFormDataWithEmail;
