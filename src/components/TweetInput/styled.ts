import styled from 'styled-components';

export const TweetInputContainer = styled.div`
  display: flex;

  ${({ theme }) => `
    padding: ${theme.spacing.medium};
    border: ${theme.size.small}px solid ${theme.colors.borderGrayButton};
    background: ${theme.colors.bgPrimary};
  `}
`;

export const ImageButtonContainer = styled.div`
  cursor: pointer;
`;

export const InputArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;

  ${({ theme }) => `
    width: ${theme.size.full};
    padding: ${theme.spacing.smallX};
    font-size: ${theme.fontSize.medium};
    border-radius: ${theme.radius.small};
    font-family: ${theme.fontFamily.primary};
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.bgPrimary};
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.small};

  & button {
    padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium4X}`};
    width: auto;
  }

  & svg path {
    fill: ${({ theme }) => theme.colors.hightlightBrand};
  }
`;

export const Input = styled.input`
  display: none;
`;
