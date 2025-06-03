'use client';

import Image from 'next/image';

export default function MobileFooterBanner({ href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 w-full h-[80px] bg-white z-50 flex items-center justify-center shadow-md lg:hidden"
    >
      <Image
        src="/b-mobile.webp" // your actual image
        alt="Mobile Banner"
        fill
        className="object-cover w-full h-full"
        priority
        unoptimized
      />
    </a>
  );
}
