import { ButtonItem } from './styled';
import { ButtonProps } from './types';

export const Button = ({ children, label, name, styleType, ...props }: ButtonProps) => {
  return (
    <ButtonItem $type={styleType} aria-label={label} {...props}>
      {children}
      {name}
    </ButtonItem>
  );
};
