'use client';

import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { formatFuelLabel } from '../utils/fuelTypeUtils';

type FuelFilterDropdownProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

const FuelFilterDropdown = ({ options, selected, onChange }: FuelFilterDropdownProps) => {
  return (
    <div className="text-sm text-text">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1 w-44">
          <ListboxButton
            className={clsx(
              'relative w-full cursor-pointer rounded-xl bg-card py-2 pl-4 pr-10 text-left text-sm',
              'border border-border shadow-sm',
              'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40',
              'transition duration-150 ease-in-out'
            )}
          >
            <span>{formatFuelLabel(selected)}</span>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className="w-4 h-4 text-muted" />
            </span>
          </ListboxButton>

          <ListboxOptions
            className={clsx(
              'absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white shadow-lg ring-1 ring-black/10',
              'focus:outline-none text-sm'
            )}
          >
            {options.map((opt) => (
              <ListboxOption
                key={opt}
                value={opt}
                className={({ active }) =>
                  clsx(
                    'relative cursor-pointer select-none py-2 pl-10 pr-4',
                    active ? 'bg-primary text-white' : 'text-text'
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span className={clsx('block truncate', selected && 'font-medium')}>
                      {formatFuelLabel(opt)}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-3 flex items-center text-white">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default FuelFilterDropdown;
