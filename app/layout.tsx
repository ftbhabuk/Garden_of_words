import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { WandIcon } from "@/app/icons";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Magic Spell",
  description: "AI prompting built into your <textarea>",
  metadataBase: new URL("https://magic-spell.vercel.app"),
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      
      <html lang="en">
        <body className={`font-family-'Roboto', font-sans bg-gray-50 dark:bg-gray-950 text-black dark:text-white flex flex-col items-center px-3 py-10 min-h-dvh`}>
          <div className="w-full flex justify-end mb-4">
           
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          
          <Toaster richColors theme="system" />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}

function A(props: any) {
  return (
    <a {...props} className="text-black dark:text-white hover:underline" />
  );
}