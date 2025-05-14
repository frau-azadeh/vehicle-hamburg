import { ReactNode } from 'react';
type DetailItemProps = {
  label: string;
  value: ReactNode;
};

const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <div className="text-sm flex gap-2 text-text leading-relaxed">
      <span className="font-semibold text-muted">{label}:</span>
      <span>{value}</span>
    </div>
  );
};
export default DetailItem;
