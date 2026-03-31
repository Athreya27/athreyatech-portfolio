import "./globals.css";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Athreya | DevOps Engineer</title>
        <meta name="description" content="DevOps Portfolio Website" />
      </head>
      <body className="bg-[#0f172a] text-white">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#020617]/70 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/devops-logo.svg"
                alt="DevOps Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-gray-300 text-sm">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="relative group hover:text-white transition"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu (client component for state) */}
            <MobileMenu />

          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="min-h-screen px-4 md:px-8 pt-24 pb-16 max-w-7xl mx-auto">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 py-8 mt-10">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 space-y-2 px-4">
            <div>
              © {new Date().getFullYear()} Athreya Josyula. All rights reserved.
            </div>
            <div className="text-gray-600">
              Built with Next.js • Deployed on AWS • CI/CD Automated
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
