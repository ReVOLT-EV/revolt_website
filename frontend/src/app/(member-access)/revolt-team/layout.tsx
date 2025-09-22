// app/(member-access)/layout.tsx
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { ReVOLT_Header } from '@/components/ReVOLT_Header';

export default async function MemberAccessLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');

  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <ReVOLT_Header/>
      {children}
    </div>
  );
}
