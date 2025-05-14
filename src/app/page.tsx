'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/vehicles');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
        <Image
          src="/favicon.ico"
          alt="App Logo"
          width={96}
          height={96}
          className="rounded-full shadow-xl animate-pop"
        />

        <h1 className="text-2xl font-bold text-text flex items-center">
          <span className="overflow-hidden whitespace-nowrap border-r-2 border-text animate-typewriter">
            Welcome to Vehicle Hamburg
          </span>
          <span className="animate-blink border-r-2 border-text ml-1 h-6" ></span>
        </h1>
      </div>
    </div>
  );
}
export default Home;
