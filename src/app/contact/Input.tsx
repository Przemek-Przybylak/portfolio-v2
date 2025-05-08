import { FaPlaceOfWorship } from "react-icons/fa";
import { Interface } from "readline";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Input({
  label,
  placeholder,
  type,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label}>{label}</label>
      {type === "text" ? (
        <textarea
          className="border-1 border-[var(--color-muted)] rounded-md p-2"
          required
          id={label}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          className="border-1 border-[var(--color-muted)] rounded-md p-2"
          type={type}
          id={label}
          name={label}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
}
