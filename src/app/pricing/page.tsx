import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson & Boarding Pricing - Pantos Equestrian",
  description: "Transparent pricing for premium riding lessons, horse boarding, and training programs at Pantos Equestrian.",
};

export default function PricingPage() {
  return (
    <section className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 dark:bg-gray-dark md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Transparent Pricing
              </h1>
              <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Premium equestrian services with honest, transparent pricing. Invest in excellence for you and your horse.
              </p>
            </div>
          </div>
        </div>

        {/* Riding Lessons */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-[32px] font-bold leading-tight text-black dark:text-white sm:text-[40px] sm:leading-tight">
            Riding Lessons
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-lg border-2 border-primary bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Private Lessons</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$85</span>
                <span className="text-lg text-body-color dark:text-body-color-dark">/lesson</span>
              </div>
              <ul className="mb-8 space-y-2 text-left text-body-color dark:text-body-color-dark">
                <li>• One-on-one instruction</li>
                <li>• Customized lesson plans</li>
                <li>• All skill levels welcome</li>
                <li>• 60-minute sessions</li>
                <li>• Includes school horse</li>
              </ul>
              <button className="w-full rounded-md bg-primary px-6 py-3 text-white font-semibold transition hover:bg-primary/80">
                Book Now
              </button>
            </div>

            <div className="rounded-lg border-2 border-green-600 bg-gradient-to-b from-green-50 to-green-100 p-8 text-center shadow-lg dark:from-green-900/20 dark:to-green-800/20">
              <div className="mb-4 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                MOST POPULAR
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Semi-Private</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">$60</span>
                <span className="text-lg text-body-color dark:text-body-color-dark">/lesson</span>
              </div>
              <ul className="mb-8 space-y-2 text-left text-body-color dark:text-body-color-dark">
                <li>• 2 riders per lesson</li>
                <li>• Shared learning experience</li>
                <li>• Great for friends/siblings</li>
                <li>• 60-minute sessions</li>
                <li>• Includes school horses</li>
              </ul>
              <button className="w-full rounded-md bg-green-600 px-6 py-3 text-white font-semibold transition hover:bg-green-700">
                Book Now
              </button>
            </div>

            <div className="rounded-lg border-2 border-gray-300 bg-white p-8 text-center shadow-lg dark:border-gray-600 dark:bg-gray-dark">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Group Lessons</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-600">$45</span>
                <span className="text-lg text-body-color dark:text-body-color-dark">/lesson</span>
              </div>
              <ul className="mb-8 space-y-2 text-left text-body-color dark:text-body-color-dark">
                <li>• 3-4 riders per lesson</li>
                <li>• Social learning environment</li>
                <li>• Similar skill levels</li>
                <li>• 60-minute sessions</li>
                <li>• Includes school horses</li>
              </ul>
              <button className="w-full rounded-md bg-gray-600 px-6 py-3 text-white font-semibold transition hover:bg-gray-700">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Boarding */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-[32px] font-bold leading-tight text-black dark:text-white sm:text-[40px] sm:leading-tight">
            Horse Boarding
          </h2>
          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-lg border-2 border-primary bg-white p-8 shadow-lg dark:bg-gray-dark">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Full Board</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$1,200</span>
                <span className="text-lg text-body-color dark:text-body-color-dark">/month</span>
              </div>
              <ul className="mb-8 space-y-2 text-body-color dark:text-body-color-dark">
                <li>• Climate-controlled stall</li>
                <li>• Daily turnout</li>
                <li>• 3 meals per day</li>
                <li>• Daily grooming</li>
                <li>• Blanket service</li>
                <li>• 24/7 monitoring</li>
                <li>• Access to all facilities</li>
              </ul>
              <button className="w-full rounded-md bg-primary px-6 py-3 text-white font-semibold transition hover:bg-primary/80">
                Inquire Now
              </button>
            </div>

            <div className="rounded-lg border-2 border-gray-300 bg-white p-8 shadow-lg dark:border-gray-600 dark:bg-gray-dark">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Partial Board</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-600">$850</span>
                <span className="text-lg text-body-color dark:text-body-color-dark">/month</span>
              </div>
              <ul className="mb-8 space-y-2 text-body-color dark:text-body-color-dark">
                <li>• Climate-controlled stall</li>
                <li>• Daily turnout</li>
                <li>• 2 meals per day</li>
                <li>• Weekly health checks</li>
                <li>• Access to all facilities</li>
                <li>• Optional add-on services</li>
              </ul>
              <button className="w-full rounded-md bg-gray-600 px-6 py-3 text-white font-semibold transition hover:bg-gray-700">
                Inquire Now
              </button>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div>
          <h2 className="mb-12 text-center text-[32px] font-bold leading-tight text-black dark:text-white sm:text-[40px] sm:leading-tight">
            Training Programs
          </h2>
          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Basic Training</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">$650</span>
                <span className="text-sm text-body-color dark:text-body-color-dark">/month</span>
              </div>
              <p className="text-body-color dark:text-body-color-dark">
                Foundation training for young or green horses
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Advanced Training</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">$850</span>
                <span className="text-sm text-body-color dark:text-body-color-dark">/month</span>
              </div>
              <p className="text-body-color dark:text-body-color-dark">
                Specialized training for competition preparation
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Show Training</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">$1,100</span>
                <span className="text-sm text-body-color dark:text-body-color-dark">/month</span>
              </div>
              <p className="text-body-color dark:text-body-color-dark">
                Elite preparation for horse and rider combinations
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Your Equestrian Journey?</h2>
          <p className="mb-6">Contact us today to discuss your needs and schedule a facility tour.</p>
          <button className="rounded-md bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}