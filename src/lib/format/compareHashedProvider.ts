import { compare } from 'bcrypt';

export const compareHashedProvider = (payload: string, hashed: string) => compare(payload, hashed);
