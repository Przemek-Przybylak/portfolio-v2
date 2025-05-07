import { FaPlaceOfWorship } from "react-icons/fa";
import { Interface } from "readline";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
}

export default function Input({ label, placeholder, type }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label}>{label}</label>
      <input
        className="border-1 border-[var(--color-muted)] rounded-md p-2"
        type={type}
        id={label}
        name={label}
        placeholder={placeholder}
      />
    </div>
  );
}
