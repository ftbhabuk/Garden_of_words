'use client';

import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { SignInButton, SignOutButton, useAuth, useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Trees } from "lucide-react";

export const Navbar = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const [mounted, setMounted] = useState(false);
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed w-full top-0 z-50">
      <nav className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <Trees className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">
                Garden 
                <span className="text-gray-500 mx-1">of</span>
                <span className="text-emerald-600">Words</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('what-is-poetry')}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                What is Poetry
              </button>
              <button
                onClick={() => scrollToSection('poetry-origins')}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Origins
              </button>
              <button
                onClick={() => scrollToSection('poetry-guide')}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Writing Guide
              </button>
              <button
                onClick={() => scrollToSection('chat')}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Chat
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {isSignedIn ? (
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  Sign out
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Sign in
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </div>
  );
};

export default Navbar;