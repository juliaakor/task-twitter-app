import { Link, useNavigate } from 'react-router-dom';

import backTwitter from '@assets/images/backTwitter.png';
import googleIcon from '@assets/images/googleIcon.png';
import TwitterLogo from '@assets/images/twitterLogo.png';
import { Button, Switch } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { Footer } from '@components/index';
import { ROUTES } from '@constants/routes';
import { signUpWithGoogle } from '@store/auth/authActions';
import { useAppDispatch } from '@store/index';
import { LinkItem } from '@styles/components';

import {
  Image,
  FooterWrapper,
  ImageLogo,
  Heading,
  SecondaryHeading,
  PageWrapper,
  Info,
  SecondaryInfo,
  SignUpContainer,
  GoogleIcon,
  SwitchWrapper,
  PageCountainer,
} from './styled';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate(ROUTES.HOME);
  };

  const handleGoogleSignUp = () => {
    dispatch(signUpWithGoogle());
  };

  const handleEmailSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  };

  const AuthButtons = [
    {
      icon: <GoogleIcon src={googleIcon} alt="Google Icon" />,
      label: 'Sign up with Google',
      onClick: handleGoogleSignUp,
      styleType: ButtonType.Outline,
    },
    { icon: null, label: 'Sign up with email', onClick: handleEmailSignUp, styleType: ButtonType.Outline },
  ];

  return (
    <>
      <SwitchWrapper>
        <Switch />
      </SwitchWrapper>
      <PageCountainer>
        <Image loading="lazy" src={backTwitter} alt="Twitter Background" />

        <PageWrapper>
          <ImageLogo src={TwitterLogo} alt="Twitter Logo" onClick={handleNavigateHome} />
          <Heading>Happening now</Heading>
          <SecondaryHeading>Join Twitter today</SecondaryHeading>
          <SignUpContainer>
            {AuthButtons.map(({ icon, label, onClick, styleType }) => (
              <Button key={label} onClick={onClick} label={label} name={label} styleType={styleType}>
                {icon}
              </Button>
            ))}
            <SecondaryInfo>
              By singing up you agree to the{' '}
              <LinkItem>
                <Link to={ROUTES.NOT_FOUND}>Terms of Service</Link>
              </LinkItem>{' '}
              and{' '}
              <LinkItem>
                <Link to={ROUTES.NOT_FOUND}>Privacy Policy</Link>
              </LinkItem>
              , including{' '}
              <LinkItem>
                <Link to={ROUTES.NOT_FOUND}>Cookie Use</Link>
              </LinkItem>
              .
            </SecondaryInfo>
            <Info>
              Already have an account?{' '}
              <LinkItem>
                <Link to={ROUTES.SIGN_IN}>Log in</Link>
              </LinkItem>
            </Info>
          </SignUpContainer>
        </PageWrapper>

        <FooterWrapper>
          <Footer isFullView />
        </FooterWrapper>
      </PageCountainer>
    </>
  );
};
