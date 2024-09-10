export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: string;
  updatedAt?: string;
  followers?: User[];
  following: User[];
  name: string;
  token?: string;
  email?: string;
  phone?: string;
  password?: string;
  birthday?: string;
}
