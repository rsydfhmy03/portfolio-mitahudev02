'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function FrontendLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith('/sys-admin')) {
    return null;
  }

  return <>{children}</>;
}
