import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { Navbar } from "./components/navbar"; // Importing Navbar



export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <html lang="en">
        <body className={`pt-16 font-family-'Roboto', font-sans flex flex-col items-center px-3 min-h-dvh`}>
          <Navbar /> {/* Adding Navbar here */}
          <div className="w-full flex justify-end mb-4">
            {/* SignInButton/UserButton logic */}
          </div>
          <Toaster richColors theme="system" />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
   
  );
}

function A(props: any) {
  return (
    <a {...props} className="text-black dark:text-white hover:underline" />
  );
}
