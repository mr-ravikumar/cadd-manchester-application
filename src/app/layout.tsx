"use client"; 
import localFont from "next/font/local";
import Navbar from "./components/navbar/Navbar";  
import "./globals.css"; 
import Footer from "./components/footer/Footer";

// Load custom fonts using `next/font/local`
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", 
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", 
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
        />
        <title>CADD Manchester</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-black`}  // Flex layout to ensure footer is at the bottom
      >
        <Navbar />
        {/* Main content is injected here */}
        <main className="flex-grow">{children}</main> 
        <Footer/>
      </body>
    </html>
  );
}
