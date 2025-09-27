// app/(member-access)/layout.tsx
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

export default async function MemberAccessLayout({ children }: { children: ReactNode }) {

  // Call backend API to check session
  const res = await fetch("https://revolt-website-logsys.onrender.com/check", {
    method: "GET",
    credentials: "include", // cookies sent with request
    cache: "no-store",      // prevent caching for SSR
  });

  if (!res.ok) {
    redirect("/"); // Not logged in → redirect to landing page
  }

  return (
    <div>
      {children}
    </div>
  );
}
