// components/BannerPlaceholder.jsx
'use client';

export default function BannerPlaceholder({ position = 'left', href = '#' }) {
  const sideClass = position === 'left' ? 'left-0' : 'right-0';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-0 ${sideClass} w-[160px] h-screen bg-gray-300 z-50 hidden lg:flex items-center justify-center`}
    >
      <span className="text-sm text-gray-700 font-semibold text-center rotate-90">
        Acheter vos billets
      </span>
    </a>
  );
}
