import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonType {
  Brand = 'brand',
  Outline = 'outline',
  Black = 'black',
  Disabled = 'disabled',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  name: string;
  styleType: ButtonType;
  children?: ReactNode;
}

export interface ButtonItemProps {
  $type: ButtonType;
}
