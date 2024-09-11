import { SignupFormDataWithPhone, SignupFormDataWithEmail } from '@/lib/yup/signup';

export interface UserRegistration extends SignupFormDataWithPhone, SignupFormDataWithEmail {
  birthday: string;
}
