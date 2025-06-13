import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "./components/nav";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '../i18n/locales';
import path from 'path';
import fs from 'fs/promises';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FeelGpt",
  description: "FeelGpt",
};

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

async function getMessages(locale) {
  try {
    const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`❌ Failed to load messages for locale: ${locale}`, error);
    notFound(); // triggers the 404 page
  }
}


export default async function RootLayout({ children, params }) {
  const locale = params.locale;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <div>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
