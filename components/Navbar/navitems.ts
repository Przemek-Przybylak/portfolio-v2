export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Technologie", href: "/tech" },
  { name: "Kontakt", href: "/contact" },
];
