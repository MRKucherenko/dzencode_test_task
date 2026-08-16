'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Приход', href: '/orders' },
  { label: 'Группы', href: '/groups' },
  { label: 'Продукты', href: '/products' },
  { label: 'Пользователи', href: '/users' },
  { label: 'Настройки', href: '/settings' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? 'active' : ''}
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
};
