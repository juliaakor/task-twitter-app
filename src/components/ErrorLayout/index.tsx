import { useNavigate } from 'react-router-dom';

import { Button } from '@components/common/Button';
import { ButtonType } from '@components/common/Button/types';
import { ROUTES } from '@constants/routes';

import { ButtonWrapper, Container, ErrorInfo, Heading } from './styled';
import { ErrorLayoutProps } from './types';

export const ErrorLayout = ({ icon, info, title }: ErrorLayoutProps) => {
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(ROUTES.FEED);
  };

  return (
    <Container>
      {!!icon && <img src={icon} alt="Error Icon" />}
      <Heading>{title}</Heading>
      <ErrorInfo>{info}</ErrorInfo>
      <ButtonWrapper>
        <Button onClick={handleBackNavigation} type="button" label="Back" name="Back" styleType={ButtonType.Brand} />
      </ButtonWrapper>
    </Container>
  );
};
