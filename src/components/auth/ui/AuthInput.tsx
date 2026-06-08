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
      <label className="block text-sm font-medium" style={{ color: "#C9D6DF" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg text-white placeholder:text-[#52616B] transition-all duration-200 outline-none"
        style={{
          backgroundColor: "rgba(82, 97, 107, 0.2)",
          borderColor: "#52616B",
          borderWidth: "1px",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#52616B";
          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(82, 97, 107, 0.3)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#52616B";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
