// app/(member-access)/layout.tsx
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ReactNode } from 'react';
// import { redirect } from 'next/navigation';

export default async function MemberAccessLayout({ children }: { children: ReactNode }) {

  // IMPORTANT: val must always be set to 1 for PRODUCTION. 
  // Otherwise set to 0 when in DEVELOPMENT mode
  const val = 1;

  return (
    <>
      {val ? (
        <ProtectedRoute>
          <div>{children}</div>
        </ProtectedRoute>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
