"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Use Next.js hook instead of window.location
  
  const navItems = [
    { id: 'what-is-poetry', label: 'Explore', href: '/what-is-poetry' },
    { id: 'journey', label: 'Journey', href: '/journey' },
    { id: 'craft', label: 'Craft', href: '/craft' },
    { id: 'creative-space', label: 'Creative Space', href: '/creative-space' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center px-6 py-8">
        <div className="flex items-center space-x-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3">
          {/* Logo */}
          
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <>
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-sm font-light transition-colors ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
                {index === 1 && (
                  <Link href="/" className="w-6 h-6 bg-white rounded-sm flex items-center justify-center hover:bg-white/90 transition-colors">
                    <div className="w-3 h-3 bg-black rounded-sm transform rotate-45" />
                  </Link>
                )}
              </>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}