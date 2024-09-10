import { compare } from 'bcryptjs';

export const compareHashedProvider = (payload: string, hashed: string) => compare(payload, hashed);
