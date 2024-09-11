import { yupResolver } from '@hookform/resolvers/yup';
import { useId } from 'react';
import { FieldValues, FormProvider, Resolver, useForm } from 'react-hook-form';
import { AnyObject, ObjectSchema } from 'yup';

import { FormItem } from './styled';
import { FormProps } from './types';

export const Form = <T extends FieldValues, Z extends ObjectSchema<AnyObject>>({
  children,
  defaultValues,
  onSubmit,
  yupSchema,
  ...props
}: FormProps<T, Z>) => {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver(yupSchema) as unknown as Resolver<T>,
  });

  const { handleSubmit } = methods;

  const formId = useId();

  return (
    <FormProvider {...methods}>
      <FormItem id={formId} noValidate onSubmit={handleSubmit(onSubmit)} {...props}>
        {children}
      </FormItem>
    </FormProvider>
  );
};
