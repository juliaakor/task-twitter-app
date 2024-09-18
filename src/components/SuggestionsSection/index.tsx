import { KeyboardEvent, useState } from 'react';

import { useAuth } from '@/hooks';
import { useUser } from '@/hooks/useUser';
import { LinkItem } from '@/styles/components';
import defautProfile from '@assets/images/defaultProfile.png';
import { UserPreview } from '@components/UserPreview';

import { SuggestionsContainer, SuggestionsHeader, UsersContainer } from './styled';

const INITIAL_VISIBLE_USERS = 2;
const USERS_INCREMENT = 2;

export const SuggestionsSection = () => {
  const { users } = useUser();
  const { user: activeUser } = useAuth();

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_USERS);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + USERS_INCREMENT);
  };

  const displayedUsers = users.slice(0, visibleCount);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    handleShowMore();
  };

  return (
    displayedUsers.length > 0 && (
      <SuggestionsContainer>
        <SuggestionsHeader>You Might Like</SuggestionsHeader>
        <UsersContainer>
          {displayedUsers.map((user) =>
            activeUser?.id === user.id ? null : (
              <UserPreview
                key={user.id}
                id={user.id}
                avatarUrl={user.avatarUrl || defautProfile}
                name={user.name}
                username={user.username}
                buttonLabel="Follow"
              />
            )
          )}
          {users.length > visibleCount && (
            <LinkItem role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleShowMore}>
              Show More
            </LinkItem>
          )}
        </UsersContainer>
      </SuggestionsContainer>
    )
  );
};
