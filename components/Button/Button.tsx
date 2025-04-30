export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div
      className="
      inline-block mt-[5%] p-[3px] rounded-lg
      bg-gradient-to-r from-[var(--color-muted)] to-[var(--color-accent)]
      transition-transform hover:scale-105
    "
    >
      <button
        className={`
        px-6 py-3 w-full uppercase 
        text-[var(--color-text)]
        bg-[var(--color-light)]
        rounded-lg -transform
        hover:scale-105
        ${className}
      `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
