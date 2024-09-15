import defautProfile from '@assets/images/defaultProfile.png';
import { Button } from '@components/common/Button';
import { ButtonType } from '@components/common/Button/types';
import { Navbar } from '@components/Navbar';
import { UserPreview } from '@components/UserPreview';
import { useAuth } from '@hooks/useAuth';

import { SidebarContainer, Wrapper, UserWrapper } from './styled';

export const LeftSidebar = () => {
  const { handleSignOut, user } = useAuth();

  return (
    <SidebarContainer>
      <Navbar />
      <Wrapper>
        <UserWrapper>
          <UserPreview
            id={user.id}
            avatarUrl={user.avatarUrl || defautProfile}
            name={user.name}
            username={user.username}
          />
        </UserWrapper>
        <Button onClick={handleSignOut} label="Log out" name="Log out" styleType={ButtonType.Disabled} />
      </Wrapper>
    </SidebarContainer>
  );
};
