import { useId } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { ErrorMessage } from '@styles/components';

import { SelectContainer, SelectItem, SelectOption, SelectOptions } from './styled';
import { SelectProps } from './types';

export const Select = ({ label, name, options, validation, ...props }: SelectProps) => {
  const {
    control,
    formState: { defaultValues },
  } = useFormContext();

  const {
    field: { onChange, value = '' },
    fieldState: { error },
  } = useController({
    control,
    defaultValue: defaultValues?.[name] || '',
    name,
    rules: { ...validation },
  });

  const selectId = name + useId();

  return (
    <SelectItem>
      <SelectContainer>
        <SelectOptions id={selectId} name={name} onChange={onChange} value={value} {...props}>
          <SelectOption value="" disabled>
            {label}
          </SelectOption>
          {options.map(({ label, value }) => (
            <SelectOption key={value} value={value}>
              {label}
            </SelectOption>
          ))}
        </SelectOptions>
      </SelectContainer>
      <ErrorMessage $isVisible={!!error}>{error?.message}</ErrorMessage>
    </SelectItem>
  );
};
