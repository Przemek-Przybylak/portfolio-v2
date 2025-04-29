"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navitems";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <section className="flex flex-row justify-between my-[3%] border-[1px] border-[var(--color-bg)] px-[3%] py-[2%] rounded-xl text-1xl text-bold uppercase tracking-tight">
      <p>Przemek Przybylak</p>
      <nav>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href && item.href !== "/";
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-md transition-all hover:text-[var(--hover-accent)] ${
                isActive ? "text-[var(--color-primary)] font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div>
        {" "}
        <button>english</button>
        <button>mode</button>
      </div>
    </section>
  );
}
