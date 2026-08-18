"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";

export const Sidebar = () => {
  const pathname = usePathname();
  const { t, language, changeLanguage } = useLanguage();

  const menuItems = [
    { label: t.nav.orders, href: "/orders" },
    { label: t.nav.products, href: "/products" },
  ];

  return (
    <aside className="sidebar">
      <label
        htmlFor="nav-toggle"
        className="sidebar__close"
        aria-label="Close menu"
      >
        ✕
      </label>

      <nav className="sidebar__nav">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`sidebar__link ${pathname === item.href ? "sidebar__link--active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="sidebar__lang"
        onClick={() => changeLanguage(language === "ru" ? "en" : "ru")}
      >
        {language === "ru" ? "EN" : "RU"}
      </button>
    </aside>
  );
};
