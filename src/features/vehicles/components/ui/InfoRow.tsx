import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type InfoRowProps = {
  label: string;
  value: ReactNode;
  muted?: boolean;
};

const InfoRow = ({ label, value, muted = false }: InfoRowProps) => {
  return (
    <p className="text-sm">
      {label}:{' '}
      <span className={clsx(muted ? 'text-muted' : 'font-normal')}>{value}</span>
    </p>
  );
};

export default InfoRow;
