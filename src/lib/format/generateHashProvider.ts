import { hash } from 'bcryptjs';

export const generateHashProvider = (payload: string) => hash(payload, 12);
