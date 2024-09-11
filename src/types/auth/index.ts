import { UserCredential, AdditionalUserInfo } from 'firebase/auth';

import { User, UserLogin, UserRegistration } from '@type/models';

export interface AuthRepository {
  signUpUser(data: UserRegistration): Promise<User | undefined>;
  signInUser(data: UserLogin): Promise<User | undefined>;
  signUpUserWithGoogle(): Promise<User | undefined>;
  signOut(): Promise<void>;
}

export interface GoogleUserProfile {
  email?: string;
  given_name?: string;
  family_name?: string;
  birthday?: string;
}

export interface ExtendedUserCredential extends UserCredential {
  additionalUserInfo?: AdditionalUserInfo;
}
