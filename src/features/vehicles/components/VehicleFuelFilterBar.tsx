'use client';



type FuelFilterDropdownProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

const FuelFilterDropdown = ({ options, selected, onChange }: FuelFilterDropdownProps) => {
  return (
    <div className="text-sm text-text">
      <label className="block mb-1 font-medium">Fuel Type</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-44 p-2 rounded-md border border-border bg-card text-text"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FuelFilterDropdown;


