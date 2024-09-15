import { generateHashProvider } from '@lib/format';

const formatIdToValid = (str: string) => {
  return str.replace(/[^\w\s]/gi, '');
};

export const generateId = async () => formatIdToValid(await generateHashProvider(new Date().toISOString()));
