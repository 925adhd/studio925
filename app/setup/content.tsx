'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SetupContent() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/setup/domain');
  }, [router]);

  return (
    <div className="min-h-screen bg-brand-warm flex items-center justify-center">
      <p className="text-brand-primary/50 font-sans">Redirecting...</p>
    </div>
  );
}
