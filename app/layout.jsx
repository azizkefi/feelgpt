import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav";


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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

     
        <div className="  ">{children}
          

        </div>
      
     
      </body>
    </html>
  );
}
