import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TwitterLogo from '@assets/images/twitterLogo.png';
import { Button, Form, Input } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { ROUTES } from '@constants/routes';
import { DefaultValuesSigninForm, defaultValuesSigninForm, loginSchema } from '@lib/yup/signin';
import { signInRequest, selectAuthState } from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import { ErrorMessage, LinkItem, LinkItemPosition } from '@styles/components';

import { FormContainer, Image, Heading } from './styled';

export const SigninPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useAppSelector(selectAuthState);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.FEED);
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data: DefaultValuesSigninForm) => {
    dispatch(signInRequest(data));
  };

  return (
    <div>
      <FormContainer>
        <Image src={TwitterLogo} alt="Twitter Logo" />
        <Heading>Log in to Twitter</Heading>
        <ErrorMessage $isVisible={!!error}>{error}</ErrorMessage>
        <Form defaultValues={defaultValuesSigninForm} yupSchema={loginSchema} onSubmit={onSubmit}>
          <Input type="text" label="Email or Phone" name="emailOrPhone" placeholder="Phone number, email address" />
          <Input type="password" label="Password" name="password" placeholder="Password" />
          <Button type="submit" name="Log In" label="Log In" styleType={ButtonType.Brand} />
        </Form>
        <LinkItem $positions={[LinkItemPosition.FloatRight]}>
          <Link to={ROUTES.SIGN_UP}>Sign up to Twitter</Link>
        </LinkItem>
      </FormContainer>
    </div>
  );
};
