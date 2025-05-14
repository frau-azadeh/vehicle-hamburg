import { ReactNode } from 'react';
import { clsx } from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'p-4 rounded-soft border border-border bg-card text-text shadow-sm transition-all',
        'hover:shadow-md hover:border-primary/30',
        className
      )}
    >
      {children}
    </div>
  );
};
export default Card;
