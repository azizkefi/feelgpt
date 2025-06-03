'use client';

import Image from "next/image";


export default function BannerPlaceholder({ position = 'left', href = '#' }) {
  const sideClass = position === 'left' ? 'left-0' : 'right-0';
  const imageSrc = position === 'left' ? '/ban1.png' : '/ban2.png';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-0 ${sideClass} w-[160px] h-screen z-50 hidden lg:flex`}
    >
      <Image
        width={160}
        height={600}
        src={imageSrc}
        alt="Banner"
        unoptimized
        priority
        className="w-full h-full "
      />
    </a>
  );
}
