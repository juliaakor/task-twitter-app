import defautProfilePic from '@assets/images/defaultProfile.png';
import defautProfileHeader from '@assets/images/defaultProfileHeader.png';
import { Button } from '@components/common';
import { ButtonType } from '@components/common/Button/types';

import {
  Avatar,
  Bio,
  EditButton,
  FollowInfo,
  FollowItem,
  Handle,
  HeaderPic,
  Name,
  ProfileHeaderContainer,
  UserDetails,
} from './styled';
import { ProfileProps } from './types';

export const ProfileHeader = ({
  avatarUrl,
  bio,
  followers,
  following,
  headerPicUrl,
  isAuthUser,
  name,
  onEditProfile,
  username,
}: ProfileProps) => (
  <ProfileHeaderContainer>
    <HeaderPic src={headerPicUrl || defautProfileHeader} alt="Header Pic" />
    <Avatar src={avatarUrl || defautProfilePic} alt="Profile Pic" />
    {isAuthUser && (
      <EditButton>
        <Button onClick={onEditProfile} styleType={ButtonType.Outline} label="Edit Profile" name="Edit Profile" />
      </EditButton>
    )}
    <UserDetails>
      <Name>{name}</Name>
      <Handle>{username}</Handle>
      <Bio>{bio}</Bio>
      {isAuthUser && (
        <FollowInfo>
          <FollowItem>
            <span>{following?.length}</span> Following
          </FollowItem>
          <FollowItem>
            <span>{followers?.length}</span> Followers
          </FollowItem>
        </FollowInfo>
      )}
    </UserDetails>
  </ProfileHeaderContainer>
);
