'use client';

import { MaxWidthWrapper } from './max-width-wrapper';
import Link from 'next/link';
import { Mail, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden pt-10"> {/* Added padding at the top */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-70"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      {/* <MaxWidthWrapper> */}
        <div className="relative border-t border-gray-200 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
            {/* Left Column */}
            <div className="text-center md:text-left md:ml-4"> {/* Moved to absolute left */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Garden <span>Of</span> Words</h3>
              <div className="space-y-4">
                <a
                  href="mailto:sucidesheep@gmail.com"
                  className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">sucidesheep@gmail.com</span>
                </a>
                <div className="flex justify-center md:justify-start space-x-4 pt-2">
                  <a
                    href="https://x.com/FellowTravell20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                  href="https://github.com/Ftbhabok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                  <Github className="w-5 h-5" />
                   </a>
                </div>
              </div>
            </div>

            {/* Empty Middle Column */}
            <div className="hidden md:block"></div>

            {/* Right Column */}
            <div className="text-center md:text-right md:mr-4"> {/* Moved to absolute right */}
              <h4 className="text-lg font-medium text-gray-800 mb-4">Join Our Community</h4>
              <p className="text-sm text-gray-600 mb-4">Ready to showcase your talent?</p>
              <Link
                href="#"
                className="inline-block bg-gray-800 text-white text-sm px-6 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Footer bottom section */}
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} GardenofWords
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      {/* </MaxWidthWrapper> */}
    </footer>
  );
};

export default Footer;
