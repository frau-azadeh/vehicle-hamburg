import { clsx } from 'clsx';

export type FuelBadgeProps = {
  level: number;
};

const FuelBadge = ({ level }: FuelBadgeProps) => {
  const color = clsx(
    'font-semibold',
    level >= 70
      ? 'text-green-600'
      : level >= 40
      ? 'text-yellow-600'
      : 'text-red-500'
  );

  return <span className={color}>{level}%</span>;
};

export default FuelBadge;
