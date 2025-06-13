'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '../../i18n/locales';
import ReactCountryFlag from "react-country-flag";

const countryCodes = {
  en: 'GB',
  fr: 'FR'
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const handleLanguageChange = (locale) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    // Construct the new path with the selected locale
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <nav className="w-full top-0 p-2 z-50 bg-[#FAF9F6] sticky shadow-md">
      <div className="max-w-6xl mx-auto p-1 lg:p-6 flex items-center relative">
        {/* Logo container - left on mobile, center on desktop */}
        <div className="flex-1 md:flex-none  md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            src="/gpt.png"
            alt="Logo"
            width={180}
            height={180}
            priority
          />
        </div>
        
        {/* Flags - always on the right */}
        <div className="flex gap-2 md:absolute md:right-4">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`hover:scale-110 transition-transform ${
                currentLocale === locale ? 'scale-110 border-3  rounded' : ''
              }`}
              title={`Switch to ${locale.toUpperCase()}`}
            >
              <ReactCountryFlag
                countryCode={countryCodes[locale]}
                svg
                style={{
                  width: '28px',
                  height: '24px',
                }}
                title={locale.toUpperCase()}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
