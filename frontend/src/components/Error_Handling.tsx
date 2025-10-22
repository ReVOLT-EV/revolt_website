'use client';

import { useEffect } from "react";

export default function GlobalErrorHandler() {
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      if (e.message && e.message.includes('ERR_BLOCKED_BY_CLIENT')) {
        e.stopImmediatePropagation();
        // console.log('Blocked resource ignored:', e.filename);
      }
    };

    window.addEventListener('error', handleError);

    return () => window.removeEventListener('error', handleError);
  }, []);

  return null;
}