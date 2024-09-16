import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Loader } from '@/components';
import { defaultValuesSignupForm, emailSpecificSchema, phoneSpecificSchema, SignupFormData } from '@/lib/yup/signup';
import TwitterLogo from '@assets/images/twitterLogo.png';
import { Form, Input, Select, Button } from '@components/common';
import { ButtonType } from '@components/common/Button/types';
import { ROUTES } from '@constants/routes';
import { BIRTHDAY_SELECTS } from '@constants/select';
import { formatToBirthdayString } from '@lib/format/formatToBirthdayString';
import { signUpRequest } from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import { ErrorMessage } from '@styles/components';
import { UserRegistration } from '@type/models';

import { FormContainer, Heading, Image, Info, LinkItem, Selects } from './styled';
import { SignUpTypeFieldProps } from './types';

const SignUpTypeFieldOptions = {
  email: {
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  phone: {
    label: 'Phone number',
    name: 'phone',
    placeholder: 'Phone number',
    type: 'text',
  },
};

const SignUpTypeField = ({ useEmail }: SignUpTypeFieldProps) => {
  const { setValue } = useFormContext();

  const fieldAttr = useEmail ? SignUpTypeFieldOptions.email : SignUpTypeFieldOptions.phone;

  useEffect(() => {
    if (useEmail) {
      setValue('email', '');

      return;
    }

    setValue('phone', '');
  }, [useEmail, setValue]);

  return <Input {...fieldAttr} />;
};

export const SignupPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, signUpError } = useAppSelector((state) => state.auth);
  const [useEmail, setUseEmail] = useState(true);

  const signupSchema = useEmail ? emailSpecificSchema : phoneSpecificSchema;

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data: SignupFormData) => {
    const { day, month, year } = data;

    const birthday = formatToBirthdayString(day, month, year);

    const payload = { ...data, birthday } as UserRegistration;

    dispatch(signUpRequest(payload));
  };

  const handleChangeSignUpType = () => {
    setUseEmail((prev) => !prev);
  };

  if (isLoading) return <Loader />;

  return (
    <FormContainer>
      <Image src={TwitterLogo} alt="Twitter Logo" />
      <Heading>Create an account</Heading>

      <ErrorMessage $isVisible={!!signUpError}>{signUpError}</ErrorMessage>
      <Form defaultValues={defaultValuesSignupForm} onSubmit={onSubmit} yupSchema={signupSchema}>
        <Input type="text" label="Name" name="name" placeholder="Name" />
        <SignUpTypeField useEmail={useEmail} />
        <Input type="password" label="Password" name="password" placeholder="Password" />
        <LinkItem onClick={handleChangeSignUpType}>{useEmail ? 'Use phone number' : 'Use email'}</LinkItem>
        <h4>Date of birth</h4>
        <Info>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna
          lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim
          eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </Info>
        <Selects>
          {BIRTHDAY_SELECTS.map((selectAttr) => (
            <Select key={selectAttr.name} {...selectAttr} />
          ))}
        </Selects>
        <Button type="submit" name="Next" label="Next" styleType={ButtonType.Brand} />
      </Form>
    </FormContainer>
  );
};
