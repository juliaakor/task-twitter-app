import styled from 'styled-components';

const HeaderHeight = '12.5rem';
const AvatarTop = '9.375rem';

export const ProfileHeaderContainer = styled.div`
  position: relative;

  ${({ theme }) => `
    border: ${theme.size.small}px solid ${theme.colors.borderGrayButton};
  `}
`;

export const HeaderPic = styled.img`
  object-fit: cover;

  ${({ theme }) => `
    width: ${theme.size.full};
    height: ${HeaderHeight};
  `}
`;

export const Avatar = styled.img`
  position: absolute;

  ${({ theme }) => `
    width: ${theme.size.avatarLarge};
    height: ${theme.size.avatarLarge};
    border-radius: ${theme.radius.circle};
    top: ${AvatarTop};
    left: ${theme.spacing.mediumX};
  `}
`;

export const UserDetails = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.large4X} ${theme.spacing.largeX};
  `}
`;

export const Name = styled.div`
  ${({ theme }) => `
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.medium};
  `}
`;

export const Handle = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.textInfo};
    font-size: ${theme.fontSize.smallX};
  `}
`;

export const Bio = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing.small};
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.textPrimary};
  `}
`;

export const FollowInfo = styled.div`
  display: flex;

  ${({ theme }) => `
    margin-top: ${theme.spacing.small};
  `}
`;

export const FollowItem = styled.div`
  ${({ theme }) => `
    margin-right: ${theme.spacing.medium};
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.textPrimary};

    & > span {
      font-weight: ${theme.fontWeight.bold};
      margin-right: ${theme.spacing.smallX};
    }
  `}
`;

export const EditButton = styled.div`
  float: right;
  width: min-content;
  position: relative;

  ${({ theme }) => `
    top: ${theme.spacing.medium};
    right: ${theme.spacing.small2X};

    & button {
      width: ${theme.size.full};
      font-size: ${theme.fontSize.medium2X};
      font-weight: ${theme.fontWeight.semiBold};
      padding: ${theme.spacing.small2X} ${theme.spacing.small};
    }
  `}
`;
