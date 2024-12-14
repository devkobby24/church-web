import {Outfit} from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({subsets: ["latin"]})

export const metadata = {
  title: "Glorious Assurance Ministries",
  description: "The Epitome Of Christ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
