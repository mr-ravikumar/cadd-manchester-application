import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image"; // Importing Image component from next/image

const Footer = () => {
  return (
    <footer className="bg-[rgba(248,248,248,1)] text-black pt-10">
<div className="container pt-4 mx-auto lg:h-[300px] pl-2 pr-2 sm:pl-4 sm:pr-4 md:pl-6 md:pr-6 lg:pl-10 lg:pr-2">
    <div className="flex flex-wrap justify-between mb-12">
          {/* About Section with SVG Logo */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6 flex flex-col items-start">
            <Image
              src="/logo-mobile.svg" // Specify the path to the image
              alt="CADDManchester Logo"
              width={120} // Adjust width based on your design needs
              height={48} // Adjust height based on your design needs
              className="h-12 w-auto mb-4"
            />
            <p className="text-black-600 text-sm">
              CADD Manchester Academy – Empowering careers with 3+ years of
              experience in skill development. Offering offline and online
              training across India.
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 md:px-20 text-left">
            <h5 className="text-xl font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/About" className="text-black-600 relative group">
                  About Us
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-black-600 relative group">
                  Contact Us
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="text-black-600 relative group">
                  Blog
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pl-6 text-left">
            <h5 className="text-xl font-semibold mb-4">Popular Exam</h5>
            <p className="text-black-600">SSC (IMTS, CHSL, CGL)</p>
            <p className="text-black-600">Bank (Clerk, IBPS, PO)</p>
            <p className="text-black-600">CUET (UG/PG)</p>
            <p className="text-black-600">TGT/PGT/PRT</p>
            <p className="text-black-600">Railway</p>
            <p className="text-black-600">NDA</p>
            <p className="text-black-600">DSSB</p>
            <p className="text-black-600">UGC</p>
            <p className="text-black-600">Sainik School, Navodaya Vidyalaya</p>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="flex justify-start space-x-6 mb-4 relative bottom-[50px] md:bottom-[120px]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 hover:text-black transition duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 hover:text-black transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 hover:text-black transition duration-300"
          >
            <FaInstagramSquare size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 hover:text-black transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        <div className="flex justify-start relative bottom-[50px] md:bottom-[120px]">
          <p className="text-black-600 text-sm">
            &copy; {new Date().getFullYear()} CADDManchester. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
