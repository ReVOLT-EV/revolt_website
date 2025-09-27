"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('https://revolt-website-logsys.onrender.com/check', {
        credentials: 'include',
      });
      if (!res.ok) router.push('/');
    };
    checkAuth();
  }, [router]);
}
