import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({  variant = 'primary',  size = 'medium', children, className, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  );
};
