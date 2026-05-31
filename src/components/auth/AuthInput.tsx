interface AuthInputProps {
    label: string;
  
    type: string;
  
    placeholder: string;
  }
  
  export function AuthInput({
    label,
    type,
    placeholder,
  }: AuthInputProps) {
    return (
      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          {label}
        </label>
  
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all focus:border-zinc-500"
        />
      </div>
    );
  }