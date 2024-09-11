import { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form';
import { AnyObject, ObjectSchema } from 'yup';

export interface FormProps<T extends FieldValues, Z extends ObjectSchema<AnyObject>> {
  children: React.ReactNode;
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  yupSchema: Z;
}
