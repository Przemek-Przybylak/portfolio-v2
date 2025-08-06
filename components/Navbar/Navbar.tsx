"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navitems";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="flex flex-row justify-between items-center
     md:my-[3%] px-[3%] py-[2%]
      border-[1px] border-[var(--color-bg)]  rounded-xl 
    text-[10px] md:text-[20px] text-bold uppercase tracking-tight text-bold
    "
    >
      <Link href="/">Przemek Przybylak</Link>
      <nav>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href && item.href !== "/";
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative md:px-4 md:py-2 px-2 py-1 rounded-md transition-all hover:text-[var(--hover-accent)] ${
                isActive ? "text-[var(--color-primary)] font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div> </div>
    </header>
  );
}
