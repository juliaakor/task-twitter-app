export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  headerPicUrl?: string;
  bio?: string;
  createdAt: string;
  updatedAt?: string;
  followers: string[];
  following: string[];
  name: string;
  token?: string;
  email?: string;
  phone?: string;
  password?: string;
  birthday?: string;
}

export type UserWithoutPassword = Partial<Omit<User, 'password'>>;
