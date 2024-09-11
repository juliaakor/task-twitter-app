import { InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  validation?: RegisterOptions<FieldValues, string>;
}
