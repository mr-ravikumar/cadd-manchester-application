import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="text-white py-4 fixed w-full top-0 left-0 z-50 bg-[#000F66] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between w-full">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/logo1.svg"
              alt="Logo"
              width={280}
              height={120}
              className=""
            />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex space-x-8 ml-auto">
            <Link href="/" className="hover:scale-105" onClick={closeMobileMenu}>Home</Link>
            <Link href="/Courses" className="hover:scale-105" onClick={closeMobileMenu}>Courses</Link>
            <Link href="/Exams" className="hover:scale-105" onClick={closeMobileMenu}>Exam</Link>
            <Link href="/Blog" className="hover:scale-105" onClick={closeMobileMenu}>Blog</Link>
            <Link href="/About" className="hover:scale-105" onClick={closeMobileMenu}>About Us</Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white text-black p-4 shadow-lg">
          <ul>
            <li><Link href="/" className="block py-2 px-4" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link href="/Courses" className="block py-2 px-4" onClick={closeMobileMenu}>Courses</Link></li>
            <li><Link href="/Exams" className="block py-2 px-4" onClick={closeMobileMenu}>Exam</Link></li>
            <li><Link href="/Blog" className="block py-2 px-4" onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link href="/About" className="block py-2 px-4" onClick={closeMobileMenu}>About Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
