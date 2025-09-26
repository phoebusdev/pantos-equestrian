import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-dark dark:via-black/50 dark:to-gray-dark"
      >
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0 z-[-2]">
          <div className="absolute inset-0 bg-[url('/images/hero/luxury-pattern.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.01]"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>

        <div className="container relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[950px] text-center">
                {/* Elegant subtitle */}
                <p className="mb-4 text-sm font-light tracking-[0.3em] text-secondary uppercase">
                  Est. 1987 • Luxury Equestrian Estate
                </p>

                {/* Main heading with luxury typography */}
                <h1 className="mb-6 text-4xl font-light leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl">
                  <span className="font-normal">Pantos</span>
                  <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-light italic text-primary">
                    Equestrian Excellence
                  </span>
                </h1>

                {/* Refined description */}
                <p className="mb-14 text-lg leading-relaxed text-body-color dark:text-body-color-dark max-w-[700px] mx-auto sm:text-xl md:text-2xl font-light">
                  Where tradition meets innovation in the art of horsemanship.
                  Experience unparalleled luxury across our 200-acre estate.
                </p>

                {/* Luxury CTA buttons */}
                <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-medium tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 uppercase"
                  >
                    <span className="relative">Begin Your Journey</span>
                    <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/facilities"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-medium tracking-wider border-2 border-primary text-primary hover:text-white transition-all duration-300 uppercase overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative">Private Tour</span>
                    <svg className="relative ml-3 w-5 h-5 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-body-color/60 dark:text-body-color-dark/60">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>5-Star Rated Facility</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Open Daily 6AM - 9PM</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Countryside Estate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant decorative elements */}
        <div className="absolute bottom-0 left-0 z-[-1] opacity-20 dark:opacity-10">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <defs>
              <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4ab9f" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#b49383" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M0,400 Q100,300 200,350 T400,400 L400,400 L0,400 Z" fill="url(#heroGradient1)" />
          </svg>
        </div>

        <div className="absolute top-0 right-0 z-[-1] opacity-20 dark:opacity-10">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <defs>
              <linearGradient id="heroGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b49383" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#c4ab9f" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M400,0 Q300,100 350,200 T400,400 L400,0 Z" fill="url(#heroGradient2)" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;