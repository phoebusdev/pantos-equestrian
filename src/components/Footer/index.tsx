"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-20 pb-10 border-t border-gray-200 dark:bg-gray-dark dark:border-gray-800">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between mb-10">
          {/* Logo & Description */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo/logo-2.svg"
                alt="Pantos Equestrian"
                className="w-[180px] dark:hidden"
                width={180}
                height={45}
              />
              <Image
                src="/images/logo/logo.svg"
                alt="Pantos Equestrian"
                className="hidden w-[180px] dark:block"
                width={180}
                height={45}
              />
            </Link>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-[400px]" style={{ fontFamily: 'Georgia, serif' }}>
              Experience the pinnacle of equestrian excellence at our 200-acre countryside
              estate, where luxury hospitality meets world-class horsemanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 lg:w-2/12 mb-10 lg:mb-0">
            <h3 className="mb-6 text-lg font-medium text-dark dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Discover
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/3 lg:w-3/12">
            <h3 className="mb-6 text-lg font-medium text-dark dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Contact
            </h3>
            <p className="text-body-color dark:text-body-color-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              200 Countryside Lane<br />
              Wellington, FL 33414
            </p>
            <p className="text-body-color dark:text-body-color-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              (561) 555-0123
            </p>
            <p className="text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
              info@pantosequestrian.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-base text-body-color dark:text-body-color-dark" style={{ fontFamily: 'Georgia, serif' }}>
            © {new Date().getFullYear()} Pantos Equestrian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;