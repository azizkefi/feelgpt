'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full top-0 z-50 sticky  flex items-center justify-center  shadow-md">
      <Image
        src="/gpt.png"
        alt="Logo"
        width={240}
        height={240}
        priority
      />
    </nav>
  );
}
