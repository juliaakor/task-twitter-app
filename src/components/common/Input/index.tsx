import { useId } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { ErrorMessage } from '@styles/components';

import { InputItem } from './styled';
import { InputProps } from './types';

export const Input = ({ label, name, type, validation, ...props }: InputProps) => {
  const {
    control,
    formState: { defaultValues },
  } = useFormContext();

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    defaultValue: defaultValues?.[name],
    name,
    rules: { ...validation },
  });

  const inputId = name + useId();

  return (
    <div>
      <InputItem aria-label={label} id={inputId} name={name} onChange={onChange} type={type} value={value} {...props} />
      <ErrorMessage $isVisible={!!error}>{error?.message}</ErrorMessage>
    </div>
  );
};
