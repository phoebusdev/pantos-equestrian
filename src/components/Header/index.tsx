"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 60);
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (navbarOpen && !target.closest("#navbar-menu") && !target.closest("#navbarToggler")) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [navbarOpen]);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Facilities", path: "/facilities" },
    { title: "Membership", path: "/pricing" },
    { title: "Events", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        sticky
          ? "bg-white/95 dark:bg-gray-dark/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/images/logo/logo-2.svg"
              alt="Pantos Equestrian"
              width={180}
              height={45}
              className={`transition-all duration-300 dark:hidden ${
                sticky ? "w-[160px]" : "w-[180px]"
              }`}
            />
            <Image
              src="/images/logo/logo.svg"
              alt="Pantos Equestrian"
              width={180}
              height={45}
              className={`hidden transition-all duration-300 dark:block ${
                sticky ? "w-[160px]" : "w-[180px]"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8" style={{ fontFamily: 'Georgia, serif' }}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`relative text-[15px] font-medium tracking-wide uppercase transition-all duration-300 ${
                      pathname === item.path
                        ? "text-primary"
                        : sticky
                        ? "text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                        : "text-white hover:text-primary/90 dark:text-white dark:hover:text-primary"
                    }`}
                  >
                    {item.title}
                    {pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className={`px-6 py-2.5 text-sm font-medium tracking-wider uppercase border-2 transition-all duration-300 ${
                sticky
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-primary"
              }`}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="navbarToggler"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                navbarOpen
                  ? "rotate-45 translate-y-1.5 bg-primary"
                  : sticky
                  ? "bg-dark dark:bg-white"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 my-1 transition-all duration-300 ${
                navbarOpen
                  ? "opacity-0"
                  : sticky
                  ? "bg-dark dark:bg-white"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                navbarOpen
                  ? "-rotate-45 -translate-y-1.5 bg-primary"
                  : sticky
                  ? "bg-dark dark:bg-white"
                  : "bg-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="navbar-menu"
          className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-dark transition-all duration-500 ${
            navbarOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
          style={{
            top: navbarOpen ? "0" : "100vh",
            transition: "top 0.5s ease-in-out, opacity 0.3s ease"
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="text-center">
              <ul className="space-y-6" style={{ fontFamily: 'Georgia, serif' }}>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setNavbarOpen(false)}
                      className={`text-2xl font-light tracking-wider uppercase transition-all duration-300 ${
                        pathname === item.path
                          ? "text-primary"
                          : "text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/contact"
              onClick={() => setNavbarOpen(false)}
              className="mt-10 px-8 py-3 text-lg font-medium tracking-wider uppercase border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;