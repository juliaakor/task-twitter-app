import { Loader } from '@components/index';
import { Layout } from '@components/Layout';
import { useAuth } from '@hooks/useAuth';
import { HomePage } from '@pages/Home';

import { LayoutPageProps } from './types';

export const LayoutPage = ({ children }: LayoutPageProps) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) return <Loader />;

  if (!isAuthenticated || !user) return <HomePage />;

  return <Layout>{children}</Layout>;
};
