import { Button } from '@components/common/Button';
import { ButtonType } from '@components/common/Button/types';
import { Footer } from '@components/index';
import { useAuth } from '@hooks/useAuth';
import { HomePage } from '@pages/Home';

import { Container } from './styled';

export const FeedPage = () => {
  const { handleSignOut, isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) return <HomePage />;

  return (
    <Container>
      <div>
        <h1>Welcome back, {user.name}!</h1>`{user.name} {user.email}`
        <Button onClick={handleSignOut} label="Sign Out" name="Sign Out" styleType={ButtonType.Brand} />
        <Footer isFullView={false} />
      </div>
    </Container>
  );
};
