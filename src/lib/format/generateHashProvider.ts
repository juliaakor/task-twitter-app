import { hash } from 'bcrypt';

export const generateHashProvider = (payload: string) => hash(payload, 12);
