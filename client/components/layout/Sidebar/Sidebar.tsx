"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";

export const Sidebar = () => {
  const pathname = usePathname();
  const { t, language, changeLanguage } = useLanguage();

  const menuItems = [
    { label: t.nav.orders, href: "/orders" },
    { label: t.nav.groups, href: "/groups" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.users, href: "/users" },
    { label: t.nav.settings, href: "/settings" },
  ];

  return (
    <aside>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? "active" : ""}
        >
          {item.label}
        </Link>
      ))}

      <button onClick={() => changeLanguage(language === "ru" ? "en" : "ru")}>
        {language === "ru" ? "EN" : "RU"}
      </button>
    </aside>
  );
};
