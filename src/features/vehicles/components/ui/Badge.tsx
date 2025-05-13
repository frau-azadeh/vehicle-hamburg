
import { clsx } from 'clsx';

type BadgeProps = {
  children: string;
  variant?: 'success' | 'error' | 'neutral';
};

const Badge = ({ children, variant = 'neutral' }: BadgeProps) => {
  const classes = clsx(
    'inline-block px-2 py-0.5 rounded-soft text-xs font-semibold shadow-sm',
    {
      'bg-green-100 text-green-700': variant === 'success',
      'bg-red-100 text-red-700': variant === 'error',
      'bg-card text-text': variant === 'neutral',
    }
  );

  return <span className={classes}>{children}</span>;
};

export default Badge;
