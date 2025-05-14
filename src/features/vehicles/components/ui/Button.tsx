import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};
const Button = ({ variant = 'default', className, ...props }: ButtonProps) => {
  const baseClass = clsx(
    'text-sm px-4 py-2 rounded-soft font-medium transition duration-150',
    {
      'bg-primary text-white hover:bg-primary/90 shadow': variant === 'default',

      'bg-outline text-white border border-border hover:bg-outline/80 shadow-sm':
        variant === 'outline',
    },
    className
  );

  return <button className={baseClass} {...props} />;
};
export default Button;
