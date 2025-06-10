'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";

const RoseIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-6 w-6"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M12 4C12 4 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 4 12 4Z" />
    <path d="M12 12C12 12 16 14 16 17C16 20 12 20 12 20C12 20 8 20 8 17C8 14 12 12 12 12Z" />
    <path d="M12 12C12 12 14 9 17 9C20 9 20 12 20 12C20 12 20 15 17 15C14 15 12 12 12 12Z" />
    <path d="M12 12C12 12 10 9 7 9C4 9 4 12 4 12C4 12 4 15 7 15C10 15 12 12 12 12Z" />
  </svg>
);

const Logo = ({ className = '' }) => (
  <div className={`flex items-center space-x-2 group ${className}`}>
    <span className="text-rose-600 transition-colors duration-300 group-hover:text-rose-700">
      <RoseIcon />
    </span>
    <span className="text-lg font-serif">
      Garden
      <span className="text-gray-400 mx-1">of</span>
      <span className="text-rose-600 group-hover:text-rose-700 transition-colors duration-300">Words</span>
    </span>
  </div>
);

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['explore', 'journey', 'craft', 'chat'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'explore', label: 'Explore' },
    { id: 'journey', label: 'Journey' },
    { id: 'craft', label: 'Craft' },
    { id: 'chat', label: 'Creative Space' },
  ];

  const NavLinks = ({ onItemClick, isMobile = false }: { onItemClick?: () => void, isMobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            scrollToSection(item.id);
            onItemClick?.();
          }}
          className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300
            ${isMobile ? 'w-full text-center my-2' : ''}
            ${activeSection === item.id
              ? 'text-rose-700'
              : 'text-gray-600 hover:text-rose-600'
            }`}
        >
          {item.label}
        </div>
      ))}
    </>
  );

  return (
    <div className="fixed w-full top-0 z-50">
      <nav className="h-16 border-b border-rose-100/50 bg-white/80 backdrop-blur-sm">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Center on mobile, left on desktop */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            {/* Mobile Menu Button - Right */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="p-2 hover:bg-rose-50/50 rounded-full transition-colors duration-300">
                  <Menu className="h-5 w-5 text-rose-600" />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-sm p-6 bg-white/95 backdrop-blur-lg"
                >
                  <div className="mb-8">
                    <Logo className="justify-center" />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <NavLinks
                      isMobile={true}
                      onItemClick={() => {
                        const closeButton = document.querySelector(
                          '[data-state="open"]'
                        ) as HTMLButtonElement;
                        closeButton?.click();
                      }}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLinks />
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </div>
  );
};

export default Navbar;