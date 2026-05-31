interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AuthInput({
  label,
  type,
  placeholder,
  value,
  onChange,
}: AuthInputProps) {
  return (
    <div className="space-y-2.5">
      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none"
      />
    </div>
  );
}
