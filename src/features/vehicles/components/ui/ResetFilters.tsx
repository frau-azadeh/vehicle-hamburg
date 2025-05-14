import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Button from '@/features/vehicles/components/ui/Button';
import { X } from 'lucide-react';

type ResetFiltersProps = {
  onReset: () => void;
};

const ResetFilters = ({ onReset }: ResetFiltersProps) => {
  const router = useRouter();

  const handleClick = () => {
    onReset();
    router.push('/vehicles', { scroll: false });
    toast.success('Filters reset successfully!');
  };

  return (
    <Button variant="outline" onClick={handleClick} className="flex items-center gap-2">
      <X className="w-4 h-4" />
      <span className="text-sm">Reset Filters</span>
    </Button>
  );
};
export default ResetFilters;
