import { Link } from 'react-router-dom';

import { Button } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { ROUTES } from '@constants/routes';
import { AvatarMedium, Username } from '@styles/components';

import { Name, NameHandleWrapper, UserDetails, UserPreviewContainer } from './styled';
import { UserPreviewProps } from './types';

export const UserPreview = ({
  avatarUrl,
  buttonLabel,
  id,
  linkLabel,
  name,
  onButtonClick,
  username,
}: UserPreviewProps) => (
  <Link to={`/profile/${id}`}>
    <UserPreviewContainer>
      <UserDetails>
        <AvatarMedium src={avatarUrl} alt="User Avatar" />
        <NameHandleWrapper>
          <Name>{name}</Name>
          <Username>{username}</Username>
        </NameHandleWrapper>
      </UserDetails>
      {buttonLabel && (
        <div>
          <Button onClick={onButtonClick} label={buttonLabel} name={buttonLabel} styleType={ButtonType.Black} />
        </div>
      )}
      {linkLabel && <Link to={ROUTES.FEED}>{linkLabel}</Link>}
    </UserPreviewContainer>
  </Link>
);
