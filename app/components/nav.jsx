'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full top-0 z-90 bg-[#FAF9F6 ] sticky  flex items-center justify-center  shadow-md">
      <Image
        src="/gpt.png"
        alt="Logo"
        width={180}
        height={180}
        priority
      />
    </nav>
  );
}
